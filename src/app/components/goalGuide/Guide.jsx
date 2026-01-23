import React from "react";
import { BookOpen, ChevronRight, Target } from "lucide-react";

function Guide() {
  return (
    <div className="grid grid-rows-2 lg:grid-cols-2 gap-5">
      <div className="bg-gray-800 border border-gray-700 rounded-2xl ">
        <div className="font-bold text-xl  flex gap-2 border-b p-5 border-gray-700  items-center overflow-hidden">
          <BookOpen size={24} className="text-blue-400" />
          <h1>Quick Start Guide</h1>
        </div>
        <div className="p-5 flex flex-col gap-4  ">
          <div className="flex gap-4 group cursor-pointer justify-center items-center">
            <div className="bg-blue-700 rounded-full w-8 h-8 font-bold flex justify-center items-center flex-shrink-0">
              1
            </div>
            <div className="flex-1">
              <p className="lg:text-lg text-white font-semibold mb-1">
                Create Your First Goal
              </p>
              <p className="text-sm text-gray-400">
                Set a daily, weekly, or monthly goal to get started
              </p>
            </div>
            <ChevronRight size={20} className="text-gray-600" />
          </div>

          <div className="flex gap-4 group cursor-pointer justify-center items-center">
            <div className="bg-gray-600 rounded-full w-8 h-8 font-bold flex justify-center items-center flex-shrink-0">
              2
            </div>
            <div className="flex-1">
              <p className="lg:text-lg text-gray-400 font-semibold mb-1">
                Complete Your First Task
              </p>
              <p className="text-sm text-gray-500">
                Mark your first goal as complete to start your streak
              </p>
            </div>
            <ChevronRight size={20} className="text-gray-600" />
          </div>

          <div className="flex gap-4 group cursor-pointer justify-center items-center">
            <div className="bg-gray-600 rounded-full w-8 h-8 font-bold flex justify-center items-center flex-shrink-0">
              3
            </div>
            <div className="flex-1">
              <p className="lg:text-lg text-gray-400 font-semibold mb-1">
                Build Your Streak
              </p>
              <p className="text-sm text-gray-500">
                Stay consistent and watch your progress grow
              </p>
            </div>
            <ChevronRight size={20} className="text-gray-600" />
          </div>
        </div>
      </div>

      {/* Get started with goals */}

      <div className="bg-gray-800 border border-gray-700 rounded-2xl">
        <div className="border-b border-gray-700 px-4 p-2.5">
          <h1 className="font-bold text-lg">Your Goals</h1>
          <p className="text-sm text-gray-400 ">
            Create your first goal to get started
          </p>
        </div>

        <div className="flex flex-col items-center justify-center min-h-40">
          <div className="text-blue-400 m-5 w-24 h-24 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-500/20  to-purple-500/20">
            <Target size={50} />
          </div>

          <h4 className="font-bold text-xl">No Goals Yet</h4>
          <p className="max-w-md text-sm text-gray-400 m-3 text-center leading-relaxed">
            Start your journey by creating your first goal. Whether it's daily
            habits, weekly targets, or monthly objectives - we'll help you track
            and achieve them all.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Guide;
