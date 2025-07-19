import React from "react";
import { Trophy,Target,BarChart3 ,Users} from "lucide-react";

function LevelingMenu() {
  return (
    <div className=" text-gray-400 flex justify-center  w-full">
      <div className="flex rounded-2xl bg-gray-800 text-sm w-120 justify-center item-center">
        <div className="pr-2">
      <div className="flex flex-direction hover:bg-gray-600 hover:text-white transition-all duration-300 rounded-2xl p-3 gap-2 cursor-pointer">
        <Target 
          color="currentColor"
          size={20}
          
        />
        <p>Goals</p>
      </div>
      </div>
      <div className="pr-2">
      <div className="flex flex-direction hover:bg-gray-600 hover:text-white transition-all duration-300 rounded-2xl p-3 gap-2 cursor-pointer">
        <Trophy 
          color="currentColor"
          size={20}
            
        />
        <p>Achievements</p>
      </div>
      </div>
      <div className="pr-2">
      <div className="flex flex-direction hover:bg-gray-600 hover:text-white transition-all duration-300 rounded-2xl p-3 gap-2 cursor-pointer">
        <BarChart3
         color="currentColor"
          size={20}
          
        />  
        <p>Analytics</p>
      </div>
      </div>
      <div className="flex flex-direction mr-[-10] hover:bg-gray-600 hover:text-white transition-all duration-300 rounded-2xl p-3 gap-2 cursor-pointer">
        <Users
         color="currentColor"
          size={20}
         
        /> 
        <p>Social</p>
      </div>
      </div>
    </div>
  );
}

export default LevelingMenu;
