import React, { useState } from "react";
import StatCard from "../statCard/StatCard";
import ProgressRing from "../progress-ring/ProgressRing";
import XpBar from "../xpBar/XpBar";
import { Trophy, Flame } from "lucide-react";

function StatsDash() {
  return (
      <div className="m-0 mt-0 mb-3 mx-auto grid grid-cols-1 grid-rows-[auto] lg:grid-cols-[1fr_1fr] lg:grid-rows-3 lg:ml-10 lg:gap-x-0 max-w-6xl">
                <div className="w-full col-start-1 row-start-2 row-end-3 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
                  <StatCard
                    icon={Flame}
                    title="12 days"
                    subtitle="Personal Best: 72 days"
                    iconColor={"red"}
                  />
                </div>
                <div className="col-start-1 row-start-1 row-end-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:ml:0 ">
                  <ProgressRing progress={78} />
                </div>
                <div className="lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
                  <StatCard
                    icon={Trophy}
                    title="156"
                    subtitle="This month: 43"
                    iconColor={"yellow"}
                  />
                </div>
                <div className="lg:col-span-2 lg:row-start-3">
                  <XpBar
                    userLevel={7}
                    userXP={2340}
                    nextLevelXP={3000}
                    streakShields={2}
                  />
                </div>
              </div>  
  );
}

export default StatsDash;
