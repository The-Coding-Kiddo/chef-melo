import React from 'react';
import { aboutData } from '../data/mock';
import { Check } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-coconut">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://customer-assets.emergentagent.com/job_f10b5a7f-ecd4-4fa1-8b6c-c8995c26ab39/artifacts/8bto1xv4_molo3.jpeg"
                alt="Chef Molo working on a cake"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent-orange/10 rounded-3xl -z-10"></div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="text-accent-orange font-medium uppercase tracking-wider">About</span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">{aboutData.title}</h2>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              {aboutData.description}
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent-orange/10 rounded-full flex items-center justify-center">
                    <Check size={14} className="text-accent-orange" />
                  </div>
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a 
              href="#contact"
              className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
