import Image from "next/image";
import NotificationTab from "./components/notification-tab/Notification";
import Profile from "./components/profile/Profile";
import StatCard from "./components/stat-dash/StatCard";
import { Trophy, Flame } from "lucide-react";
import ProgressRing from "./progress-ring/ProgressRing";
import XpBar from "./components/xpBar/XpBar";
import LevelingMenu from "./components/menu/LevelingMenu";

export default function Home() {
  return (
    <div>
      <header>
        {/* notification-Tab */}
        <NotificationTab />
        {/* profile */}
        <Profile />
      </header>
      <main>
        <p className="relative text-gray-400 top-0 left-25 text-xl ">Level up your Productivity</p>
        {/* Stats */}
        <div className="m-25 mt-0 ml-10 mb-3 grid grid-cols-2 grid-rows-3">
          <div className="col-start-1 col-end-2 row-start-1 row-end-2">
            <StatCard
              icon={Flame}
              title="12 days"
              subtitle="Personal Best: 72 days"
              iconColor={"red"}
              iconSize={24}
            />
          </div>
          <div className="col-start-2 col-end-3 row-start-1 row-end-3">
            <ProgressRing progress={78} />
            
          </div>
          <div className="col-start-1 col-end-2 row-start-2 row-end-3">
            <StatCard
              icon={Trophy}
              title="156"
              subtitle="This month: 43"
              iconColor={"yellow"}
              iconSize={24}
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

      <footer></footer>
    </div>
  );
}
