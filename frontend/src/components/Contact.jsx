import React, { useState } from 'react';
import { contactInfo } from '../data/mock';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock submission - will be connected to backend later
    toast.success('Thank you! Your message has been sent. We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactDetails = [
    { icon: Phone, label: 'Phone', value: contactInfo.phone },
    { icon: Mail, label: 'Email', value: contactInfo.email },
    { icon: MapPin, label: 'Location', value: contactInfo.location },
    { icon: Clock, label: 'Hours', value: contactInfo.hours }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="text-white space-y-8">
            <div>
              <span className="text-accent-orange font-medium uppercase tracking-wider">Contact</span>
              <h2 className="text-4xl md:text-5xl font-bold mt-2">Let's Create Something Sweet</h2>
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed">
              Ready to order a custom cake or have questions? Reach out to us and let's make your celebration extra special.
            </p>

            {/* Contact Details */}
            <div className="space-y-6 pt-4">
              {contactDetails.map((detail, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-full flex items-center justify-center">
                    <detail.icon size={20} className="text-accent-orange" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{detail.label}</p>
                    <p className="text-white font-medium">{detail.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-0 rounded-xl h-12 focus:ring-2 focus:ring-accent-orange"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-gray-50 border-0 rounded-xl h-12 focus:ring-2 focus:ring-accent-orange"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-gray-50 border-0 rounded-xl h-12 focus:ring-2 focus:ring-accent-orange"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your cake requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-gray-50 border-0 rounded-xl resize-none focus:ring-2 focus:ring-accent-orange"
                />
              </div>
              <Button 
                type="submit"
                className="w-full bg-accent-orange hover:bg-orange-600 text-white h-12 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
