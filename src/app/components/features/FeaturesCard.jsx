import React from "react";
import { Calendar, Flame, Users, TrendingUp } from "lucide-react";

const FeaturesCard = () => {
  const features = [
    {
      icon: <Calendar className="text-blue-400" size={24} />,
      title: "Flexible Goal Setting",
      description: "Set daily, weekly, or monthly goals that fit your lifestyle and ambitions"
    },
    {
      icon: <Flame className="text-orange-400" size={24} />,
      title: "Streak Tracking",
      description: "Build powerful habits with streak counters that motivate you to stay consistent"
    },
    {
      icon: <Users className="text-green-400" size={24} />,
      title: "Social Community",
      description: "Connect and socialize with other users, share achievements and stay motivated together"
    },
    {
      icon: <TrendingUp className="text-purple-400" size={24} />,
      title: "Progress Analytics",
      description: "Track your progress with detailed analytics and insights to optimize your performance"
    }
  ];

  return (
    <div className="glass-liquid-effect rounded-3xl p-8 max-w-4xl">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Features
        </span>
      </h2>
      <p className="text-white/80 text-center mb-8">Everything you need to level up your goals</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-white/10 rounded-lg">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesCard;