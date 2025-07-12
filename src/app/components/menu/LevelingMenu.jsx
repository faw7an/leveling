import React from "react";
import { Trophy,Target,BarChart3 ,Users} from "lucide-react";

function LevelingMenu() {
  return (
    <div className=" text-gray-400 flex justify-center  w-full">
      <div className="flex gap-5 rounded-lg bg-gray-800 text-lg p-3 w-150 justify-center item-center">
      <div className="flex flex-direction gap-2">
        <Target 
          color="grey"
          size={24}
        />
        <p>Goals</p>
      </div>
      <div className="flex flex-direction gap-2">
        <Trophy 
          color="grey"
          size={24}
        />
        <p>Achievements</p>
      </div>
      <div className="flex flex-direction gap-2">
        <BarChart3
         color="grey"
          size={24}
        />  
        <p>Analytics</p>
      </div>
      <div className="flex flex-direction gap-2">
        <Users
         color="grey"
          size={24}
        /> 
        <p>Social</p>
      </div>
      </div>
    </div>
  );
}

export default LevelingMenu;
