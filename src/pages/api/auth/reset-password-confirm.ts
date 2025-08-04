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
      return res.status(400).json({ message: "Passwords don't match" });
    }

    const saltRounds: number = 10;
    const hashedPass = await bcrypt.hash(password, saltRounds);
    const now = new Date();
    let userEmail: string = "";
    // fetch email
    try {
      const results = resetToken
        ? await pool.query(`SELECT * FROM users WHERE resettoken=$1`, [
            resetToken,
          ])
        : await pool.query(`SELECT * FROM users WHERE email = $1`, [email]);

      const user = results.rows[0];
      if (!user) {
        return res
          .status(400)
          .json({ message: resetToken ? "Invalid token try to generate a new reset link" : "User not found" });
      }
 
      if (!user.resettokenexpiry || user.resettokenexpiry <= now) {
        return res.status(400).json({ message: (!user.resettokenexpiry)?"Please generate a reset token ":"Reset token expired" });
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

// let userEmail: string = "";
//       let fetchEmail: any = null;
//       if (resetToken) {
//         fetchEmail = await pool.query(
//           `SELECT * FROM users WHERE resettoken=$1`,
//           [resetToken]
//         );

//         if (fetchEmail.rows.length === 0) {
//           return res.status(400).json({ message: "Invalid token or expired" });
//         }
//         // const email = fetchEmail.rows[0].email;
//         userEmail = fetchEmail.rows[0].email;
//       } else if (email) {
//         fetchEmail = await pool.query(`SELECT * FROM users WHERE email = $1`, [
//           email,
//         ]);

//         if (fetchEmail.rows.length === 0) {
//           return res.status(400).json({ message: "User not found" });
//         }

//         if (fetchEmail.rows[0].resettokenexpiry < now) {
//           return res.status(400).json({ message: "Reset token has expired" });
//         }

//         userEmail = email;
//       }
//   try {
//     const update = await pool.query(
//       `UPDATE users SET password = $1, resettoken = NULL, resettokenexpiry = NULL WHERE email = $2`,
//       [hashedPass, userEmail]
//     );
//     return res.status(200).json({ message: "Password has been reset" });
//   } catch (error) {
//     console.error("Error:", error);
//     return res
//       .status(500)
//       .json({ message: "Error occured when reseting password" });
//   }
