import NotificationTab from "../components/notification-tab/Notification";
import Profile from "../components/profile/Profile";
import StatCard from "../components/stat-dash/StatCard";
import { Trophy, Flame } from "lucide-react";
import ProgressRing from "../components/progress-ring/ProgressRing";
import XpBar from "../components/xpBar/XpBar";
import LevelingMenu from "../components/menu/LevelingMenu";

export default function Home() {
  return (
    <div>
      <header className="w-full">
        {/* notification-Tab */}
        {/* <NotificationTab /> */}
        {/* profile */}
        {/* <Profile /> */}
      </header>
      <main>
        <p className="relative text-gray-400 top-0 left-16 lg:left-25 text-lg lg:text-xl ">
          Level up your Productivity
        </p>
        {/* Stats */}
        <div className="m-25 mt-0 ml-10 mb-3 grid grid-cols:1 grid-rows-[auto] lg:grid-cols-2 lg:grid-rows-3">
          <div className="col-start-1 row-start-2 row-end-3 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2">
            <StatCard
              icon={Flame}
              title="12 days"
              subtitle="Personal Best: 72 days"
              iconColor={"red"}
            />
          </div>
          <div className="col-start-1 row-start-1 row-end-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3">
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
          <XpBar
            userLevel={7}
            userXP={2340}
            nextLevelXP={3000}
            streakShields={2}
          />
        </div>
        <LevelingMenu />
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
