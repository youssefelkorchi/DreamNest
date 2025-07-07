import React from 'react';
import { ArrowRight, Sparkles, Home, Clock } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-pastel-purple via-soft-beige to-sage-green overflow-hidden">
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-20 left-10 text-warm-purple opacity-30">
          <Sparkles size={24} />
        </div>
        <div className="animate-float absolute top-40 right-20 text-sage-green opacity-40" style={{animationDelay: '1s'}}>
          <Home size={32} />
        </div>
        <div className="animate-float absolute bottom-40 left-20 text-warm-purple opacity-30" style={{animationDelay: '2s'}}>
          <Clock size={28} />
        </div>
        <div className="animate-bounce-slow absolute top-60 right-10 w-4 h-4 bg-sage-green rounded-full opacity-40"></div>
        <div className="animate-bounce-slow absolute bottom-60 left-40 w-6 h-6 bg-warm-purple rounded-full opacity-30" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex items-center justify-between min-h-screen">
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-6">
            <h1 className="font-handwritten text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight">
              Your Dream Workspace Awaits,{' '}
              <span className="text-deep-sage">One Hour at a Time</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-gray-600 leading-relaxed">
              Escape the ordinary and discover cozy, inspiring workspaces that adapt to your schedule. 
              No long-term commitments, just perfect moments of productivity.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="group bg-deep-sage hover:bg-sage-green text-white px-8 py-4 rounded-full font-body font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3">
              Find Your Nest
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button className="bg-white/80 backdrop-blur-sm hover:bg-white text-deep-sage px-8 py-4 rounded-full font-body font-semibold text-lg border-2 border-deep-sage/20 hover:border-deep-sage/40 transition-all duration-300">
              Watch Tour
            </button>
          </div>

          <div className="flex items-center gap-8 pt-8">
            <div className="text-center">
              <div className="font-handwritten text-3xl font-bold text-deep-sage">2,500+</div>
              <div className="font-body text-sm text-gray-600">Happy Nesters</div>
            </div>
            <div className="text-center">
              <div className="font-handwritten text-3xl font-bold text-deep-sage">50+</div>
              <div className="font-body text-sm text-gray-600">Cozy Locations</div>
            </div>
            <div className="text-center">
              <div className="font-handwritten text-3xl font-bold text-deep-sage">4.9★</div>
              <div className="font-body text-sm text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block w-1/2 relative">
          <div className="relative">
            {/* Workspace illustration placeholder */}
            <div className="w-full h-96 bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
              <div className="h-full bg-gradient-to-br from-white/40 to-transparent rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-sage-green/30 rounded-full flex items-center justify-center mx-auto">
                    <Home size={40} className="text-deep-sage" />
                  </div>
                  <p className="font-body text-deep-sage font-medium">Your perfect workspace awaits</p>
                </div>
              </div>
            </div>
            
            {/* Floating workspace elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-warm-purple/20 rounded-full flex items-center justify-center animate-float">
              <Sparkles className="text-warm-purple" size={24} />
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-sage-green/20 rounded-full flex items-center justify-center animate-float" style={{animationDelay: '1s'}}>
              <Clock className="text-deep-sage" size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;