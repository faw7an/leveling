"use client"
import React from "react";
import { Trophy, Target, BarChart3, Users } from "lucide-react";
import AchievementMenu from "../achievementMenu/AchievementMenu";
import GoalMenu from "../prevGoalMenu/prevGoalMenu";
import { useState } from "react";
import Analytics from "../analyticsMenu/Analytics";
import Social from "../socialsMenu/Social";
import TimeFrameSelector from "../goalMenu/GoalMenu";

function LevelingMenu() {

  const [activeTab , setActiveTab] = useState("goals")
  return (
    <div>
      <div className=" text-gray-400 flex justify-center  w-full">
      <div className="flex rounded-2xl bg-gray-800 text-sm md:ml-5 lg:ml-5 w-65 lg:w-135 justify-center item-center">
        <div className="lg:pr-2 md:pr-2 pb-2">
          <div className="flex flex-direction bg-blue-600 text-white px-5 hover:bg-gray-600 hover:text-white transition-all duration-300 rounded-2xl p-3 gap-2 cursor-pointer"
          onClick={()=>setActiveTab("goals")}
          >
            <Target color="currentColor" size={20} />
            <p className="hidden sm:block lg:block xl:block">Goals</p>
          </div>
        </div>
        <div className="lg:pr-2 md:pr-2 pb-2">
          <div className="flex flex-direction hover:bg-gray-600 px-5 hover:text-white transition-all duration-300 rounded-2xl p-3 gap-2 cursor-pointer"
            onClick={()=>setActiveTab("achievements")}
          >
            <Trophy color="currentColor" size={20} />
            <p className="hidden sm:block lg:block xl:block">Achievements</p>
          </div>
        </div>
        <div className="lg:pr-2 md:pr-2 pb-2">
          <div className="flex flex-direction hover:bg-gray-600 px-5 hover:text-white transition-all duration-300 rounded-2xl p-3 gap-2 cursor-pointer"
            onClick={()=>setActiveTab("analytics")}
            >
            <BarChart3 color="currentColor" size={20} />
            <p className="hidden sm:block lg:block xl:block">Analytics</p>
          </div>
        </div>
        <div className=" lg:pr-2 md:pr-2 pr-2">
        <div className="flex flex-direction mr-[-10] hover:bg-gray-600 px-5 hover:text-white transition-all duration-300 rounded-2xl p-3 gap-2 cursor-pointer"
          onClick={()=>setActiveTab("social")}>
          <Users color="currentColor" size={20} />
          <p className="hidden sm:block lg:block xl:block">Social</p>
        </div>
        </div>
      </div>
    </div>
    {
     ( ()=>{
      switch(activeTab){
        case "goals":
          return <TimeFrameSelector />;
        case "achievements":
          return <AchievementMenu />;
        case "analytics":
          return <Analytics />
        case "social":
          return <Social />
      }
     }) ()
    }

    </div>
  );
}

export default LevelingMenu;
