import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { features } from '../data/data';

const Benefits: React.FC = () => {
  return (
    <section id="benefits" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Why Choose TamrLatte?</h2>
          <p className="text-amber-800 max-w-2xl mx-auto">
            Each bottle of TamrLatte delivers exceptional taste along with these amazing benefits
          </p>
          <div className="w-24 h-1 bg-amber-400 mx-auto mt-6"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {features.map(feature => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-amber-900 mb-4">The Perfect Balance</h3>
              <p className="text-gray-700 mb-6">
                Our unique extraction process preserves the full nutritional profile of dates while creating a smooth, creamy texture that blends perfectly with milk.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-amber-400 mr-4"></div>
                  <span className="text-amber-800 font-medium">Natural Energy Boost</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-amber-400 mr-4"></div>
                  <span className="text-amber-800 font-medium">Rich in Antioxidants</span>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-amber-400 mr-4"></div>
                  <span className="text-amber-800 font-medium">Supports Digestive Health</span>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-auto">
              <img 
                src="https://images.pexels.com/photos/5947030/pexels-photo-5947030.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="TamrLatte benefits" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;