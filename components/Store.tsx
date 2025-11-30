import React, { useState } from 'react';
import { Product } from '../types';

const CATEGORIES = [
  "Guppy fishes", "Gourami fishes", "Goldfish", "Fish fries", 
  "carp/koi-carp fishes", "Molly fishes", "Platy fishes", 
  "Pair of Poultry", "poultry chicks", "eggs"
];

// Mock Data
const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Fullblack',
    description: 'The full black guppy is full back-darkblue texture guppy fish with long tail.',
    price: 150,
    category: 'Guppy fishes',
    image: 'https://loremflickr.com/300/300/guppy,black'
  },
  {
    id: '2',
    name: 'Platinum Red',
    description: 'The platinum red guppy has a striking silver body with a bright red tail.',
    price: 200,
    category: 'Guppy fishes',
    image: 'https://loremflickr.com/300/300/guppy,red'
  },
  {
    id: '3',
    name: 'Fullblack guppy',
    description: 'Another variant of the full black guppy, perfect for community tanks.',
    price: 150,
    category: 'Guppy fishes',
    image: 'https://loremflickr.com/300/300/fish,black'
  },
  {
    id: '4',
    name: 'Platinum Red',
    description: 'High grade platinum red guppy bred for color intensity.',
    price: 220,
    category: 'Guppy fishes',
    image: 'https://loremflickr.com/300/300/fish,red'
  },
  {
    id: '5',
    name: 'Fullblack guppy',
    description: 'Hardy and active full black guppy for your aquarium.',
    price: 160,
    category: 'Guppy fishes',
    image: 'https://loremflickr.com/300/300/guppy'
  },
  {
    id: '6',
    name: 'Platinum Red',
    description: 'A beautiful addition to any planted tank.',
    price: 210,
    category: 'Guppy fishes',
    image: 'https://loremflickr.com/300/300/guppy,orange'
  },
  {
    id: '7',
    name: 'Goldfish Oranda',
    description: 'Classic goldfish with a wen.',
    price: 350,
    category: 'Goldfish',
    image: 'https://loremflickr.com/300/300/goldfish'
  },
  {
    id: '8',
    name: 'Pearl Gourami',
    description: 'Peaceful and beautiful gourami.',
    price: 180,
    category: 'Gourami fishes',
    image: 'https://loremflickr.com/300/300/gourami'
  },
  {
    id: '9',
    name: 'Poultry Pair',
    description: 'Healthy pair of country chickens.',
    price: 850,
    category: 'Pair of Poultry',
    image: 'https://loremflickr.com/300/300/chicken,hen'
  },
  {
    id: '10',
    name: 'Koi Carp',
    description: 'Vibrant Koi carp for your pond.',
    price: 450,
    category: 'carp/koi-carp fishes',
    image: 'https://loremflickr.com/300/300/koi,fish'
  }
];

const Store: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Guppy fishes');

  const filteredProducts = PRODUCTS.filter(p => p.category === selectedCategory);

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Blue Store Banner */}
      <div className="bg-[#2e5aa6] py-6 mb-8 shadow-md">
        <h1 className="text-center text-white text-4xl font-bold tracking-wider">
          efarm -STORE-
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Category Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 border-2 text-sm font-medium transition-colors duration-200 capitalize
                ${selectedCategory === cat 
                  ? 'bg-blue-200 border-blue-400 text-blue-900 shadow-inner' 
                  : 'bg-blue-100 border-blue-300 text-gray-700 hover:bg-blue-200 hover:border-blue-400'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="bg-blue-100/50 rounded-lg overflow-hidden border border-blue-200 hover:shadow-lg transition flex flex-col items-center p-4">
                 <h3 className="text-xl font-medium text-gray-900 mb-4">{product.name}</h3>
                 
                 <div className="w-full aspect-square mb-4 overflow-hidden rounded-md bg-white relative">
                   <img src={product.image} alt={product.name} className="w-full h-full object-cover p-1 hover:scale-110 transition duration-300" />
                 </div>
                 
                 <p className="text-sm text-gray-600 text-center leading-relaxed px-2">
                   {product.description}
                 </p>
                 
                 {/* Invisible spacer to push button down if needed, or price */}
                 <div className="mt-4 font-bold text-blue-800">₹{product.price}</div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 text-gray-500">
              <p className="text-lg">No products found in this category yet.</p>
              <p className="text-sm">Try selecting 'Guppy fishes' for demo items.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default Store;