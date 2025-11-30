import React from 'react';
import { Calendar, Tag } from 'lucide-react';

const NEWS_ITEMS = [
  {
    id: 1,
    title: "New Batch of Platinum Red Guppies Arrived!",
    date: "October 10, 2025",
    category: "Arrivals",
    excerpt: "We have just received a stunning collection of Platinum Red Guppies. These are breeder grade quality with vibrant coloration.",
    image: "https://loremflickr.com/400/250/guppy"
  },
  {
    id: 2,
    title: "Monsoon Care Tips for Your Poultry",
    date: "September 28, 2025",
    category: "Tips",
    excerpt: "With the rains approaching, it's crucial to waterproof your coops and ensure your hens stay dry to prevent respiratory issues.",
    image: "https://loremflickr.com/400/250/chicken,coop"
  },
  {
    id: 3,
    title: "Flash Sale Alert: 50% Off on Live Fish",
    date: "October 15, 2025",
    category: "Promotions",
    excerpt: "Don't miss out on our biggest sale of the season. Stock up on your favorite community fish this weekend.",
    image: "https://loremflickr.com/400/250/aquarium,fish"
  }
];

const News: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-16">
       <div className="bg-white shadow-sm py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-[#1e293b]">News & Updates</h1>
            <p className="mt-2 text-gray-500">Latest updates from the farm, care tips, and announcements.</p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ITEMS.map(item => (
              <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-gray-100 flex flex-col">
                <div className="h-48 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {item.date}</span>
                    <span className="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full"><Tag size={12} /> {item.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 leading-tight">{item.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 flex-1">{item.excerpt}</p>
                  <button className="text-blue-600 font-semibold text-sm hover:underline self-start">Read More &rarr;</button>
                </div>
              </div>
            ))}
          </div>
       </div>
    </div>
  );
};

export default News;