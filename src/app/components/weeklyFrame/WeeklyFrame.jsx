import React from "react";
import { Star } from "lucide-react";

function WeeklyFrame({
  goalTitle,
  difficulty,
  starCount,
  completedMilestones,
  outOfMilestones,
  difficultyColor,
  goalIcon,
  bgColor,
}) {
  const progress = Math.round((completedMilestones / outOfMilestones) * 100);

  return (
    <div className="ml-25 mt-0 m-5 W-70 lg:w-160 p-4 bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 rounded-2xl ">
      <div className="flex justify-between">
        <div className=" flex gap-2">
          <div className={`${bgColor} p-2 h-8 rounded-lg`}>{goalIcon}</div>
          <div>
            <p className="text-sm ml-2">{goalTitle}</p>
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
      <div className="w-auto mt-2 ml-12 bg-gray-700 h-2 rounded-lg ">
        <div
          className={`${bgColor} h-2 rounded`}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export default WeeklyFrame;
