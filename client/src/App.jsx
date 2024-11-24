import React, { useState } from 'react';
import './App.css'
import MainSections from './sections/MainSections';
import CheckoutModal from './components/CheckoutModal';
import Navbar from './components/Navbar';

const App = () => {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleCheckout = () => {
    alert('Thank you for your purchase!');
    setCart([]);
    setIsCheckoutOpen(false);
  };

  return (
    <div className="min-h-screen bg-base-200">
      <Navbar setIsCheckoutOpen={setIsCheckoutOpen} />

      <MainSections />

      <CheckoutModal
        isCheckoutOpen={isCheckoutOpen}
        setIsCheckoutOpen={setIsCheckoutOpen}
        handleCheckout={handleCheckout}
      />
    </div>
  );
};

export default App;