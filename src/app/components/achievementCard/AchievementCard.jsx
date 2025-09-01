import React from "react";

function AchievementCard({
  achievementIcon,
  achievementTitle,
  description,
  unlockDate,
}) {
  return (
    <div className="mt-5 w-75 sm:w-120 md:w-160 lg:w-115 p-4 bg-gray-800 border border-gray-700 hover:border-orange-600 transition-all duration-300 rounded-2xl ">
      <div className="flex flex-row">
        <div className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl flex justify-center items-center mr-2">{achievementIcon}</div>
    
          <div>
            <p className="text-orange-400">{achievementTitle}</p>
            <p className="text-sm text-gray-400">{description}</p>
            <div className="text-sm text-orange-400 mt-3">Unlocked {unlockDate}</div>
          
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;

