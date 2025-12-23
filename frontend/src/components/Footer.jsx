import React from 'react';
import { navItems, contactInfo } from '../data/mock';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://customer-assets.emergentagent.com/job_f10b5a7f-ecd4-4fa1-8b6c-c8995c26ab39/artifacts/hzavudsg_logo2.jpeg" 
                alt="Chef Molo Logo" 
                className="h-16 w-16 object-contain rounded-full"
              />
              <span className="font-bold text-2xl">Chef Molo</span>
            </div>
            <p className="text-gray-400 max-w-md leading-relaxed">
              Creating delicious memories one cake at a time. From weddings to birthdays, 
              we craft the perfect sweet treats for all your special moments.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-accent-orange rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-gray-800 hover:bg-accent-orange rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <nav className="space-y-4">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  className="block text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <div className="space-y-4">
              <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200">
                <Phone size={16} />
                <span>{contactInfo.phone}</span>
              </a>
              <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors duration-200">
                <Mail size={16} />
                <span>{contactInfo.email}</span>
              </a>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} />
                <span>{contactInfo.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Chef Molo Bakery. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Baked with love in Somalia
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
