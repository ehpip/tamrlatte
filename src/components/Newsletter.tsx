import React, { useState } from 'react';
import Button from './Button';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
    }, 500);
  };

  return (
    <div className="bg-amber-100 rounded-xl p-8 max-w-3xl mx-auto">
      <h3 className="text-2xl font-bold text-amber-900 mb-2 text-center">Stay Updated</h3>
      <p className="text-amber-800 mb-6 text-center">
        Subscribe to our newsletter for new flavor announcements, special offers, and recipes.
      </p>
      
      {isSubmitted ? (
        <div className="text-center py-4 bg-white rounded-lg">
          <p className="text-amber-900 font-medium">Thank you for subscribing!</p>
          <p className="text-gray-600 mt-1">We'll keep you updated with the latest TamrLatte news.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            required
            className="flex-grow px-4 py-3 rounded-md border border-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
          <Button type="submit" variant="primary">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
};

export default Newsletter;