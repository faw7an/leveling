import React from "react";
import { Bell } from "lucide-react";

function NotificationTab() {
  return (
    <div>
      <div className="flex gap-4 items-center">
        <div className="deadline-info">
          <p className="text-sm text-gray-400">Next deadline</p>
          <p className="text-sm text-red-600">3h 26min</p>
        </div>
        <Bell className="w-5 h-5 md:w-6 md:h-6" color="white" />
      </div>
    </div>
  );
}

export default NotificationTab;