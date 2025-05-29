import React from 'react';
import { Coffee, Sparkles } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Story</h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src="https://images.pexels.com/photos/7195065/pexels-photo-7195065.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="TamrLatte origin story" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4 z-0">
              <Coffee className="text-amber-100 w-32 h-32" />
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-amber-800 mb-4 flex items-center">
              <Sparkles className="w-6 h-6 mr-2 text-amber-500" />
              From Desert Tradition to Modern Delight
            </h3>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              TamrLatte was born from ancient Middle Eastern traditions, where dates have been a staple food for millennia. Our founder, while traveling through date palm oases, discovered locals blending fresh dates with milk—a combination that was both refreshingly simple and profoundly satisfying.
            </p>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Inspired by this discovery, we set out to perfect a recipe that would capture the essence of this traditional beverage while meeting modern nutritional standards. After years of careful experimentation with date varieties and milk sources, TamrLatte was born.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Today, we source the finest Medjool dates and combine them with creamy, high-quality milk to create a beverage that honors its origins while providing a natural energy boost for today's busy lifestyles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;