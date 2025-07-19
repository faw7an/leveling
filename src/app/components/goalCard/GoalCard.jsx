import React from "react";
import TimeFrameSelector from "../timeFrame/TimeFrameSelector";
import { Brain, Star } from "lucide-react";

function GoalCard({
  DailyGoal,
  difficulty,
  starCount,
  completedMilestones,
  outOfMilestones,
  difficultyColor,
  progress,
}) {
  return (
    <div>
      <TimeFrameSelector />
      {/* Daily */}
      <div className="ml-25 m-5 w-300 p-4 bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 rounded-lg ">

      </div>

      {/* Weekly Frame */}
      <div className="ml-25 m-5 w-300 p-4 bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 rounded-lg ">
        <div className="flex justify-between">
          <div className=" flex gap-2">
            <div className="bg-orange-500 p-2 h-10 rounded-lg">
              <Brain color="white" />
            </div>
            <div>
              <p className="font-bold text-lg ml-2">{DailyGoal}</p>
              <p className="text-gray-400 text-sm m-2">
                {completedMilestones}/{outOfMilestones}
              </p>
            </div>
          </div>
          <div className="flex gap-5">
            <span className={`${difficultyColor} text-sm`}>{difficulty}</span>
            <div className="flex flex-col gap-2">
              <div className="flex gap-1">
              <Star size={16} color="yellow" />
              <span className="text-yellow-400 text-sm">{starCount}</span>
              </div>
              <div className=" text-blue-400">{progress}%</div>
            </div>
          </div>
        </div> 
        <div className="w-280 mt-2 ml-12 bg-gray-700 h-2 rounded-lg ">  
          <div
            className="bg-orange-500 h-2 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default GoalCard;
