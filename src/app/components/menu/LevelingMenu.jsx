"use client";
import React from "react";
import { Trophy, Target, BarChart3, Users } from "lucide-react";
import AchievementMenu from "../achievementMenu/AchievementMenu";
import { useState } from "react";
import Analytics from "../analyticsMenu/Analytics";
import Social from "../socialsMenu/Social";
import TimeFrameSelector from "../timeFrame/TimeFrameSel";

function TabButton({ icon: Icon, label, isActive, onClick }) {
  return (
    <div
      className={`flex flex-row transition-all duration-300 rounded-2xl p-3 px-4 md:px-5 gap-1 md:gap-2 cursor-pointer group
        ${
          isActive
            ? "bg-blue-600 text-white"
            : " m-1 md:m-2 text-gray-400 hover:bg-gray-600 group-hover:text-white"
        }
      `}
      onClick={onClick}
    >
      <Icon color="currentColor" size={20} />
      <p className="hidden sm:block">{label}</p>
    </div>
  );
}

function LevelingMenu() {
  const [activeTab, setActiveTab] = useState("goals");
  const tabs = [
    { id: "goals", icon: Target, label: "Goals" },
    { id: "achievements", icon: Trophy, label: "Achievements" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "social", icon: Users, label: "Social" },
  ];
  return (
    <div>
      <div className="text-gray-400 flex justify-center">
        <div
          className="tab-container flex flex-row justify-center items-center rounded-xl border border-gray-700 bg-gray-800 text-sm w-fit"
        >
          {tabs.map((tab) => (
            <TabButton
              key={tab.id}
              icon={tab.icon}
              label={tab.label}
              isActive={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            />
          ))}
        </div>
      </div>
      <div className="content">
        {(() => {
          switch (activeTab) {
            case "goals":
              return <TimeFrameSelector />;
            case "achievements":
              return <AchievementMenu />;
            case "analytics":
              return <Analytics />;
            case "social":
              return <Social />;
            default:
              return null;
          }
        })()}
      </div>
    </div>
  );
}

export default LevelingMenu;