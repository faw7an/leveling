import React, { use } from "react";
import { Shield } from "lucide-react";

function XpBar({ userLevel, userXP, nextLevelXP, streakShields }) {
  return (
    <div className="w-343 bg-gray-800 border rounded-lg border-gray-700 hover:border-gray-600 m-3 ml-5">
      <div className="flex flex-row justify-between gap-2 m-5">
       <div className="flex flex-row gap-2">
        <div className="text-lg text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-7 h-7 font-bold flex flex-center justify-center ">
          {userLevel}
        </div>
        <p className="font-bold text-xl">Level {userLevel}</p>
        </div>
          <div className="flex flex-row gap-1">
            <Shield color="#60A5FA" size={20} />
            <span className="text-sm text-blue-400">{streakShields}</span>
          </div>
      </div>
      <div className="w-320 h-2 mx-5 mb-2 bg-gray-700 border border-gray-700  rounded-full ">
        <div
          className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full h-2"
          style={{ width: `${(userXP / nextLevelXP) * 100}%` }}
        ></div>
      </div>
      <div className="text-sm ml-5 text-gray-400 grid grid-cols-2 gap-280">
        <div>{userXP} XP</div>
        <div>{nextLevelXP} XP</div>
      </div>
    </div>
  );
}

export default XpBar;
