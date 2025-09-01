import NotificationTab from "../components/notification-tab/Notification";
import Profile from "../components/profile/Profile";
import StatCard from "../components/stat-dash/StatCard";
import { Trophy, Flame } from "lucide-react";
import ProgressRing from "../components/progress-ring/ProgressRing";
import XpBar from "../components/xpBar/XpBar";
import LevelingMenu from "../components/menu/LevelingMenu";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full my-5 flex gap-5 items-center justify-end">
        <NotificationTab />
        <Profile />
      </header>
      <main className="flex-1 flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center max-w-6xl mx-auto px-4">
          <p className="text-gray-400 text-lg lg:text-xl mb-6">
            Level up your Productivity
          </p>
          {/* Stats */}
          <div className="m-0 mt-0 mb-3 mx-auto grid grid-cols-1 grid-rows-[auto] lg:grid-cols-[1fr_1fr] lg:grid-rows-3 lg:ml-10 lg:gap-x-0 max-w-6xl">
            <div className="w-full col-start-1 row-start-2 row-end-3 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
              <StatCard
                icon={Flame}
                title="12 days"
                subtitle="Personal Best: 72 days"
                iconColor={"red"}
              />
            </div>
            <div className="col-start-1 row-start-1 row-end-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 lg:ml:0 ">
              <ProgressRing progress={78} />
            </div>
            <div className="lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
              <StatCard
                icon={Trophy}
                title="156"
                subtitle="This month: 43"
                iconColor={"yellow"}
              />
            </div>
            <div className="lg:col-span-2 lg:row-start-3">
              <XpBar
                userLevel={7}
                userXP={2340}
                nextLevelXP={3000}
                streakShields={2}
              />
            </div>
          </div>
          <LevelingMenu />
        </div>
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