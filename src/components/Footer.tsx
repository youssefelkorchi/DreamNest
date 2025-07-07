import React from 'react';
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-sage-green rounded-full flex items-center justify-center">
                <Home className="text-white" size={20} />
              </div>
              <h3 className="font-handwritten text-3xl font-bold">DreamNest</h3>
            </div>
            <p className="font-body text-gray-400 leading-relaxed max-w-md">
              Creating inspiring workspace havens where productivity meets comfort. 
              Book by the hour, work on your terms, and discover your perfect professional sanctuary.
            </p>
          </div>

          <div>
            <h4 className="font-handwritten text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3 font-body">
              <li><a href="#" className="text-gray-400 hover:text-sage-green transition-colors">Find Locations</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sage-green transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sage-green transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-sage-green transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-handwritten text-xl font-bold mb-6">Get In Touch</h4>
            <div className="space-y-3 font-body">
              <div className="flex items-center gap-3 text-gray-400">
                <Phone size={16} />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail size={16} />
                <span>hello@dreamnest.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin size={16} />
                <span>50+ Locations Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="font-body text-gray-400 text-sm">
            © 2024 DreamNest. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-sage-green transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-sage-green transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-sage-green transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;