import React, { useState } from 'react'
import Layout from './Layout'
import MainSections from '../sections/MainSections'
import Navbar from '../components/Navbar';
import CheckoutModal from '../components/CheckoutModal';
import useCartStore from '../store/cart';
import Drawer from '../components/Drawer';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const clearCart = useCartStore(st => st.clearCart)
    const nav = useNavigate()

    const handleCheckout = () => {
        clearCart()
        nav('/success')
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