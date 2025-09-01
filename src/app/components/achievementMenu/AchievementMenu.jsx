import React from 'react'
import AchievementCard from '../achievementCard/AchievementCard'
import { BicepsFlexed } from 'lucide-react'

function AchievementMenu() {
  return (
     <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <AchievementCard 
         achievementIcon={"🏆️"}
         achievementTitle={"Week Warrior"}
         description={"Completed goals 7 days straight"}
         unlockDate={"Dec 15"}
        />
          <AchievementCard 
         achievementIcon={"🏆️"}
         achievementTitle={"Week Warrior"}
         description={"Completed goals 7 days straight"}
         unlockDate={"Dec 15"}
        />
    </div>
  )
}

export default AchievementMenu