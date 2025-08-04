import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcrypt";
import pool from "@/lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      email,
      resetToken,
      password,
      confirmPassword,
    }: {
      email?: string;
      resetToken?: string;
      password: string;
      confirmPassword: string;
    } = req.body;

    console.log(resetToken);
    if (!password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!email && !resetToken) {
      return res
        .status(400)
        .json({ message: "Either email or reset token should be provided" });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Password don't match" });
    }

    const saltRounds: number = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);

    // fetch email
    try {
      let userEmail: string ='';

      if (resetToken) {
        const fetchEmail = await pool.query(
          `SELECT * FROM users WHERE resettoken=$1`,
          [resetToken]
        );

        if (fetchEmail.rows.length === 0) {
          return res.status(400).json({ message: "Invalid token or expired" });
        }
        // const email = fetchEmail.rows[0].email;

        userEmail = fetchEmail.rows[0].email;
      } else if (email) {
        userEmail = email;
      }

      // when back set email to userEmail in db
      try {
        const response = await pool.query(
          `UPDATE users SET password = $1 WHERE email = $2`,
          [hashedPass, userEmail]
        );
        return res.status(200).json({ message: "Password has been reset" });
      } catch (error) {
        console.error("Error:", error);
        return res
          .status(500)
          .json({ message: "Error occured when reseting password" });
      }
    } catch (error) {}
    // Update db:
  } else {
    return res.status(405).json({message:'Method not allowed'});
  }
};
