import React from 'react'
import AchievementCard from '../achievementCard/AchievementCard'
import { BicepsFlexed } from 'lucide-react'

function AchievementMenu() {
  return (
    <div className='grid grid-cols-2 w-345'>
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