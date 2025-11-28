import React from 'react';
import GlassCard from './ui/GlassCard';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] pl-5 flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>

      {/* Background Glow Effects - Monochrome */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] pointer-events-none z-0 animate-blob" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[128px] pointer-events-none z-0 animate-blob" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left Content: Text & Input */}
        <div className="space-y-8 px-10">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
              <span className="block animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>Craft Your</span>
              <span className="block animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-white animate-shimmer">
                  Perfect Resume
                </span>
              </span>
              <span className="block animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>with AI</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl leading-relaxed animate-fade-in-up opacity-0" style={{ animationDelay: '0.7s' }}>
              Transform your career story into a compelling resume in seconds.
              Our AI-powered builder ensures you stand out from the crowd with
              premium designs and intelligent content suggestions.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md animate-fade-in-up opacity-0" style={{ animationDelay: '0.9s' }}>
            <input
              type="text"
              placeholder="Enter your current job title..."
              className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all duration-300 backdrop-blur-sm"
            />
            <Link to='/signin' className="px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
              Get Started
            </Link>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 animate-fade-in-up opacity-0" style={{ animationDelay: '1.1s' }}>
            <div className="flex -space-x-2">
              {[
                "https://i.pinimg.com/1200x/43/8f/80/438f80b684aee056afe2201ad32ea79c.jpg",
                "https://i.pinimg.com/736x/50/b7/16/50b716a944c630c9a324b54be6a90027.jpg",
                "https://i.pinimg.com/736x/50/d4/29/50d429ea5c9afe0ef9cb3c96f784bea4.jpg",
                "https://i.pinimg.com/736x/73/45/4c/73454c79fb89a793e474309ffcc71174.jpg"
              ].map((src, i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-black border border-white/20 flex items-center justify-center overflow-hidden">
                  <img src={src} alt={`User ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}


            </div>
            <p>Trusted by 10,000+ professionals</p>
          </div>
        </div>

        {/* Right Content: Visual/Glass Card */}
        <div className="relative hidden lg:block animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
          <div className="animate-float">
            <GlassCard className="relative z-20 transform rotate-[-5deg] hover:rotate-0 transition-transform duration-500 max-w-sm mx-auto p-0 m-0">
              <img
                src="/resume.jpg"
                className="w-full aspect-[2/4] h-155 rounded-l shadow-2xl object-cover"
              />
            </GlassCard>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;
