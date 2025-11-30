import React from 'react';
import { Zap } from 'lucide-react';

const FlashSale: React.FC = () => {
  return (
    <div className="bg-[#2563eb] text-white py-2 overflow-hidden fixed bottom-0 w-full z-40 border-t-2 border-orange-500">
      <div className="whitespace-nowrap animate-marquee flex items-center">
         <div className="flex items-center gap-4 text-sm md:text-base font-bold tracking-wide mx-4">
            <span className="bg-red-600 text-yellow-300 px-2 py-0.5 rounded-sm transform -skew-x-12 flex items-center">
                <Zap size={16} fill="currentColor" /> FLASH SALE ALERT!
            </span>
            <span className="text-orange-300">⚡</span>
            <span>Get 50% OFFER For All Live Fishes! Purchase Now!</span>
            <span className="text-orange-300">⚡</span>
            <span>Premium Guppies Available</span>
            <span className="text-orange-300">⚡</span>
            <span>Visit efarm Store Today!</span>
         </div>
         {/* Duplicate for seamless loop appearance if needed, though pure CSS marquee often resets. 
             Ideally the marquee keyframe moves from 100% to -100%. 
             To make it continuous without gaps requires duplicating content, but simple marquee is fine for this context. */}
      </div>
    </div>
  );
};

export default FlashSale;