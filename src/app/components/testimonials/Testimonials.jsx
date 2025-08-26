import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Developer",
      avatar: "👩‍💻",
      rating: 5,
      text: "This app completely transformed my productivity! The gamification aspect keeps me motivated every single day.",
      achievement: "Level 15 • 90-day streak"
    },
    {
      name: "Mike Johnson", 
      role: "Fitness Enthusiast",
      avatar: "💪",
      rating: 5,
      text: "I love how I can track my fitness goals alongside my career goals. The social features keep me accountable!",
      achievement: "Level 12 • Fitness Master"
    },
    {
      name: "Emma Wilson",
      role: "Student",
      avatar: "👩‍🎓", 
      rating: 5,
      text: "The XP system makes achieving goals feel like a game. I've accomplished more in 3 months than I did all last year.",
      achievement: "Level 8 • Study Warrior"
    }
  ];

  return (
    <div className="glass-liquid-effect rounded-3xl p-8 max-w-4xl">
      <h2 className="text-3xl font-bold text-white mb-2 text-center">
        <span className="bg-gradient-to-r from-pink-400 to-yellow-400 bg-clip-text text-transparent">
          Testimonials
        </span>
      </h2>
      <p className="text-white/80 text-center mb-8">What our users are saying</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{testimonial.avatar}</span>
              <div>
                <h4 className="text-white font-semibold">{testimonial.name}</h4>
                <p className="text-white/60 text-sm">{testimonial.role}</p>
              </div>
            </div>
            
            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-400 fill-current" size={16} />
              ))}
            </div>
            
            <p className="text-white/80 text-sm leading-relaxed mb-4">"{testimonial.text}"</p>
            
            <div className="pt-3 border-t border-white/20">
              <span className="text-xs text-blue-400 font-medium">{testimonial.achievement}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;