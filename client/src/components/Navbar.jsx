import React from 'react'
import useCartStore from '../store/cart'
import { ShoppingCart, X, Minus, Plus } from 'lucide-react';


const Navbar = ({ setIsCheckoutOpen }) => {
    const cart = useCartStore(st => st.cart)
    return (
        <>
            <div className="navbar bg-base-100 shadow-lg px-4 sm:px-8">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">PakeSneakers</a>
                </div>
                <div className="flex-none">
                    <button className="btn btn-ghost" onClick={() => document.getElementById('modal_checkout').showModal()}>
                        <ShoppingCart />
                        <span className="ml-2 badge badge-sm">{cart.length}</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar