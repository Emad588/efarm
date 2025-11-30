import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Store from './components/Store';
import About from './components/About';
import News from './components/News';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Membership from './components/Membership';
import Orders from './components/Orders';
import Favorites from './components/Favorites';
import Rewards from './components/Rewards';
import CustomerCare from './components/CustomerCare';
import Footer from './components/Footer';
import FlashSale from './components/FlashSale';
import ChatAssistant from './components/ChatAssistant';
import { Page } from './types';

function App() {
  const [page, setPage] = useState<Page>('HOME');

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-gray-50/30">
      <Header currentPage={page} setPage={setPage} />
      
      <div className="flex-1">
        {page === 'HOME' && <Home setPage={setPage} />}
        {page === 'STORE' && <Store />}
        {page === 'ABOUT' && <About />}
        {page === 'NEWS' && <News />}
        {page === 'LOGIN' && <Login setPage={setPage} />}
        {page === 'SIGNUP' && <SignUp setPage={setPage} />}
        {page === 'PROFILE' && <Profile />}
        {page === 'MEMBERSHIP' && <Membership />}
        {page === 'ORDERS' && <Orders />}
        {page === 'FAVORITES' && <Favorites />}
        {page === 'REWARDS' && <Rewards />}
        {page === 'CUSTOMER_CARE' && <CustomerCare />}
      </div>

      <Footer />
      <FlashSale />
      <ChatAssistant />
    </div>
  );
}

export default App;