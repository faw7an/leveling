import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import * as bcrypt from "bcrypt";
import { sendEmailVerification } from "@/lib/sendEmailVerification";
import crypto from 'crypto';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      name,
      username,
      email,
      pass,
      confirmPass,
    }: {
      name: string;
      username: string;
      email: string;
      pass: string;
      confirmPass: string;
    } = req.body;

    if (!name || !username || !email || !pass) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (pass !== confirmPass) {
      return res.status(400).json({ message: `Password doesn't match` });
    }

    // Check for existing user email
    const results = await pool.query("SELECT * FROM users WHERE email = $1 OR username=$2", [
      email,username
    ]);

    const existingUser = results.rows[0];

    if (existingUser) {
      return res.status(409).json({ message: "User with this email or username exists" });
    }

    const saltRounds: number = 10;
    // hash pass
    const hashedPass = await bcrypt.hash(pass, saltRounds);
    // console.log(hashedPass);

    // random token for email verification
    const token = crypto.randomBytes(32).toString('hex');
    const tokenExpiration = new Date(Date.now() + 1000*60*60*24);  
    // Insert in db:
    try {
      const results = await pool.query(`
        INSERT INTO users(name,email,username,password,verifytoken, verifytokenexpiresat)
        VALUES($1,$2,$3,$4,$5,$6)
        RETURNING id, name, username, email;
        `,[name , email, username, hashedPass, token, tokenExpiration]
    );
      // console.log(results.rows[0]);
      await sendEmailVerification(email,name,token,tokenExpiration);

      return res.status(201).json({
        message: "User created successfully",
        user: results.rows[0],
      });
    } catch (err) {
      console.error("Error inserting user to db:", err);
      return res.status(500).json({ message: "Database error" });
    }
  } catch (error) {
    console.error("Error:", error);
  }
}
