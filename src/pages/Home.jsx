import React, { useState } from 'react'
import Layout from './Layout'
import MainSections from '../sections/MainSections'
import Navbar from '../components/Navbar';
import CheckoutModal from '../components/CheckoutModal';
import useCartStore from '../store/cart';
import Drawer from '../components/Drawer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const getTotalPrice = useCartStore(st => st.getTotalPrice)

    const handleCheckout = async () => {
        try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/checkout`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    totalPrice: getTotalPrice(),
                })
            });

            if (response.ok) {
                const data = await response.json();
                // checkout via redirect to the payment page
                window.location.href = data.transaction.redirect_url;
            }
        } catch (error) {
            console.error('Checkout failed:', error);
        }
    };

    return (
        <Layout>
            <Drawer />

            <Navbar />

            <MainSections />

            <CheckoutModal
                handleCheckout={handleCheckout}
            />
        </Layout>
    )
}

export default Home