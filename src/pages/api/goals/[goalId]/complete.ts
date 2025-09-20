import { NextApiRequest, NextApiResponse } from "next";
import { withAuth } from "@/lib/auth-middleware";
import pool from "@/lib/db";
import { DreamGoalService } from "@/lib/dreamGoalService";

async function goalCompleteHandler(req: NextApiRequest, res: NextApiResponse) {
  const { goalId } = req.query;
  const {
    playerId,
    notes,
    completionDate,
    completionTime,
  }: {
    playerId: string;
    notes?: string;
    completionDate?: string;
    completionTime?: string;
  } = req.body;

  if (!goalId || !playerId) {
    return res
      .status(400)
      .json({ message: "Goal Id and player Id are required" });
  }

  if (req.method === "POST") {
    try {
      const defaultCompletionDate = new Date().toISOString().split("T")[0];
      const defaultCompletionTime = new Date().toTimeString().split(" ")[0];

      const actualCompletionDate = completionDate || defaultCompletionDate;
      const actualCompletionTime = completionTime || defaultCompletionTime;
      const actualNotes = notes || "";

      // verify goal exists for specific player
      const goalQuery = await pool.query(
        `
            SELECT g.* , p.current_streak
            FROM goals g
            INNER JOIN players p ON g.player_id = p.id
            WHERE g.id = $1 AND p.id=$2 AND is_active = true
        `,
        [goalId, playerId]
      );

      const goal = goalQuery.rows[0];

      // check if goal is already completed today
      const existingCompletion = await pool.query(
        `
            SELECT id FROM goal_completions
            WHERE goal_id = $1 AND completion_date = $2
        `,
        [goalId, actualCompletionDate]
      );

      if (existingCompletion.rows.length > 0) {
        return res
          .status(409)
          .json({ message: "Goal already completed today" });
      }

      let xpEarned = goal.base_xp;
      // console.log(goal.base_xp);
      
      console.log("first streak fetched",goal.current_streak);
      
      const currentStreak = goal.current_streak + 1;
      console.log("current streak:",currentStreak);
      
      if (currentStreak >= 7) {
        xpEarned = Math.floor(xpEarned * 1.5);
      }

      if (currentStreak >= 30) {
        xpEarned = Math.floor(xpEarned * 2);
      }

      // record goal completion
      await pool.query(
        `
            INSERT INTO goal_completions(goal_id,player_id,completion_date,completion_time,is_completed,xp_earned,streak_count_at_completion,notes)
            VALUES($1,$2,$3,$4,$5,$6,$7,$8)
        `,
        [
          goalId,
          playerId,
          actualCompletionDate,
          actualCompletionTime,
          true,
          xpEarned,
          currentStreak,
          actualNotes,
        ]
      );

      // update goals table
      await pool.query(
        `
            UPDATE goals
            SET current_streak = $1,
                best_streak = GREATEST(best_streak, $1),
                total_completions = total_completions + 1,
                updated_at = NOW()
                
            WHERE id = $2
        `,
        [currentStreak, goalId]
      );

      // update player stats
      await pool.query(
        `
            UPDATE players
            SET total_xp = total_xp + $1,
                current_streak = $2 + 1,
                longest_streak = GREATEST(longest_streak , $2),
                last_activity_date = $3 ,
                updated_at = NOW()
            WHERE id = $4
        `,
        [xpEarned, currentStreak, actualCompletionDate, playerId]
      );

      // update dream goal progress
      let dreamGoalProgress: null | number = null;

      if (goal.dream_goal_id) {
        console.log(`Updating dream goal progress for: ${goal.dream_goal_id}`);

        dreamGoalProgress = await DreamGoalService.updateDreamGoalProgress(
          goal.dream_goal_id
        );

        // update progress in players table
        if (dreamGoalProgress >= 100) {
          await pool.query(
            `
                UPDATE players
                SET total_dreams_completed = total_dreams_completed + 1
                WHERE id=$1 
            `,
            [playerId]
          );
        }
      }

      return res.status(201).json({
        message: "Goal completed successfully",
        dreamGoalProgress: dreamGoalProgress
          ? Math.round(dreamGoalProgress * 100) / 100
          : null,
        xpEarned,
        dreamGoalId: goal.dream_goal_id,
        currentStreak,
      });
    } catch (error) {
      console.error("Error completing goal:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}

export default withAuth(goalCompleteHandler);
