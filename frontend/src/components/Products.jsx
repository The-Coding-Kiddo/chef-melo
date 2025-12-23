import React from 'react';
import { products } from '../data/mock';
import { Card, CardContent } from './ui/card';
import { Award } from 'lucide-react';

const Products = () => {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Badge */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-16">
          {/* Award Badge */}
          <div className="flex-shrink-0">
            <div className="relative w-32 h-32">
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  />
                </defs>
                <text className="text-xs fill-gray-700 font-medium tracking-widest uppercase">
                  <textPath href="#circlePath" startOffset="0%">
                    Master Baker • Premium Quality •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <Award size={32} className="text-gray-900" />
              </div>
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1 grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border-0">
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
