import React from 'react';
import { Zap, Check } from 'lucide-react';

const Membership: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 min-h-screen">
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full mb-4">
           <Zap className="h-10 w-10 text-yellow-600" />
        </div>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">eFarm Premium Membership</h1>
        <p className="text-xl text-gray-600">Unlock exclusive benefits, faster delivery, and special discounts.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Free Tier */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Basic</h3>
          <p className="text-4xl font-extrabold text-gray-900 mb-6">Free</p>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center text-gray-600"><Check size={18} className="text-green-500 mr-2" /> Access to Store</li>
            <li className="flex items-center text-gray-600"><Check size={18} className="text-green-500 mr-2" /> Basic Support</li>
          </ul>
          <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50">Current Plan</button>
        </div>

        {/* Gold Tier */}
        <div className="bg-white rounded-lg shadow-lg border-2 border-blue-500 p-8 flex flex-col transform scale-105 relative">
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">POPULAR</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Gold Member</h3>
          <div className="flex items-baseline mb-6">
            <span className="text-4xl font-extrabold text-gray-900">₹499</span>
            <span className="ml-1 text-gray-500">/year</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center text-gray-600"><Check size={18} className="text-green-500 mr-2" /> Free Delivery &gt; ₹500</li>
            <li className="flex items-center text-gray-600"><Check size={18} className="text-green-500 mr-2" /> 5% Off on All Orders</li>
            <li className="flex items-center text-gray-600"><Check size={18} className="text-green-500 mr-2" /> Priority Support</li>
            <li className="flex items-center text-gray-600"><Check size={18} className="text-green-500 mr-2" /> Early Access to Sales</li>
          </ul>
          <button className="w-full py-2 px-4 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700">Upgrade Now</button>
        </div>

        {/* Platinum Tier */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 flex flex-col">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Platinum Member</h3>
           <div className="flex items-baseline mb-6">
            <span className="text-4xl font-extrabold text-gray-900">₹999</span>
            <span className="ml-1 text-gray-500">/year</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center text-gray-600"><Check size={18} className="text-green-500 mr-2" /> Free Delivery (No Min)</li>
            <li className="flex items-center text-gray-600"><Check size={18} className="text-green-500 mr-2" /> 10% Off on All Orders</li>
            <li className="flex items-center text-gray-600"><Check size={18} className="text-green-500 mr-2" /> 24/7 Dedicated Support</li>
            <li className="flex items-center text-gray-600"><Check size={18} className="text-green-500 mr-2" /> Exclusive Workshops</li>
          </ul>
          <button className="w-full py-2 px-4 border border-blue-600 text-blue-600 rounded-md font-semibold hover:bg-blue-50">Contact Sales</button>
        </div>
      </div>
    </div>
  );
};

export default Membership;