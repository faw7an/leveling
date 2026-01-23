import React from 'react'
import { Plus, Sparkles } from "lucide-react";


function Hero({onCreateVision}) {
  return (
   <div className="bg-gradient-to-r lg:w-250 from-blue-600 to-purple-600 rounded-2xl relative overflow-hidden p-8 mb-10">
           {/* Glassmorphism Island */}
      <div className="absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-6 py-3 shadow-2xl hover:scale-105 hover:bg-white/25 transition-all duration-300 ease-out z-20">
        <span className="text-white font-semibold flex justify-center items-center text-sm lg:text-base whitespace-nowrap drop-shadow-sm">
          👋 Welcome back, Fawzan!
        </span>
      </div>
      
      {/* Organic blob shapes */}
      <div
        className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-16 animate-pulse"
        style={{ borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%" , animation:"blob 7s infinite"}}
      ></div>

      <div
        className="absolute bottom-0 left-0 w-48 h-48 bg-white/20 -ml-12 -mb-12 animate-pulse"
        style={{ borderRadius: "40% 60% 70% 30% / 40% 70% 30% 60%", animation:"blob 7s infinite" }}
      ></div>

      <div
        className="absolute top-1/3 left-1/4 w-32 h-32 bg-yellow-400/10 animate-pulse"
        style={{ borderRadius: "70% 30% 50% 50% / 30% 50% 50% 70%", animation:"blob 7s infinite" }}
      ></div>

      <div className="rounded-full bg-white/10 absolute top-0 right-0 w-64 h-64 -mr-32 -mt-32 animate-pulse " style={{animation:"blob 7s infinite"}}> </div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full -ml-24 -mb-24 animate-pulse " style={{animation:"blob 7s infinite"}}></div>
      <div className="relative mt-15 z-10">
        <div className="flex gap-2 mb-3 items-center font-semibold text-yellow-400">
          <Sparkles />
          <span>Welcome to Solo Leveling!</span>
        </div>
        <div>
          <h2 className="font-bold text-2xl md:text-3xl mb-3">
            Ready to Transform Your Life?
          </h2>
          <p className="text-sm">
            Start your journey by creating your first goal. Track daily habits,
            build streaks, and unlock achievements as you progress.
          </p>
        </div>
        <div className="flex justify-center">
          <button className="flex flex-row gap-1 mt-5 bg-white rounded p-2 text-sm text-blue-600 font-semibold justify-center items-center"
             onClick={()=>{onCreateVision()}}
          >
            <Plus />
            Create your Vision
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero