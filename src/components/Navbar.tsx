import { Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";
import Button from "./Button";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {/* <Coffee className="h-8 w-8 text-amber-800" /> */}
            <span className="ml-2 text-xl font-bold text-amber-900">
              TamrLatte
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              className="text-amber-900 hover:text-amber-700 font-medium"
            >
              Our Story
            </a>
            <a
              href="#benefits"
              className="text-amber-900 hover:text-amber-700 font-medium"
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-amber-900 hover:text-amber-700 font-medium"
            >
              Testimonials
            </a>
            <a
              href="#find"
              className="text-amber-900 hover:text-amber-700 font-medium"
            >
              Where to Buy
            </a>
            <Button variant="primary" size="sm">
              Buy Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-amber-900 hover:text-amber-700 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-md animate-fadeIn">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <a
                href="#about"
                className="text-amber-900 hover:text-amber-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Our Story
              </a>
              <a
                href="#benefits"
                className="text-amber-900 hover:text-amber-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Benefits
              </a>
              <a
                href="#testimonials"
                className="text-amber-900 hover:text-amber-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Testimonials
              </a>
              <a
                href="#find"
                className="text-amber-900 hover:text-amber-700 font-medium"
                onClick={() => setIsOpen(false)}
              >
                Where to Buy
              </a>
              <Button variant="primary" onClick={() => setIsOpen(false)}>
                Shop Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
