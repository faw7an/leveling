import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import { withAuth } from "@/lib/auth-middleware";

async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user_id = req.user!.userId;
    console.log(user_id);
  if (req.method === "POST") {
    
   
    if (!user_id) {
      return res.status(400).json({ message: "User Id is required" });
    }
    try {
    // check if user exists
    const response = await pool.query(`SELECT * FROM users WHERE id=$1`, [
      user_id,
    ]);
    const checkUserExists = response.rows[0];

    if (!checkUserExists) {
      return res.status(404).json({ message: "User not found" });
    }
    // check if player exists already
    const existingPlayer = await pool.query(`SELECT * FROM players WHERE user_id = $1`,[user_id]);
    if (existingPlayer.rows[0]){
        return res.status(409).json({message:'Player already exists'});
    }
    // Fetch players from users
    
      // if !player => register
      const results = await pool.query(
        `INSERT INTO players(user_id) VALUES($1) RETURNING id, user_id, level, total_xp, current_streak`,
        [user_id]
      );
      const newPlayer = results.rows[0];
      return res.status(201).json({
        message: "Player profile created successfully",
        player: { newPlayer },
      });
    } catch (error) {
      console.error("DB error creating a player:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }

  if (req.method === "DELETE") {
    if (!user_id) {
    return res.status(400).json({ message: "User ID is required" });
    }
    // check if player exists
    try {
      const response = await pool.query(
        `SELECT * FROM players WHERE user_id = $1`,
        [user_id]
      );
      const player = response.rows[0];

      if (!player) {
        return res.status(404).json({ message: "Player not found" });
      }

      await pool.query(`DELETE FROM players WHERE user_id = $1`,[user_id]);
      return res.status(200).json({message:'Player deleted successfully'});
    } catch (error) {
        console.error('Error deleting player',error);
        res.status(500).json({message:'Internal server error'});
    }
  }
  return res.status(405).json({message:'Method not allowed'});
}

export default withAuth(handler);
