import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import { withAuth } from "@/lib/auth-middleware";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    playerId,
    dreamId,
    title,
    description,
    category,
    difficulty,
    baseXp,
    frequency,
  }: {
    playerId: string;
    dreamId?: string;
    title: string;
    description?: string;
    category: string;
    difficulty: string;
    baseXp: number;
    frequency: string;
  } = req.body;

  if (req.method === "POST") {
    try {
      // check if player exists
      if (!playerId) {
        return res.status(400).json({ message: "Player id required" });
      }

      const results = await pool.query(`SELECT * FROM players WHERE id=$1`, [
        playerId,
      ]);
      const existingPlayer = results.rows[0];

      if (!existingPlayer) {
        return res.status(404).json({ message: "Player not found" });
      }

      const lookUpDream = await pool.query(
        `SELECT * FROM dream_goals WHERE id=$1`,
        [dreamId]
      );
      const existingDream = lookUpDream.rows[0];

      if (existingPlayer && existingDream) {
        console.log("Player and dream exists");
        await pool.query(
          `
                INSERT INTO goals(player_id,dream_goal_id,title,description,frequency,category,difficulty,base_xp)  
                VALUES($1,$2,$3,$4,$5,$6,$7,$8)
                `,
          [
            playerId,
            dreamId,
            title,
            description,
            frequency,
            category,
            difficulty,
            baseXp,
          ]
        );
      } else if (existingPlayer) {
        console.log("Player exists");
        await pool.query(
          `
                INSERT INTO goals(player_id,title,description,frequency,category,difficulty,base_xp)  
                VALUES($1,$2,$3,$4,$5,$6,$7)
                `,
          [
            playerId,
            title,
            description,
            frequency,
            category,
            difficulty,
            baseXp,
          ]
        );
      }
      return res.status(201).json({ message: "Goal created successfully" });
    } catch (error) {
      console.error("Error creating goal:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
     return res.status(405).json({ message: "Method not allowed" });
  }
}

export default withAuth(handler);
