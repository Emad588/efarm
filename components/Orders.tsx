import React from 'react';
import { Package } from 'lucide-react';

const Orders: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">My Orders</h1>

      {/* Empty State (for demo purposes) */}
      {/* <div className="text-center py-20 bg-gray-50 rounded-lg border border-dashed border-gray-300">
        <Package className="mx-auto h-12 w-12 text-gray-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900">No orders yet</h3>
        <p className="mt-1 text-gray-500">Start shopping to see your orders here.</p>
        <button className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Browse Store</button>
      </div> */}

      {/* Order List */}
      <div className="space-y-6">
        {[1, 2].map((order) => (
          <div key={order} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex gap-8 text-sm">
                 <div>
                   <p className="font-medium text-gray-500">Order Placed</p>
                   <p className="text-gray-900">October {10 + order}, 2025</p>
                 </div>
                 <div>
                   <p className="font-medium text-gray-500">Total</p>
                   <p className="text-gray-900">₹{order * 350}</p>
                 </div>
                 <div>
                   <p className="font-medium text-gray-500">Ship To</p>
                   <p className="text-blue-600 cursor-pointer hover:underline">Alex Johnson</p>
                 </div>
              </div>
              <div className="text-sm">
                 <p className="font-medium text-gray-500">Order # 405-3912-{order}01</p>
                 <div className="flex gap-4 mt-1">
                    <button className="text-blue-600 hover:underline">View Invoice</button>
                 </div>
              </div>
            </div>
            
            <div className="p-6 flex flex-col md:flex-row gap-6">
               <div className="w-24 h-24 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                  <img src={`https://loremflickr.com/200/200/guppy,fish?random=${order}`} alt="Product" className="w-full h-full object-cover" />
               </div>
               <div className="flex-1">
                  <h4 className="font-bold text-lg text-gray-900">Premium Guppy Pair - Full Black</h4>
                  <p className="text-gray-600 text-sm mt-1">Sold by: efarm Kerala</p>
                  <p className="text-green-600 font-medium text-sm mt-2">Arriving by Thu, Oct {15 + order}</p>
                  <div className="mt-4 flex gap-4">
                     <button className="bg-[#2e5aa6] text-white px-4 py-2 rounded text-sm hover:bg-blue-700">Track Package</button>
                     <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded text-sm hover:bg-gray-50">Buy Again</button>
                  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;