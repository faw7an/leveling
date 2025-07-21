import { Flame, Star, Circle, CircleCheckBig } from "lucide-react";
import React from "react";
function DailyFrame({
  goalIcon,
  goalTitle,
  checkedIcon,
  difficulty,
  starCount,
  streakCount,
  difficultyColor,
}) {
  return (
    <div>
      <div className="ml-25 mt-0 m-5 flex justify-between w-160 p-4 bg-gray-800 border border-gray-700 hover:border-gray-600 transition-all duration-300 rounded-2xl group">
        <div className="flex flex-row gap-2">
          <div className="h-8 bg-blue-400 rounded-lg p-2 w-8 m-1">
            {goalIcon}
          </div>
          <div className="flex flex-col">
            <p className="group-hover:text-blue-400 transition-all duration-300">
              {goalTitle}
            </p>
            <div className="flex flex-row gap-2 mt-2">
              <Circle size={20} className="text-blue-400 " />
              {/* <CircleCheckBig size={20} className="text-blue-400"/> */}
              <p className="text-sm text-gray-400">Completed | Pending</p>
            </div>
          </div>
        </div>
        <div className="flex flex-row gap-3 ">
          <div className={`text-sm ${difficultyColor}`}>{difficulty}</div>
          <div className="">
            <div className="flex gap-1 mb-2">
              <Star color="yellow" size={14} className="mt-1" />
              <div className="text-sm text-orange-400">{starCount}</div>
            </div>
            <div className="flex gap-1">
              <Flame color="yellow" size={16} />
              <div className="text-sm text-orange-400">{streakCount}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DailyFrame;
