import React from 'react'
import { Trophy, Flame, Plus } from "lucide-react";

function Footer() {
  return (
   <footer className="w-full mt-8 py-6 bg-gradient-to-t from-gray-900 to-transparent">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span className="text-lg font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Solo Leveling
              </span>
              <Flame className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-sm text-gray-400 text-center">
              <p>© 2024 • Powered by determination and coffee ☕</p>
              <p className="mt-1">🎮 Level up your life, one task at a time</p>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer