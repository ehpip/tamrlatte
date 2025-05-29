import React from "react";
import TestimonialCard from "../components/TestimonialCard";
import { testimonials } from "../data/data";

const Testimonials: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-white to-amber-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            What People Say
          </h2>
          <div className="w-24 h-1 bg-amber-400 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-amber-800 font-medium">
            Join many satisfied customers who have made TamrLatte part of their
            daily routine
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
