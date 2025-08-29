import React, { use } from "react";
import { Shield } from "lucide-react";

function XpBar({ userLevel, userXP, nextLevelXP, streakShields }) {
  
  return (
    <div className="w-75 lg:w-343 bg-gray-800 border rounded-lg border-gray-700 hover:border-gray-600 m-3 ml-5">
      <div className="flex flex-row justify-between gap-2 m-5">
       <div className="flex flex-row gap-2">
        <div className="text-sm lg:text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-5 h-5 lg:w-7 lg:h-7 font-bold flex flex-center justify-center ">
          {userLevel}
        </div>
        <p className="font-bold text-sm lg:text-xl">Level {userLevel}</p>
        </div>
          <div className="flex flex-row gap-1">
            <Shield color="#60A5FA" size={20} />
            <span className="text-sm text-blue-400">{streakShields}</span>
          </div>
      </div>
      <div className="w-65 lg:w-320 h-2 mx-5 mb-2 bg-gray-700 border border-gray-700  rounded-full ">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2"
          style={{ width: `${(userXP / nextLevelXP) * 100}%` }}
        ></div>
      </div>
      <div className="text-sm ml-5 text-gray-400 flex justify-between mx-5 my-3">
        <div>{userXP} XP</div>
        <div>{nextLevelXP} XP</div>
      </div>
    </div>
  );
}

export default XpBar;
