import React from 'react'
import useCartStore from '../store/cart'
import CartItem from './CartItem'

const CheckoutModal = ({ isCheckoutOpen, handleCheckout, setIsCheckoutOpen }) => {
    const cart = useCartStore(st => st.cart)
    const updateQuantity = useCartStore(st => st.updateQuantity)
    const removeFromCart = useCartStore(st => st.removeFromCart)
    const getTotalPrice = useCartStore(st => st.getTotalPrice)

    return (
        <>
            {isCheckoutOpen && (
                <div className="modal modal-open">
                    <div className="modal-box max-w-2xl">
                        <h3 className="font-bold text-lg mb-4">Shopping Cart</h3>
                        {cart.length === 0 ? (
                            <p className="py-4">Your cart is empty</p>
                        ) : (
                            <>
                                <div className="divide-y">
                                    {cart.map(item => (
                                        <CartItem
                                            key={item.id}
                                            item={item}
                                            updateQuantity={updateQuantity}
                                            removeFromCart={removeFromCart}
                                        />
                                    ))}
                                </div>
                                <div className="mt-4 pt-4 border-t">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-lg font-semibold">Total:</span>
                                        <span className="text-lg">${getTotalPrice()}</span>
                                    </div>
                                    <button
                                        className="btn btn-primary w-full"
                                        onClick={handleCheckout}
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </>
                        )}
                        <div className="modal-action">
                            <button
                                className="btn"
                                onClick={() => setIsCheckoutOpen(false)}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default CheckoutModal