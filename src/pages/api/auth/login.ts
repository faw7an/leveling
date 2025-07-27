import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import * as bcrypt from "bcrypt";
import jwt, { SignOptions } from 'jsonwebtoken';
import { serialize,parse } from "cookie";


export default async function POST(req: NextApiRequest, res: NextApiResponse) {
  const {
    username,
    pass,
  }: {
    username: string;
    pass: string;
  } = req.body;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  if (!username || !pass) {
    return res.status(400).json({ message: "All fields required" });
  }

  try {
    // Fetch data from user table
    const results = await pool.query(
      ` 
      SELECT * FROM users WHERE email = $1 OR username =$1  
       `,
      [username]
    );

    const user = results.rows[0];
    if(!user){
        console.error("Invalid email or username");
        return res.status(401).json({message:'Invalid email or username'})
    } 

    const comparePass = await bcrypt.compare(pass, user.password);
    
    if(!comparePass){
        res.status(401).json({message:'Invalid password'});
    }
    
    const payload = {
        username : username,
        password : pass
    }
    
    const secretKey = process.env.SECRET_KEY;
    
    if(!secretKey){
       return res.status(500).json({message:'invalid secretKey'});
    }
    
    const options: SignOptions = {
        expiresIn: '1h'
    };

    const token = jwt.sign(payload, secretKey, options);
    // console.log('Genarated token:',token);

    // store jwt as cookie 
    const serializedCookie = serialize('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Only secure in production
        sameSite: 'strict',
        maxAge: 60 * 60, // 1 hour in seconds
        path: '/'
    });
    
    res.setHeader('Set-Cookie', serializedCookie);
    
    // To check what you're setting:
    console.log('Serialized cookie:', serializedCookie);
    
    // To parse existing cookies from request:
    const existingCookies = req.headers.cookie || '';
    const parsedCookies = parse(existingCookies);
    console.log('Existing cookies:', parsedCookies);
    
    // To parse the cookie you just set (for testing):
    const testParsed = parse(serializedCookie);
    console.log('Newly set cookie parsed:', testParsed);
    
    res.status(200).json({
        message: 'Logged in successfully',
        cookieSet: serializedCookie, // You can send this back to see in response
        existingCookies: parsedCookies
    });

} catch (err) {
    console.error("Error:", err);
  };
};
