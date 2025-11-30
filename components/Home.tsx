import React from 'react';
import { Fish, Sprout, Feather } from 'lucide-react';
import { Page } from '../types';

interface HomeProps {
  setPage: (page: Page) => void;
}

const Home: React.FC<HomeProps> = ({ setPage }) => {
  return (
    <main className="pb-16">
      {/* Hero Section */}
      <section className="bg-white py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-6">
            <p className="text-blue-900 font-bold tracking-widest text-xs uppercase">
              A STARTER COMPANY OF FISH, PLANTS AND CHICKEN SALING
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#1e293b] leading-tight">
              efarm: The Hub for Premium Aquatic Life & Farm Provisions.
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed">
              Efarm helps you to make premium aquatic life, healthy fish for beginner and 
              Comertial clients. We offer a curated selection of ready-to-grow plants and hardy 
              poultry, providing everything you need, from pond to pasture. Visit efarm Store.
            </p>
            <div className="flex gap-4 pt-4">
              <button 
                onClick={() => setPage('STORE')}
                className="bg-[#2e5aa6] text-white px-8 py-3 rounded font-bold hover:bg-blue-800 transition shadow-md w-40"
              >
                STORE
              </button>
              <button className="bg-white text-[#2e5aa6] border-2 border-[#2e5aa6] px-8 py-3 rounded font-bold hover:bg-blue-50 transition w-40">
                Contact Us
              </button>
            </div>
          </div>
          {/* Hero Image */}
          <div className="lg:w-1/2 w-full">
            <div className="rounded-sm overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?q=80&w=1200&auto=format&fit=crop" 
                alt="Beautiful Aquarium" 
                className="w-full h-auto object-cover hover:scale-105 transition duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Category Cards Section */}
      <section className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Fish */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col items-center text-center group">
            <div className="bg-[#4267b2] p-4 rounded-md mb-6 shadow-md group-hover:scale-110 transition">
              <Fish className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Aquatic Life</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              Kerala's best source for vibrant, healthy fish. We specialize in sustainably sourced and budget-friendly exotic and local varieties, carefully packed for safe courier delivery right to your nearby courier office.
            </p>
            <ul className="text-left text-sm text-gray-700 space-y-2 mb-8 w-full px-4">
              <li>• Diverse range of tropical & coldwater fish</li>
              <li>• High-quality food and accessories</li>
              <li>• Expert care guides & support</li>
            </ul>
            <button 
              onClick={() => setPage('STORE')}
              className="text-gray-800 font-medium mt-auto hover:text-blue-600"
            >
              Discover Fish
            </button>
          </div>

          {/* Card 2: Plants */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col items-center text-center group">
            <div className="bg-[#4267b2] p-4 rounded-md mb-6 shadow-md group-hover:scale-110 transition">
              <Sprout className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready-to-Grow Plants</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              Enhance your garden and landscape with our selection of hardy, disease-free plants. From aquatic greenery for your tank to beautiful home garden essentials, we offer eco-friendly options for every budget.
            </p>
             <ul className="text-left text-sm text-gray-700 space-y-2 mb-8 w-full px-4">
              <li>• Aquatic & decorative plants</li>
              <li>• Gardening soil and supplies</li>
              <li>• Sustainable growing kits</li>
            </ul>
            <button className="text-gray-800 font-medium mt-auto hover:text-blue-600">Explore Plants</button>
          </div>

          {/* Card 3: Poultry */}
          <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col items-center text-center group">
            <div className="bg-[#4267b2] p-4 rounded-md mb-6 shadow-md group-hover:scale-110 transition">
              <Feather className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Quality Hens & Poultry</h3>
            <p className="text-gray-600 mb-8 leading-relaxed text-sm">
              Find healthy, hardy hens and essential poultry supplies for your farm or backyard. We focus on quality breeds and provide everything you need to start or expand your flock, our special delivery to home or come to our institution to pick.
            </p>
             <ul className="text-left text-sm text-gray-700 space-y-2 mb-8 w-full px-4">
              <li>• High-grade chicks and layers</li>
              <li>• Poultry feed and vitamins</li>
              <li>• Coop and cage essentials</li>
            </ul>
            <button className="text-gray-800 font-medium mt-auto hover:text-blue-600">See Poultry Farming</button>
          </div>

        </div>
      </section>

      {/* Expert Advice Section */}
      <section className="bg-white py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto bg-white rounded-lg overflow-hidden flex flex-col lg:flex-row shadow-sm border border-gray-100">
          
          {/* Left Content */}
          <div className="lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <h2 className="text-4xl font-extrabold text-[#2e5aa6] mb-6 leading-tight">
              Get Expert Advice &<br /> Custom Quotes
            </h2>
            <p className="text-gray-600 mb-4">
              Ready to bring the <span className="text-gray-800 font-semibold">highest quality fish, plants, or poultry</span> to your home in Kerala?
            </p>
            <p className="text-gray-600 mb-4">
              Need a specific variety, a large order quote, or simply advice on setting up your tank or coop?
            </p>
            <p className="text-gray-600 mb-8">
              Our experts are here to help you get started with the best, most budget-friendly provisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#2e5aa6] text-white font-bold py-3 px-6 rounded shadow hover:bg-blue-800 uppercase text-sm tracking-wide">
                CALL: +91 9744420741
              </button>
              <button className="bg-white text-[#2e5aa6] border border-[#2e5aa6] font-bold py-3 px-6 rounded shadow hover:bg-blue-50 uppercase text-sm tracking-wide">
                INFO.EFARM.COM
              </button>
            </div>
          </div>

          {/* Right Images (Collage) */}
          <div className="lg:w-1/2 bg-blue-100 grid grid-cols-3 h-64 lg:h-auto">
             <div className="h-full relative overflow-hidden group">
                 <img src="https://loremflickr.com/400/600/fish,underwater" alt="Fish" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                 <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition"></div>
             </div>
             <div className="h-full relative overflow-hidden group">
                 <img src="https://loremflickr.com/400/600/aquarium,plant" alt="Plant" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                 <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition"></div>
             </div>
             <div className="h-full relative overflow-hidden group">
                 <img src="https://loremflickr.com/400/600/hen,chicken" alt="Chicken" className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500" />
                 <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition"></div>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;