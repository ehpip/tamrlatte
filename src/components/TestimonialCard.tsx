import React from 'react';
import { TestimonialType } from '../types';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  testimonial: TestimonialType;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 transition-transform duration-300 hover:-translate-y-2">
      <div className="flex items-start mb-4">
        <Quote className="h-8 w-8 text-amber-200 mr-2 flex-shrink-0" />
      </div>
      <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
      <div className="flex items-center">
        <img 
          src={testimonial.avatar} 
          alt={testimonial.name} 
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-bold text-amber-900">{testimonial.name}</h4>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;