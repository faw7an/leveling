import { NextApiRequest, NextApiResponse } from "next";
import * as bcrypt from "bcrypt";
import pool from "@/lib/db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {
      resetToken,
      password,
      confirmPassword,
    }: {
      resetToken: string;
      password: string;
      confirmPassword: string;
    } = req.body;

    console.log(resetToken);
    if (!password || !confirmPassword) {
      return res.status(400).json({ message: "All fields are required" });
    }

    if (!resetToken || !password || !confirmPassword) {
      return res
        .status(400)
        .json({
          message: "Reset token, password, and confirm password are required",
        });
    }
    const saltRounds: number = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);
    const now = new Date();
    let userEmail: string = "";
    // fetch email
    try {
      const results = await pool.query(
        `SELECT * FROM users WHERE resettoken=$1 AND resettokenexpiry > $2`,
        [resetToken, now]
      );

      const user = results.rows[0];
      if (!user) {
        return res.status(400).json({
          message:
            "Invalid or expired reset token. Please request a new password reset.",
        });
      }

      userEmail = user.email;

      try {
        const update = await pool.query(
          `UPDATE users SET password = $1, resettoken = NULL, resettokenexpiry = NULL WHERE email = $2`,
          [hashedPass, userEmail]
        );
        return res.status(200).json({ message: "Password has been reset" });
      } catch (error) {
        console.error("Error:", error);
        return res
          .status(500)
          .json({ message: "Error occurred when reseting password" });
      }
    } catch (error) {
      console.error("DB error:", error);
      return res.status(500).json({
        message: "Unexpected error occurred when reseting password",
        error,
      });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
};
