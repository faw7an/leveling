import React from "react";
import { Target, CheckCircle, Zap, Trophy, ChevronRight } from "lucide-react";

const HowItWorksCard = () => {
  const steps = [
    {
      step: "01",
      title: "Set Your Goals",
      description: "Choose daily, weekly, or monthly goals that align with your aspirations",
      icon: <Target className="text-blue-400" size={32} />
    },
    {
      step: "02", 
      title: "Complete Daily Tasks",
      description: "Work towards your goals every day and build consistent habits",
      icon: <CheckCircle className="text-green-400" size={32} />
    },
    {
      step: "03",
      title: "Earn XP & Level Up",
      description: "Each completed goal rewards you with XP points to climb through levels",
      icon: <Zap className="text-yellow-400" size={32} />
    },
    {
      step: "04",
      title: "Unlock Achievements",
      description: "Reach new milestones and unlock badges as you progress through your journey",
      icon: <Trophy className="text-purple-400" size={32} />
    }
  ];

  return (
    <div className="glass-liquid-effect rounded-3xl p-8 max-w-4xl">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">
        <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
          How It Works
        </span>
      </h2>
      <p className="text-white/80 text-center mb-8">Your journey to success in 4 simple steps</p>
      
      <div className="space-y-6">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center gap-6 bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                {step.icon}
              </div>
            </div>
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {step.step}
                </span>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </div>
            {index < steps.length - 1 && (
              <ChevronRight className="text-white/40" size={24} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorksCard;