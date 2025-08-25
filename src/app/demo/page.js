
"use client"
import React from 'react';
import { Trophy, Target, BarChart3, Users, ArrowRight, Star, Zap, Shield, TrendingUp, CheckCircle, Play } from 'lucide-react';
import Link from 'next/link';

export default function Demo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <Trophy className="w-5 h-5 text-white" />
          </div>
          <span className="text-2xl font-bold text-white">Leveling</span>
        </div>
        <div className="flex space-x-6">
          <Link href="/login" className="text-gray-300 hover:text-white transition-colors">
            Login
          </Link>
          <Link href="/signUp" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
            Get Started
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-8 py-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl font-bold text-white mb-6">
            Level Up Your
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"> Goals</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your daily habits into epic achievements. Track progress, earn XP, unlock badges, and level up your life with our gamified goal-tracking platform.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/signUp" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 flex items-center space-x-2">
              <Play className="w-5 h-5" />
              <span>Start Your Journey</span>
            </Link>
            <button className="border border-gray-600 text-gray-300 px-8 py-4 rounded-lg text-lg font-semibold hover:border-purple-500 hover:text-white transition-all duration-300">
              Watch Demo
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Leveling</span>?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* XP System */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-purple-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">XP & Leveling</h3>
              <p className="text-gray-400 mb-6">
                Earn experience points for completing goals and watch your level grow. Every achievement brings you closer to the next milestone.
              </p>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full" style={{width: '75%'}}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-400">
                <span>1,250 XP</span>
                <span>2,000 XP</span>
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-orange-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mb-6">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Achievements</h3>
              <p className="text-gray-400 mb-6">
                Unlock badges and trophies as you reach milestones. Show off your accomplishments and stay motivated.
              </p>
              <div className="flex space-x-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            {/* Analytics */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-blue-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Smart Analytics</h3>
              <p className="text-gray-400 mb-6">
                Track your progress with detailed analytics and insights. Understand your patterns and optimize your goals.
              </p>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                <span className="text-green-400 text-sm font-semibold">+23% this week</span>
              </div>
            </div>

            {/* Goal Tracking */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-green-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Goal Tracking</h3>
              <p className="text-gray-400 mb-6">
                Set daily, weekly, and monthly goals. Break down big dreams into achievable milestones.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Daily meditation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  <span className="text-sm text-gray-300">Read 30 minutes</span>
                </div>
              </div>
            </div>

            {/* Social Features */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-indigo-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Social Community</h3>
              <p className="text-gray-400 mb-6">
                Connect with friends, share achievements, and compete on leaderboards. Motivation through community.
              </p>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full border-2 border-gray-800"></div>
                <div className="w-8 h-8 bg-pink-500 rounded-full border-2 border-gray-800"></div>
                <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-gray-800"></div>
                <div className="w-8 h-8 bg-green-500 rounded-full border-2 border-gray-800"></div>
              </div>
            </div>

            {/* Progress Rings */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-6">
                <div className="w-6 h-6 border-2 border-white rounded-full border-t-transparent animate-spin"></div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Visual Progress</h3>
              <p className="text-gray-400 mb-6">
                Beautiful progress rings and visual elements that make tracking your goals engaging and satisfying.
              </p>
              <div className="relative w-16 h-16 mx-auto">
                <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                  <circle cx="32" cy="32" r="28" stroke="#374151" strokeWidth="4" fill="none"/>
                  <circle cx="32" cy="32" r="28" stroke="#8B5CF6" strokeWidth="4" fill="none" 
                    strokeDasharray="175.93" strokeDashoffset="43.98" strokeLinecap="round"/>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-sm font-bold text-white">75%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-8 py-20 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10K+</div>
              <div className="text-gray-400">Active Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50K+</div>
              <div className="text-gray-400">Goals Completed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">1M+</div>
              <div className="text-gray-400">XP Earned</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Level Up?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who are already transforming their lives through gamified goal tracking.
          </p>
          <Link href="/signUp" className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 inline-flex items-center space-x-2">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-8 py-12 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Leveling</span>
            </div>
            <div className="text-gray-400 text-sm">
              © 2024 Leveling. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}