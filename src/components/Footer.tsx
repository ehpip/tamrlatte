import React from 'react';
import { Coffee, Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-amber-900 text-amber-50 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Coffee className="h-8 w-8" />
              <span className="ml-2 text-xl font-bold">TamrLatte</span>
            </div>
            <p className="mb-4">
              Premium date-infused milk that's naturally sweet, nutritious, and delicious.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-amber-200 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-amber-200 transition-colors">Our Story</a></li>
              <li><a href="#benefits" className="hover:text-amber-200 transition-colors">Benefits</a></li>
              <li><a href="#testimonials" className="hover:text-amber-200 transition-colors">Testimonials</a></li>
              <li><a href="#find" className="hover:text-amber-200 transition-colors">Where to Buy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-amber-200 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-amber-200 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-amber-200 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-amber-200 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>hello@tamrlatte.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <span>+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-6 mt-6 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} TamrLatte. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;