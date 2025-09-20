import { NextApiRequest, NextApiResponse } from "next";
import { DreamGoalService } from "@/lib/dreamGoalService";
import { withAuth } from "@/lib/auth-middleware";

async function dreamGoalProgressHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const dreamGoalId = req.query;

  if (!dreamGoalId || typeof dreamGoalId !== "string") {
    return res.status(400).json({ message: "Dream goal id is required" });
  }

  if (req.method === "GET") {
    try {
      const progress = await DreamGoalService.getDreamGoalProgress(dreamGoalId);

      if (!progress) {
        return res.status(404).json({ message: "Dream goal not found" });
      }

      return res.status(200).json({
        success: true,
        data: progress,
      });
    } catch (error) {
      console.log("Error fetching dream goal progress:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  } else if (req.method === "POST") {
    try {
      const newProgress =
        await DreamGoalService.updateDreamGoalProgress(dreamGoalId);

      return res.status(200).json({
        success: true,
        message: "Progress recalculated successfully",
        progress_percentage: Math.round(newProgress * 100) / 100,
      });
    } catch (error) {
      console.error("Error recalculating dream goal progress:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  }
}

export default withAuth(dreamGoalProgressHandler);