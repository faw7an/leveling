import React from 'react'
import {Code} from 'lucide-react'
import WeeklyFrame from "../weeklyFrame/WeeklyFrame";

function WeeklyContent() {
  return (
     <div className="mt-4 w-[95%] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 lg:gap-6 max-w-6xl mx-auto">      <WeeklyFrame
                  goalIcon={<Code color="white" size={16} />}
                  goalTitle={"Code 5 hours a day"}
                  starCount={400}
                  completedMilestones={3}
                  outOfMilestones={7}
                  difficulty={"medium"}
                  difficultyColor={"text-orange-400"}
                  bgColor={"bg-purple-500"}
                />
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
                
    </div>
  )
}

export default WeeklyContent