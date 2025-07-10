import Image from "next/image";
import NotificationTab from "./components/notification-tab/Notification";
import Profile from "./components/profile/Profile";
import StatCard from "./components/stat-dash/StatCard";
import { Trophy, Flame } from "lucide-react";
import ProgressRing from "./progress-ring/ProgressRing";

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
        <p className="fixed text-gray-400 top-20 left-30 text-xl ">Level up your Productivity</p>
        {/* Stats */}
        <div className="m-25 grid grid-cols-2 grid-rows-2">
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
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
