import React from 'react';
import { Gift, Award } from 'lucide-react';

const Rewards: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 min-h-screen">
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white shadow-lg mb-12 flex flex-col md:flex-row items-center justify-between">
         <div>
            <h2 className="text-3xl font-bold mb-2">eFarm Rewards</h2>
            <p className="text-blue-100">Earn points with every purchase and redeem for exclusive discounts.</p>
         </div>
         <div className="mt-6 md:mt-0 text-center bg-white/20 p-4 rounded-lg backdrop-blur-sm">
            <span className="block text-sm uppercase tracking-wider opacity-80">Current Balance</span>
            <span className="text-4xl font-extrabold">250</span>
            <span className="block text-sm">Points</span>
         </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-6">Redeem Points</h3>
      <div className="grid md:grid-cols-2 gap-6">
         <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-full text-green-600">
               <Gift size={24} />
            </div>
            <div>
               <h4 className="font-bold text-lg">₹50 Off Coupon</h4>
               <p className="text-gray-500 text-sm mb-4">Get a flat ₹50 discount on orders above ₹500.</p>
               <button className="bg-gray-900 text-white px-4 py-2 rounded text-sm hover:bg-gray-800">Redeem for 500 Pts</button>
            </div>
         </div>
         <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm flex items-start gap-4 opacity-75">
            <div className="p-3 bg-blue-100 rounded-full text-blue-600">
               <Award size={24} />
            </div>
            <div>
               <h4 className="font-bold text-lg">Free Shipping</h4>
               <p className="text-gray-500 text-sm mb-4">Valid for one order under 5kg.</p>
               <button disabled className="bg-gray-300 text-gray-500 px-4 py-2 rounded text-sm cursor-not-allowed">Redeem for 800 Pts</button>
            </div>
         </div>
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">History</h3>
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
         <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
               <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Activity</th>
                  <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Points</th>
               </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
               <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Oct 12, 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Purchase - Order #405</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold text-right">+50</td>
               </tr>
               <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Sept 28, 2025</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Review - Platinum Red Guppy</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold text-right">+10</td>
               </tr>
               <tr>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Aug 15, 2025</td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Sign Up Bonus</td>
                   <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-bold text-right">+100</td>
               </tr>
            </tbody>
         </table>
      </div>
    </div>
  );
};

export default Rewards;