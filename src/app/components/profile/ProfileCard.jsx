import React from "react";
import { Camera, Star, Shield } from "lucide-react";
import { createAvatar } from "@dicebear/core";
import { initials } from "@dicebear/collection";
import Image from "next/image";

function ProfileCard() {
  const avatar = createAvatar(initials, {
    seed: "Fs",
    radius: 50,
    fontFamily: ["Tahoma"],
    fontWeight: 600,
  });

  return (
    <div className="">
      <h4 className="font-bold text-lg">Profile</h4>
      <p className="text-gray-400">Manage your account and preferences</p>

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
          <Image src={avatar.toDataUri()} alt="avatar" width={80} height={80} />
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

        {/* Account settings */}
      </div>
    </div>
  );
}

export default ProfileCard;
