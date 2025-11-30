import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1e293b] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-sm leading-relaxed">
        
        {/* About Us */}
        <div>
          <h3 className="text-blue-400 font-bold text-lg mb-4 uppercase">About Us</h3>
          <p className="text-gray-300">
            Efarm is Kerala's trusted source for premium aquatic life, high-quality plants, and hardy poultry. We are dedicated to providing sustainably sourced and budget-friendly provisions delivered safely to your home.
          </p>
        </div>

        {/* Call & Write */}
        <div>
          <h3 className="text-blue-400 font-bold text-lg mb-4 uppercase">Call Us</h3>
          <p className="text-white text-lg font-semibold mb-6">+91 9744420741</p>

          <h3 className="text-blue-400 font-bold text-lg mb-4 uppercase">Write A Message</h3>
          <p className="text-white hover:underline cursor-pointer">info@dekkans.com</p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-blue-400 font-bold text-lg mb-4 uppercase">Address</h3>
          <p className="text-gray-300">
            punchavayal, kannapuram, kannur, kerala
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-xs">
        Copyright © 2025 Efarm. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;