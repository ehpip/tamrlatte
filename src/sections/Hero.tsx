import React from 'react';
import Button from '../components/Button';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-amber-100 to-amber-200 -z-10"></div>
      
      {/* Decorative circles */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-amber-300 opacity-20 blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full bg-amber-400 opacity-20 blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-amber-900 leading-tight mb-4">
              Nature's Perfect <span className="text-amber-600">Indulgence</span>
            </h1>
            <p className="text-xl text-amber-800 mb-8 max-w-lg">
              TamrLatte combines premium dates with creamy milk for a naturally sweet, nutrient-rich beverage that delights your taste buds and nourishes your body.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Try TamrLatte
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
            
            <div className="mt-12 flex items-center space-x-8">
              <div>
                <p className="font-bold text-amber-900 text-2xl">100%</p>
                <p className="text-amber-700">Natural</p>
              </div>
              <div>
                <p className="font-bold text-amber-900 text-2xl">0</p>
                <p className="text-amber-700">Artificial Sugars</p>
              </div>
              <div>
                <p className="font-bold text-amber-900 text-2xl">5+</p>
                <p className="text-amber-700">Essential Nutrients</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative animate-float">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/5946974/pexels-photo-5946974.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="TamrLatte bottle" 
                className="rounded-2xl shadow-2xl object-cover max-h-[600px]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white rounded-full shadow-lg p-4 transform rotate-12">
                <img 
                  src="https://images.pexels.com/photos/7195133/pexels-photo-7195133.jpeg?auto=compress&cs=tinysrgb&w=200" 
                  alt="Medjool dates" 
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;