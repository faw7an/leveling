"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ChevronRight,
  Instagram,
  Facebook,
  Linkedin,
  ArrowRight,
} from "lucide-react";
import FeaturesCard from "./components/features/FeaturesCard";
import HowItWorksCard from "./components/howWorks/HowItWorksCard";
import Testimonials from "./components/testimonials/Testimonials";
import { useRouter } from "next/navigation";
import Image from "next/image";


export default function LandingPage() {
  const [activeCard, setActiveCard] = useState("features");
  const router = useRouter();
  return (
    <div>
      <div className="flex gap-2 justify-between items-center">
        {/* Logo */}
        <div className="m-5 mt-0">
          <Image
            className="rounded-4xl"
            src="/s6.png"
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        {/* nav */}
        <div className="flex gap-5 glass-liquid-effect rounded-4xl p-2 m-5 mt-0 text-gray-300 w-[30%] justify-around py-3 ">
          <div>Features</div>
          <div>How it works</div>
          <div>Testimonials</div>
        </div>
        {/* nav2 */}
        <div className="flex gap-4 m-2  mt-[-12px]">
          <button className="glass-liquid-effect rounded-xl px-6 py-0 h-10" onClick={()=>{
            router.push('/login')
          }}>
            Login
          </button>
          <button className="bg-blue-700 hover:bg-blue-500 transition duration-300 ease-in-out rounded-xl px-4 py-0 h-10 ">
            Sign Up
          </button>
        </div>
      </div>
      {/* Main */}
      <div className="flex animate-fadeIn flex-col items-center justify-center min-h-[70vh] px-4">
        <div className="glass-liquid-effect rounded-3xl p-12 max-w-4xl text-center">
          <h1 className="text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent px-3">
              Revolutionize
            </span>
            Your Dream Goal with
            <span className="bg-gradient-to-r to-blue-500 from-pink-500 bg-clip-text text-transparent px-3">
              Solo Leveling
            </span>
          </h1>
          <p className="text-xl text-white/80 mb-8">
            Dream, chase and achieve effortlessly
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 group">
            <div className="flex gap-3">
              Get Started
              <ChevronRight className="transition-transform group-hover:translate-x-3" />
            </div>
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex gap-5 glass-liquid-effect rounded-4xl p-2 m-5 text-gray-300 w-[30%] justify-around py-3">
          <div
            className="hover:text-white cursor-pointer transition-colors"
            onClick={() => setActiveCard("features")}
          >
            Features
          </div>
          <div
            className="hover:text-white cursor-pointer transition-colors"
            onClick={() => setActiveCard("how-it-works")}
          >
            How it works
          </div>
          <div
            className="hover:text-white cursor-pointer transition-colors"
            onClick={() => setActiveCard("testimonials")}
          >
            Testimonials
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mb-10">
        <div className="transtion-all duration-500 ease-in-out">
          {activeCard === "features" && (
            <div className="animate-fadeIn">
            <FeaturesCard />
            </div>)}
          {activeCard === "how-it-works" && (
            <div className="animate-fadeIn">
              <HowItWorksCard />
            </div>)}
          {activeCard === "testimonials" && 
          (<div className="animate-fadeIn">
          <Testimonials />
            </div>
          )}
        </div>
      </div>
      {/* getInTouch */}
    </div>
  );
}

// <div>
//   <h2> Get in Touch </h2>
//   <p>support@gmail.com</p>
//   <p>(+254)-626-3782</p>
//   {/* Address */}
//   <div>
//     <p>3D Design Lane, Creanors City, CA</p>
//     <p>90210</p>
//   </div>
// </div>
