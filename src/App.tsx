import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Benefits from './sections/Benefits';
import Testimonials from './sections/Testimonials';
import StoreLocator from './sections/StoreLocator';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = 'TamrLatte | Premium Date Milk Beverage';
  }, []);
  
  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Benefits />
      <Testimonials />
      <StoreLocator />
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Newsletter />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;