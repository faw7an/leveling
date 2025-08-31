import React from "react";
import DailyFrame from "../dailyFrame/DailyFrame";
import { Dumbbell } from "lucide-react";
function DailyMenu() {
  return (
    <div className="w-75 sm:w-120 md:w-[95%] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 lg:gap-6 max-w-6xl mx-auto">
      <DailyFrame
        goalIcon={<Dumbbell color="white" size={16} />}
        goalTitle={"Workout 2 hours"}
        difficulty={"hard"}
        starCount={50}
        streakCount={9}
        difficultyColor={"text-red-400"}
      />
      <DailyFrame
        goalIcon={<Dumbbell color="white" size={16} />}
        goalTitle={"Workout 2 hours"}
        difficulty={"hard"}
        starCount={50}
        streakCount={9}
        difficultyColor={"text-red-400"}
      />
    </div>
  );
}

export default DailyMenu;
