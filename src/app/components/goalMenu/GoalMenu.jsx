"use client";
import React from "react";
import { useState } from "react";
import DailyFrame from "../dailyFrame/DailyFrame";
import WeeklyFrame from "../weeklyFrame/WeeklyFrame";

import {
  Brain,
  Code,
  User,
  BookOpen,
  Users,
  Heart,
  Dumbbell,
} from "lucide-react";

function TimeFrameSelector() {
  const [activeTab, setActiveTab] = useState("daily");
  return (
    <div>
      <div className="text-gray-400 flex gap-3 m-5 ml-5 w-100 justify-center rounded-lg">
        <div
          className="cursor-pointer bg-gray-800 p-3 rounded-lg"
          onClick={() => {
            setActiveTab("daily");
          }}
        >
          Daily
        </div>
        <div
          className="cursor-pointer bg-gray-800 p-3 rounded-lg"
          onClick={() => {
            setActiveTab("weekly");
          }}
        >
          Weekly
        </div>
        <div
          className="cursor-pointer bg-gray-800 p-3 rounded-lg"
          onClick={() => {
            setActiveTab("monthly");
          }}
        >
          Monthly
        </div>
      </div>
      <>
        {(() => {
          switch (activeTab) {
            case "daily":
              return (
                <DailyFrame
                  goalIcon={<Dumbbell color="white" size={16} />}
                  goalTitle={"Workout 2 hours"}
                  difficulty={"hard"}
                  starCount={50}
                  streakCount={9}
                  difficultyColor={"text-red-400"}
                />
              );
            case "weekly":
              return (
                <WeeklyFrame
                  goalIcon={<Code color="white" size={16} />}
                  goalTitle={"Code 5 hours a day"}
                  starCount={400}
                  completedMilestones={3}
                  outOfMilestones={7}
                  difficulty={"medium"}
                  difficultyColor={"text-orange-400"}
                  bgColor={"bg-purple-500"}
                />
              );
            case "monthly":
              return (
                <WeeklyFrame
                  goalIcon={<BookOpen color="white" size={16} />}
                  goalTitle={"Read 4 Books"}
                  starCount={400}
                  completedMilestones={1}
                  outOfMilestones={4}
                  difficulty={"easy"}
                  difficultyColor={"text-green-400"}
                  bgColor={"bg-green-500"}
                />
              );
          }
        })()}
      </>
    </div>
  );
}

export default TimeFrameSelector;
