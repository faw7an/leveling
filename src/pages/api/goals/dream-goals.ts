import { NextApiRequest, NextApiResponse } from "next";
import pool from "@/lib/db";
import { withAuth } from "@/lib/auth-middleware";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    // userId,
    // playerId,
    title,
    description,
    category,
    duration,
    isPublic,
    // startDate,
    targetDate,
  }: {
    // userId?: string;
    // playerId: string;
    title: string;
    description: string;
    category: string;
    duration: number;
    isPublic: boolean;
    // startDate: Date;
    targetDate: Date;
  } = req.body;

  if (
    !title?.trim() ||
    !description?.trim() ||
    !category?.trim() ||
    !duration ||
    // !startDate ||
    !targetDate
  ) {
    return res.status(400).json({ message: "All fields required" });
  }

  // grabbing necesities
  const startDate = new Date().toISOString().split("T")[0];
  const userId = req.user?.userId;


  if (req.method === "POST") {
    try {
      let actualPlayerId: any;

      //Check if playerId exists
      const results = await pool.query(`SELECT id FROM players WHERE user_id=$1`, [
        userId,
      ]);

      actualPlayerId = results.rows[0].id;
      if (!actualPlayerId) {
        console.log("Player not found, creating player");

        if (!userId) {
          return res
            .status(400)
            .json({ message: "Player not found and userId not provided" });
        }

        // Check if user id is valid
        const checkUserId = await pool.query(
          `SELECT id FROM users WHERE id=$1`,
          [userId]
        );

        if (checkUserId.rows.length === 0) {
          return res.status(404).json({ message: "User not found" });
        }

        const response = await pool.query(
          `
                    INSERT INTO players(user_id) 
                    VALUES($1) RETURNING id`,
          [userId]
        );
        const player_id = response.rows[0].id;

        // update actual id
         actualPlayerId = player_id;
      } else {
        console.log("Player was found");
      }

      await pool.query(
        ` INSERT INTO dream_goals(player_id,title,description,category,target_duration_months,is_public,start_date,target_completion_date) 
        VALUES($1,$2,$3,$4,$5,$6,$7,$8)
        `,
        [
          actualPlayerId,
          title,
          description,
          category,
          duration,
          isPublic,
          startDate,
          targetDate,
        ]
      );
      return res.status(201).json({ message: "Dream created successfully" });
    } catch (error) {
      console.error("Backend error creating dream goal:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

export default withAuth(handler);
