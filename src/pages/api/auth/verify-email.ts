import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";


//This api used to verifyb email after user registered 
export default async function GET(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;

  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  if (!token || typeof token !== "string") {
    console.log("Invalid token");
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    const results = await pool.query(
      `
            SELECT * FROM users WHERE verifytoken=$1
            `,
      [token]
    );
    const user = results.rows[0];

    if (!user) {
      return res.status(500).json({ message: "Invalid token" });
    }

    const now = new Date();

    if (user.verifytokenexpiresat && now > user.verifytokenexpiresat) {
      return res.status(400).json({ message: "Token has already expired." });
    } else {
      await pool.query(
        `
                UPDATE users 
                SET isverified = true,verifytoken = NULL, verifytokenexpiresat = NULL WHERE id=$1;`,
        [user.id]
      );
    }

    return res.status(200).json({ message: "User verified successfully" });
  } catch (err) {
    console.error("Error:", err);
    return res
      .status(500)
      .json({ message: "Internal server error" });
  }
}
 