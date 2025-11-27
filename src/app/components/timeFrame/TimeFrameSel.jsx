"use client";
import React from "react";
import { useState } from "react";
import DailyContent from '../dailyContent/DailyContent'
import WeeklyContent from "../weeklyContent/WeeklyContent";
import MonthlyContent from "../monthlyContent/MonthlyContent";

function TimeFrameSelector() {
  const [activeTab, setActiveTab] = useState("daily");
  return (
    <div>
      <div className="text-gray-400 text-sm  flex justify-center items-center gap-3 mx-auto my-5 max-w-md rounded-lg">
        <div
          className="cursor-pointer hover:text-gray-300 bg-gray-800 p-3 rounded-lg"
          onClick={() => {
            setActiveTab("daily");
          }}
        >
          Daily
        </div>
        <div
          className="cursor-pointer hover:text-gray-300 bg-gray-800 p-3 rounded-lg"
          onClick={() => {
            setActiveTab("weekly");
          }}
        >
          Weekly
        </div>
        <div
          className="cursor-pointer hover:text-gray-300 bg-gray-800 p-3 rounded-lg"
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
               <div>
                <DailyContent />
               </div>
              );
            case "weekly":
              return (
                <div>
                 <WeeklyContent /> 
                </div>
              );
            case "monthly":
              return (
                <div>
                  <MonthlyContent />
                </div>
              );
          }
        })()}
      </>
    </div>
  );
}

export default TimeFrameSelector;
