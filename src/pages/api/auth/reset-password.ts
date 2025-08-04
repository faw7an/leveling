import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import crypto from "crypto";
import { sendEmailForgotPassword } from "@/lib/forgot-password";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const email = req.body.email;
    console.log("Email:", email);
    try {
      const verifyEmail = await pool.query(
        ` SELECT * FROM users WHERE email = $1`,
        [email]
      );
      if (verifyEmail.rows[0]) {
        const resetToken = crypto.randomBytes(30).toString("hex");
        const resetTokenExpiry = new Date(Date.now() + 1000 * 60 * 60 * 24);
        const name = verifyEmail.rows[0].name
        try {
          const response = await pool.query(
            `UPDATE users SET resettoken=$1,resettokenexpiry=$2 WHERE email=$3 `,
            [resetToken, resetTokenExpiry, email]
          );
        //   console.log("name is ",verifyEmail.rows[0].name);
          await sendEmailForgotPassword(email,name,resetToken,resetTokenExpiry);
        } catch (error) {
          console.error("Error updating db:", error);
        }
        return res.status(200).json({ message: "Check reset link in email" });
      } else {
        return res.status(404).json({ message: "Email not found" });
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: err });
    }
  } else{
    return res.status(405).json({message:'Method not allowed'})
  }
}
