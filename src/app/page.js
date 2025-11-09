"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ChevronRight,
  LogIn,
  User,
  Menu,
  X,
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const navItems = [
    { id: "features", label: "Features" },
    { id: "how-it-works", label: "How it works" },
    { id: "testimonials", label: "Testimonials" },
  ];

  const handleLogin = () => {
    router.push("/login");
  };
  const handleSignUp = () => {
    router.push("/signUp");
  };
  return (
    <div>
      <header>
        <div className="flex gap-2 justify-between items-center">
          {/* Logo */}
          <div className="m-5 mt-0">
            <Image
              className="rounded-4xl"
              src="/icons/logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden lg:flex gap-4 glass-liquid-effect rounded-4xl p-2 m-5 mt-0 text-gray-300 w-[30%] justify-around py-3 ">
            {navItems.map((item) => {
              return (
                <button
                  key={item.id}
                  className="hover:text-white cursor-pointer transition-colors"
                >
                  {item.label}
                </button>
              );
            })}
          </nav>
          {/* Desktop Auth btns */}
          <div className="hidden lg:flex gap-4 m-2 mr-5 mt-[-12px]">
            <button
              className="glass-liquid-effect rounded-xl px-6 py-0 h-10"
              onClick={handleLogin}
            >
              Login
            </button>
            <button className="bg-blue-700 hover:bg-blue-500 transition duration-300 ease-in-out rounded-xl px-4 py-0 h-10 " onClick={handleSignUp}>
              Sign Up
            </button>
          </div>

          {/* Mobile menu bar */}
          <button
            className="lg:hidden text-gray-400 hover:text-white glass-liquid-effect rounded-xl p-2 m-5"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu size={24} />
          </button>

          {/* Mobile SideBar */}
          <div
            className={`lg:hidden bg-gray-900 fixed z-50 top-0 right-0 w-65 h-full transform transition-translate  duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
          >
            <div className="p-6">
              <button className="mb-6 text-bold ">
                <X
                  size={24}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                  }}
                />
              </button>
              <nav className="space-y-1">
                {navItems.map((item) => {
                  return (
                    <button
                      key={item.id}
                      className="block w-full py-3 text-gray-300 text-left hover:text-white border-b border-gray-700 hover:border-gray-400 cursor-pointer duration-600 ease-in-out transition-colors"
                    >
                      {item.label}
                    </button>
                  );
                })}
              </nav>
              {/* Moble auth btns */}
              <div className="mt-6 space-y-3">
                <button className="w-full rounded-xl px-6 py-2 glass-liquid-effect text-gray-300 hover:text-white transition-colors " onClick={handleLogin}>
                  Login
                </button>
                <button className="w-full bg-blue-900 hover:bg-blue-700 transiton duration-300 ease-in-out rounded-xl px-6 py-2" onClick={handleSignUp}>
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* overlay */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden glass-liquid-effect inset-0 fixed z-40 "
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </header>
      {/* Main */}
      <main>
        <div className="flex animate-fadeIn flex-col items-center justify-center min-h-[70vh] px-4">
          <div className="glass-liquid-effect rounded-3xl p-12 max-w-4xl text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className=" bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent px-3">
                Revolutionize
              </span>
              Your Dream Goal with
              <span className="bg-gradient-to-r to-blue-500 from-pink-500 bg-clip-text text-transparent px-3">
                Solo Leveling
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 mb-8">
              Dream, chase and achieve effortlessly
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 md:px-8 py-2 md:py-4 rounded-full font-semibold transition-all hover:scale-105 group">
              <div className="flex items-center gap-3" onClick={handleSignUp} >
                Get Started
                <ChevronRight className="transition-transform group-hover:translate-x-3" />
              </div>
            </button>
          </div>
        </div>
      </main>
      <section className="flex justify-center items-center">
        <nav className="flex gap-5 glass-liquid-effect rounded-4xl p-2 m-5 text-gray-300 w-full sm:w-[50%] max-w-md justify-around py-3">
          {navItems.map((item) => {
            return (
              <button
                key={item.id}
                className={`hover:text-white cursor-pointer transition-colors ${activeCard === item.id ? "text-white" : ""}`}
                onClick={() => {
                  setActiveCard(item.id);
                }}
              >
                {item.label}
              </button>
            );
          })}
        </nav>
      </section>
      <section>
        <div className="flex justify-center items-center mb-10">
          <div className="transtion-all duration-500 ease-in-out">
            {activeCard === "features" && (
              <div className="animate-fadeIn">
                <FeaturesCard />
              </div>
            )}
            {activeCard === "how-it-works" && (
              <div className="animate-fadeIn">
                <HowItWorksCard />
              </div>
            )}
            {activeCard === "testimonials" && (
              <div className="animate-fadeIn">
                <Testimonials />
              </div>
            )}
          </div>
        </div>
      </section>
      {/* getInTouch */}
      <footer className="bg-gray-900 mt-16 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Get in Touch</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Email</h3>
              <p>support@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Phone</h3>
              <p>(+254)-626-3782</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Address</h3>
              <p>3D Design Lane, Creanors City, CA</p>
              <p>90210</p>
            </div>
          </div>
          <div className="flex justify-center gap-6 mt-8">
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Facebook size={24} />
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
