import React, { useState, useRef, useEffect } from 'react';
import { Search, ShoppingCart, User, MoreVertical, Zap, Package, Heart, Gift, Phone } from 'lucide-react';
import { Page } from '../types';

interface HeaderProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Header: React.FC<HeaderProps> = ({ currentPage, setPage }) => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLoginOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleNav = (page: Page) => {
    setPage(page);
    setIsLoginOpen(false);
  };

  return (
    <header className="bg-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-sm font-sans">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => setPage('HOME')}>
          <div className="relative transform group-hover:scale-110 transition-transform duration-300">
             {/* Mimicking the logo in screenshot: person running with cart */}
             <ShoppingCart className="w-8 h-8 text-blue-700" />
             <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <span className="text-3xl font-extrabold text-blue-900 tracking-tight">e-farm</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg w-full">
          <div className="relative flex items-center group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-sm leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 sm:text-sm transition-all"
              placeholder="Search for Products..."
            />
          </div>
        </div>

        {/* Navigation & Actions */}
        <div className="flex items-center gap-6 text-blue-900 font-medium text-sm md:text-base relative">
          <button 
            onClick={() => setPage('HOME')}
            className={`hover:text-blue-600 transition ${currentPage === 'HOME' ? 'text-blue-600 font-bold' : ''}`}
          >
            Home
          </button>
          <button 
             onClick={() => setPage('STORE')}
             className={`hover:text-blue-600 transition ${currentPage === 'STORE' ? 'text-blue-600 font-bold' : ''}`}
          >
            Store
          </button>
          <button 
            onClick={() => setPage('ABOUT')}
            className={`hover:text-blue-600 transition ${currentPage === 'ABOUT' ? 'text-blue-600 font-bold' : ''}`}
          >
            About Us
          </button>
          <button 
            onClick={() => setPage('NEWS')}
            className={`hover:text-blue-600 transition ${currentPage === 'NEWS' ? 'text-blue-600 font-bold' : ''}`}
          >
            News & Updates
          </button>
          
          {/* Login Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <div 
              className="flex items-center gap-1 cursor-pointer hover:text-blue-700 ml-4 border border-transparent rounded px-2 py-1 hover:border-gray-200 hover:bg-gray-50 transition"
              onClick={() => setIsLoginOpen(!isLoginOpen)}
            >
              <span>Login</span>
              <div className="w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-t-[4px] border-t-blue-900 ml-1"></div>
            </div>

            {/* Dropdown Menu */}
            {isLoginOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg border border-gray-100 z-50 overflow-hidden animate-in fade-in zoom-in duration-200 origin-top-right">
                <div className="p-4 border-b border-gray-100 bg-gray-50">
                  <p className="text-sm text-gray-600 mb-1">New customer?</p>
                  <button 
                    onClick={() => handleNav('SIGNUP')}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Sign Up
                  </button>
                </div>
                <div className="py-2">
                  <button onClick={() => handleNav('PROFILE')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 flex items-center gap-3">
                    <User size={16} /> My Profile
                  </button>
                  <button onClick={() => handleNav('MEMBERSHIP')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 flex items-center gap-3">
                    <Zap size={16} /> eFarm Membership
                  </button>
                  <button onClick={() => handleNav('ORDERS')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 flex items-center gap-3">
                    <Package size={16} /> Orders
                  </button>
                  <button onClick={() => handleNav('FAVORITES')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 flex items-center gap-3">
                    <Heart size={16} /> Favorites
                  </button>
                  <button onClick={() => handleNav('REWARDS')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 flex items-center gap-3">
                    <Gift size={16} /> Rewards
                  </button>
                  <button onClick={() => handleNav('CUSTOMER_CARE')} className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600 flex items-center gap-3">
                    <Phone size={16} /> Customer Care
                  </button>
                  <div className="border-t border-gray-100 mt-1 pt-1">
                     <button onClick={() => handleNav('LOGIN')} className="w-full text-left px-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50">
                        Sign In
                     </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <button className="text-gray-700 hover:text-black">
            <MoreVertical size={20} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;