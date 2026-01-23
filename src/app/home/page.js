"use client";
import NotificationTab from "../components/notification-tab/Notification";
import Profile from "../components/profile/Profile";
import { Trophy, Flame, Plus } from "lucide-react";
import LevelingMenu from "../components/menu/LevelingMenu";
import CreateGoal from "../components/createGoal/CreateGoal";
import Portal from "../components/portal-helper/Portal";
import { useEffect, useState } from "react";
import StatsDash from "../components/statsDash/StatsDash";
import Hero from "../components/hero/Hero";
import Guide from "../components/goalGuide/Guide";
import ProfileCard from "../components/profile/ProfileCard";
import Footer from "../components/footer/FooterContent";
import axios from "axios";
import LoadingOverlay from "../components/Loader/LoaderOverlay";

export default function Home() {
  const [modalOpen, setModal] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const [showTransition, setShowTransition] = useState(false);
  const [loading, setLoading] = useState(true);
  const isPlayer = Boolean(profileData?.isPlayer);
  const fetchProfile = async () => {
   
    try {
      const response = await axios.get("/api/auth/profile");
      setProfileData(response.data);
      // console.log("ress ", response.data);
    } catch (err) {
      console.error("Error fetching profile: ", err);
    } finally{
      setLoading(false);
    
    }
  };
  
  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
  if (!loading && profileData.isPlayer) {
    setShowTransition(true);
    const timeout = setTimeout(() => setShowTransition(false), 600);
    return () => clearTimeout(timeout);
  }
}, [profileData, loading]);

const handleCreationSuccess = ()=>{
  fetchProfile();
}
  return (
    <div className="min-h-screen flex flex-col lg:w-full">
      <header className="w-full my-5 flex gap-5 items-center justify-end ">
        <NotificationTab />
        <div
          onClick={() => {
            setProfileModalOpen(true);
            console.log("clicked  ");
          }}
        >
          <Profile />
        </div>
      </header>
      <main className="flex-1 flex flex-col justify-center items-center w-full">
        <div className="flex flex-col items-center max-w-6xl mx-auto px-4">

          {/* Stats */}

            {loading ? null : isPlayer ? (
            <div className="animate-fadeIn">
              <p className="text-gray-400 text-lg flex justify-center mb-6">
                Level up your Productivity
              </p>
              <StatsDash />
              <LevelingMenu />
            </div>
          ) : (
            <div className={showTransition?"animate-fadeOut":"animate-fadeIn"}>
              <Hero onCreateVision={() => setModal(true)} />
              <Guide />
            </div>
          )}

        </div>

        <Portal>
          {/* loader */}
         {/* <LoadingOverlay show = {loading}/> */}
          {/* Create goal modal */}
          {modalOpen && (
            <div
              className="fixed inset-0 z-50 flex justify-center items-center bg-black/50"
              onClick={() => {
                setModal(!modalOpen);
              }}
            >
              <div onClick={(e) => e.stopPropagation()}>
                <CreateGoal onSuccessDream = {handleCreationSuccess} />
              </div>
            </div>
          )}

          {/* Profile Modal */}
          {profileModalOpen && profileData && (
            <div
              className="fixed inset-0 z-50 flex justify-center items-center bg-black/95"
              onClick={() => {
                setProfileModalOpen(false);
              }}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <ProfileCard
                  user={profileData.user}
                  player={profileData.player}
                  isPlayer={profileData.isPlayer}
                />
              </div>
            </div>
          )}
        </Portal>

        <button
          className="fixed group bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full flex justify-center items-center shadow-lg transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl w-14 h-14 text-white"
          onClick={() => {
            setModal(true);
          }}
        >
          <Plus className="w-6 h-6 transition-transform group-hover:rotate-90" />
        </button>
        {/* <ProfileCard />  */}
      </main>
      <footer className="w-full mt-8 py-6 bg-gradient-to-t from-gray-900 to-transparent">
        <Footer />
      </footer>
    </div>
  );
}
