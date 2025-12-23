import React from 'react';
import { testimonials } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-orange font-medium uppercase tracking-wider">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">What Our Customers Say</h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gray-50 border-0 rounded-3xl hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <Quote size={32} className="text-accent-orange/30 mb-4" />
                <p className="text-gray-700 leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
