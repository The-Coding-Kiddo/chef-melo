import React from 'react';
import { heroData } from '../data/mock';
import { Button } from './ui/button';
import { Play, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-coconut pt-24 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                {heroData.tagline}
              </h1>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-700 italic">
                {heroData.taglineAccent}
              </h2>
            </div>
            
            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              {heroData.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                className="bg-accent-orange hover:bg-orange-600 text-white px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                asChild
              >
                <a href="#contact">Order Now</a>
              </Button>
              <Button 
                variant="outline" 
                className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-6 rounded-full text-lg font-medium transition-all duration-300 hover:bg-gray-50 flex items-center gap-2"
                asChild
              >
                <a href="#gallery">
                  <Play size={20} className="fill-current" />
                  View Gallery
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              {heroData.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Chef Image */}
          <div className="relative">
            {/* Main Image Container */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gray-100 shadow-2xl">
                <img 
                  src="https://customer-assets.emergentagent.com/job_f10b5a7f-ecd4-4fa1-8b6c-c8995c26ab39/artifacts/fln856p7_molo2.jpeg"
                  alt="Chef Molo with Wedding Cake"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              {/* Floating Badge - Rating */}
              <div className="absolute bottom-20 left-0 transform -translate-x-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2 animate-float">
                <span className="font-semibold text-gray-900">{heroData.rating}</span>
                <Star size={16} className="fill-yellow-400 text-yellow-400" />
              </div>

              {/* Floating Badge - Award */}
              <div className="absolute top-20 right-0 transform translate-x-4 bg-white rounded-2xl px-4 py-2 shadow-lg animate-float-delayed">
                <span className="text-sm font-medium text-gray-700">{heroData.badge}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
