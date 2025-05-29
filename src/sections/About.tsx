import { Coffee, Sparkles } from "lucide-react";
import React from "react";

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Our Story
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="public/images/tamrlatte_mix.jpg"
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
              The Story Behind TamrLatte
            </h3>

            <p className="text-gray-700 mb-6 leading-relaxed">
              TamrLatte started as a small experiment during the pandemic in
              2020. When the world slowed down, my brother and I found comfort
              in our kitchen — blending Sukkari dates, full cream milk, and palm
              sugar into a warm, nourishing drink. At first, it was just
              something we made for ourselves — a homemade treat to lift our
              spirits during uncertain times.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              But as we shared it with friends and family, something beautiful
              happened. People loved the taste, the story, and the feeling it
              brought. That’s when I decided to take it further — turning our
              humble recipe into a growing homemade business.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Today, TamrLatte is still crafted with the same love and care as
              the very first batch. No shortcuts, no preservatives — just
              natural sweetness, creamy richness, and a touch of tradition in
              every bottle.
            </p>

            <p className="text-gray-700 leading-relaxed">
              From our home to yours — TamrLatte is more than a drink. It’s a
              story of resilience, warmth, and homemade goodness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
