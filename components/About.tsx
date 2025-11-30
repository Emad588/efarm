import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pb-16">
      <div className="bg-[#2e5aa6] py-12 text-center text-white">
        <h1 className="text-4xl font-bold tracking-wide">About Us</h1>
        <p className="mt-2 text-blue-100">Cultivating Nature's Best for Your Home</p>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Efarm is Kerala's trusted source for premium aquatic life, high-quality plants, and hardy poultry. 
            Founded with a passion for sustainable farming and aquaculture, we aim to bridge the gap between 
            expert breeders and enthusiasts. Whether you are a beginner setting up your first tank or a commercial 
            client looking for bulk supplies, Efarm is your partner in growth.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg h-64">
            <img src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=800&auto=format&fit=crop" alt="Farm Life" className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <h3 className="text-2xl font-bold text-[#2e5aa6]">Our Mission</h3>
            <p className="text-gray-600">
              To provide sustainably sourced, healthy, and budget-friendly provisions. We believe in transparency, 
              quality care, and educating our community about responsible farming and pet care.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">✓ Sustainably Sourced</li>
              <li className="flex items-center gap-2">✓ Expert Vetted Quality</li>
              <li className="flex items-center gap-2">✓ Safe & Fast Delivery</li>
            </ul>
          </div>
        </div>

        <section className="bg-blue-50 p-8 rounded-xl border border-blue-100 shadow-sm">
           <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Visit Our Institution</h3>
           <p className="text-center text-gray-600 mb-6">
             We welcome visitors to experience our farm firsthand. Located in the heart of Kannur.
           </p>
           <div className="flex flex-col md:flex-row justify-center gap-12 text-center text-sm text-gray-600">
              <div>
                <strong className="block text-gray-900 text-base mb-1">Address</strong>
                punchavayal, kannapuram<br/>kannur, kerala
              </div>
              <div>
                 <strong className="block text-gray-900 text-base mb-1">Contact</strong>
                 +91 9744420741<br/>info@dekkans.com
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

export default About;