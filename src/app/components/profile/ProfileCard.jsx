import React from "react";
import { Trophy, Flame, Camera, Bell, LogOut, Lock, ChevronRight, Star, Shield, User } from "lucide-react";
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";
import Image from "next/image";
import Footer from "../footer/FooterContent";

function ProfileCard() {
  const avatar = createAvatar(initials, {
    seed: "Fs",
    radius: 50,
    fontFamily: ["Tahoma"],
    fontWeight: 600,
  });

  return (
    <div className="max-h-screen overflow-y-auto hide-scrollbar p-4">
      <div className="m-5">
        <h4 className="font-bold text-2xl">Profile</h4>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>

      <div className="bg-gradient-to-br relative overflow-hidden from-blue-600 to-purple-600 min-w-sm rounded-2xl">
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-18 -mt-30 animate-pulse"
          style={{
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            animation: "blob 7s infinite",
          }}
        ></div>
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-white/10 -mr-16 -mt-26 animate-pulse"
          style={{
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            animation: "blob 7s infinite",
          }}
        ></div>

        <div className="flex m-3">
          <Image src={avatar.toDataUri()} alt="avatar" width={75} height={75} />
          <div className="m-5">
            <p className="font-bold text-xl">Fawzan Saeed</p>
            <p className="text-gray-400 ">fauzdasoodais@gmail.com</p>

            <div className="flex mt-5 gap-5">
              <div className="flex gap-2 justiy-center items-center bg-white/20 rounded-xl px-3 py-1">
                <Star size={20} className="text-yellow-300" />
                <p className="text-sm font-semibold">Level 1</p>
              </div>
              <div className="flex gap-2 justiy-center items-center bg-white/20 rounded-xl px-3 py-1">
                <Shield size={20} className="text-blue-400" />
                <p className="text-sm font-semibold">0 Shields </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Account settings */}
      <div className="mt-5 bg-gray-800 rounded-2xl border border-gray-700 overflow-hidden">
        <div className="border-b text-lg font-bold border-gray-700 p-5">
          Account Settings
        </div>
        <div className="divide-y divide-gray-700">
          <button className="w-full p-5 flex items-center justify-between hover:bg-gray-750 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                <User size={20} className="text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">
                  Personal Information
                </div>
                <div className="text-gray-400 text-sm">
                  Update your name and email
                </div>
              </div>
            </div>
            <ChevronRight
              size={20}
              className="text-gray-500 group-hover:text-gray-400"
            />
          </button>

          <button className="w-full p-5 flex items-center justify-between hover:bg-gray-750 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                <Lock size={20} className="text-green-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">
                  Security
                </div>
                <div className="text-gray-400 text-sm">
                  Change password and security settings
                </div>
              </div>
            </div>
            <ChevronRight
              size={20}
              className="text-gray-500 group-hover:text-gray-400"
            />
          </button>

          <button className="w-full p-5 flex items-center justify-between hover:bg-gray-750 transition-colors group">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                <Bell size={20} className="text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">
                 Notifications
                </div>
                <div className="text-gray-400 text-sm">
                  Manage notification preferences
                </div>
              </div>
            </div>
            <ChevronRight
              size={20}
              className="text-gray-500 group-hover:text-gray-400"
            />
          </button>
        </div>
      </div>
      <div className="bg-red-900/20 border mt-5 text-red-400 rounded-2xl p-6 border-red-700/50 ">
        <h3 className="font-semibold text-lg">Danger Zone</h3>
        <div className="flex flex-col mt-3 gap-3 ">
        <button className="flex gap-2 justify-center items-center px-12 py-2 rounded-lg bg-red-900/40 border border-red-700/50 ">
            Log out 
            <LogOut />
        </button>
        <button className="flex gap-2 justify-center items-center px-12 py-2 rounded-lg bg-red-900/40 border border-red-700/50 ">
           Delete Account
        </button>

        </div>
      </div>
     <footer className="mt-8 mb-3">
      <Footer />
     </footer>
    </div>
  );
}

export default ProfileCard;
