import React from "react";
import TimeFrameSelector from "../timeFrame/TimeFrameSelector";
import { Brain, Code, User, BookOpen, Users , Heart ,Dumbbell} from "lucide-react";

import WeeklyFrame from "../weeklyFrame/WeeklyFrame";
import DailyFrame from "../dailyFrame/DailyFrame";

function GoalCard({}) {
  return (
    <div>
      <TimeFrameSelector />
      {/* Daily */}
     <DailyFrame  
     goalIcon={< Dumbbell color="white" size={16}/>}
     goalTitle={"Workout 2 hours"}
     difficulty={"hard"}
     starCount={50}
     streakCount={9}
     difficultyColor={"text-red-400"}
     />

      <div className="grid grid-cols-2 w-345">
        {/* Weekly Frame */}
        {/* <WeeklyFrame
          goalIcon={<Heart color="white" size={16} />}
          goalTitle={"Meditate 5 times a day"}
          starCount={300}
          completedMilestones={2}
          outOfMilestones={3}
          difficulty={"hard"}
          difficultyColor={"text-red-400"}
          bgColor={"bg-orange-500"}
        />
        <WeeklyFrame
          goalIcon={<Code color="white" size={16}/>}
          goalTitle={"Code 5 hours a day"}
          starCount={400}
          completedMilestones={3}
          outOfMilestones={7}
          difficulty={"medium"}
          difficultyColor={"text-orange-400"}
          bgColor={"bg-purple-500"}
        />
         <WeeklyFrame
          goalIcon={<User color="white" size={16} />}
          goalTitle={"Write 3 blog posts"}
          starCount={400}
          completedMilestones={1}
          outOfMilestones={5}
          difficulty={"easy"}
          difficultyColor={"text-green-400"}
          bgColor={"bg-green-500"}
        /> */}

        {/* Monthly Frame  */}
        {/* <WeeklyFrame
          goalIcon={<BookOpen color="white" size={16} />}
          goalTitle={"Read 4 Books"}
          starCount={400}
          completedMilestones={1}
          outOfMilestones={4}
          difficulty={"easy"}
          difficultyColor={"text-green-400"}
          bgColor={"bg-green-500"}
        />
        <WeeklyFrame
          goalIcon={<Users color="white" size={16} />}
          goalTitle={"Network with 10 people"}
          starCount={200}
          completedMilestones={7}
          outOfMilestones={10}
          difficulty={"medium"}
          difficultyColor={"text-orange-400"}
          bgColor={"bg-purple-500"}
        /> */}
      </div>
    </div>
  );
}

export default GoalCard;
