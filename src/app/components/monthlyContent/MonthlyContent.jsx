import React from 'react'
import {BookOpen} from 'lucide-react'
import WeeklyFrame from "../weeklyFrame/WeeklyFrame";

function MonthlyContent() {
  return (
   <div className="mt-4 w-[95%] grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-4 lg:gap-6 max-w-6xl mx-auto">
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
    </div>
  )
}

export default MonthlyContent