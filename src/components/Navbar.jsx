import React from 'react'
import useCartStore from '../store/cart'
import { ShoppingCart, X, Minus, Plus, Menu } from 'lucide-react';


const Navbar = () => {
    const cart = useCartStore(st => st.cart)
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm px-4 sm:px-8">
                <div className="flex-1">
                    <label className="btn btn-ghost normal-case text-xl drawer-button font-bold" htmlFor="my-drawer">
                        <Menu />
                        PakeSneakers
                    </label>
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