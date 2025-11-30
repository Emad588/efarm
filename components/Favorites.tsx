import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';

const FAVORITES = [
  { id: 1, name: 'Platinum Red Guppy', price: 200, image: 'https://loremflickr.com/300/300/guppy,red' },
  { id: 2, name: 'Oranda Goldfish', price: 350, image: 'https://loremflickr.com/300/300/goldfish' },
  { id: 3, name: 'Water Lily Plant', price: 120, image: 'https://loremflickr.com/300/300/waterlily' }
];

const Favorites: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-2">
        <Heart className="text-red-500 fill-current" /> My Favorites
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {FAVORITES.map((item) => (
          <div key={item.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition group">
             <div className="relative h-64 overflow-hidden bg-gray-100">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:bg-gray-100 text-red-500">
                   <Heart size={18} fill="currentColor" />
                </button>
             </div>
             <div className="p-4">
                <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                <p className="text-xl font-bold text-blue-900 mt-2">₹{item.price}</p>
                
                <button className="mt-4 w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                   <ShoppingCart size={16} /> Move to Cart
                </button>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;