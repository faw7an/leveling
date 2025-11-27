"use client";
import NotificationTab from "../components/notification-tab/Notification";
import Profile from "../components/profile/Profile";
import { Trophy, Flame, Plus } from "lucide-react";
import LevelingMenu from "../components/menu/LevelingMenu";
import CreateGoal from "../components/createGoal/CreateGoal";
import Portal from "../components/portal-helper/Portal";
import { useState } from "react";
import StatsDash from "../components/statsDash/StatsDash";
import Hero from "../components/hero/Hero";
import Guide from "../components/goalGuide/Guide";
import ProfileCard from "../components/profile/ProfileCard";


export default function Home() {
  const [modalOpen, setModal] = useState(false);
  const [profileModalOpen,setProfileModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col lg:w-full">
      <header className="w-full my-5 flex gap-5 items-center justify-end ">
        <NotificationTab />
        <Profile />
      </header>
      <main className="flex-1 flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center max-w-6xl mx-auto px-4">
         
          {/* <p className="text-gray-400 text-lg lg:text-xl mb-6">
            Level up your Productivity
          </p> */}

          {/* Stats */}
          {/* <StatsDash /> */}
          
          <Hero />
          <Guide />

          {/* <LevelingMenu /> */}
        </div>



        <Portal>
          {/* Create goal modal */}
          {modalOpen && (
              <div
                className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
                onClick={() => {
                  setModal(!modalOpen);
                }}
              >
                <div onClick={(e)=>e.stopPropagation()}>
                  <CreateGoal />
                </div>
              </div>
          )}

          {/* Profile Modal */}
          

        </Portal>

        <button
          className="fixed group bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full flex justify-center items-center shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl w-14 h-14 text-white"
          onClick={() => {
            setModal(true);
          }}
        >
          <Plus className="w-6 h-6 transition-transform group-hover:rotate-90" />
        </button>
        <ProfileCard /> 
      </main>
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
    </div>
  );
}
