import pool from "./db";

export class DreamGoalService {
  static async updateDreamGoalProgress(dreamGoalId: string): Promise<number> {
    try {
      console.log("Updating progress for dream goal");

      // get dream goal info
      const dreamGoalQuery = await pool.query(
        `
                    SELECT id,start_date,target_completion_date,status
                    FROM dream_goals
                    WHERE Id=$1
                `,
        [dreamGoalId]
      );
      if (dreamGoalQuery.rows.length === 0) {
        return 0;
      }

      const { start_date, target_completion_date, status } =
        dreamGoalQuery.rows[0];

      if (status !== "active") {
        console.log("Dream goal is not active, skipping progress update");
        return 0;
      }

      const targetDate = new Date(target_completion_date);
      const startDate = new Date(start_date);
      const currentDate = new Date();

      const totalDays =
        Math.floor(
          (targetDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        ) + 1;

      const daysElapsed = Math.min(
        totalDays,
        Math.floor(
          (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
        ) + 1
      );
      // console.log("current time:",currentDate.getTime() );
      // console.log("start time:",startDate.getTime());

      console.log("days elapsed", daysElapsed);
      console.log("total days", totalDays);
      // Get days with completed goals
      const activeDaysQuery = await pool.query(
        `
                    SELECT COUNT(DISTINCT gc.completion_date) as active_days
                    FROM goal_completions gc
                    INNER JOIN goals g 
                    ON gc.goal_id = g.id
                    WHERE g.dream_goal_id = $1
                    AND gc.completion_date BETWEEN $2 AND $3 
                    AND gc.is_completed = true
                    AND g.is_active = true 
                `,
        [
          dreamGoalId,
          startDate.toISOString().split("T")[0],
          currentDate > targetDate
            ? targetDate.toISOString().split("T")[0]
            : currentDate.toISOString().split("T")[0],
        ]
      );

      console.log("Query result:", activeDaysQuery.rows[0]);

      const active_days = activeDaysQuery.rows[0].active_days;
      // console.log(active_days);

      const activeDays = parseInt(active_days);
      console.log("active days", activeDays);

      // calculate progress %
      const progressPercentage =
        daysElapsed > 0 ? Math.min(100, (activeDays / totalDays) * 100) : 0;

      console.log(
        `Progress calculation: ${activeDays} activedays / ${daysElapsed}`
      );

      // update progress %
      await pool.query(
        `
                    UPDATE dream_goals
                    SET progress_percentage = $1 , updated_at = NOW()
                    WHERE id = $2
                `,
        [Math.round(progressPercentage * 100) / 100, dreamGoalId]
      );

      // check if preogress is 100%
      if (progressPercentage >= 100 && currentDate >= targetDate) {
        await pool.query(
          `
                        UPDATE dream_goals
                        SET status = 'completed',actual_completion_date=$1,updated_at = NOW()
                        WHERE id = $2
                    `,
          [currentDate.toISOString().split("T")[0], dreamGoalId]
        );
        console.log("Dream goal achieved");
      }

      return progressPercentage;
    } catch (error) {
      console.error("Error updating dream goal progress:", error);
      throw error;
    }
  }

  // Get dream goal progress with stats
  static async getDreamGoalProgress(dreamGoalId: string) {
    try {
      const result = await pool.query(
        `
        SELECT 
          dg.*, 
          (dg.target_completion_date - dg.start_date + 1) as total_days,
          CASE 
            WHEN CURRENT_DATE > dg.target_completion_date 
            THEN dg.target_completion_date - dg.start_date + 1
            ELSE CURRENT_DATE - dg.start_date + 1
          END as days_elapsed,
          COUNT(g.id) as linked_goals_count,
          COUNT(CASE WHEN g.is_active THEN 1 END) as active_linked_goals_count,
          COALESCE(stats.active_days, 0) as days_with_activity,
          COALESCE(stats.total_completions, 0) as total_goal_completions
        FROM dream_goals dg
        LEFT JOIN goals g ON dg.id = g.dream_goal_id
        LEFT JOIN (
          SELECT 
            g2.dream_goal_id,
            COUNT(DISTINCT gc.completion_date) as active_days,
            COUNT(gc.id) as total_completions
          FROM goals g2
          INNER JOIN goal_completions gc ON g2.id = gc.goal_id
          WHERE gc.is_completed = true
          GROUP BY g2.dream_goal_id
        ) stats ON dg.id = stats.dream_goal_id
        WHERE dg.id = $1
        GROUP BY dg.id, dg.title, dg.start_date, dg.target_completion_date, 
                 dg.progress_percentage, dg.status, stats.active_days, stats.total_completions
      `,
        [dreamGoalId]
      );

      return result.rows[0];
    } catch (error) {
      console.error("Error getting dream goal progress:", error);
      throw error;
    }
  }
}
