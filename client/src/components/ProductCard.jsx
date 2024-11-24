import React, { useState } from 'react'
import { ShoppingCart, X, Minus, Plus } from 'lucide-react';


const ProductCard = ({ product, addToCart }) => {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-4 pt-4">
                <img src={product.image} alt={product.name} className="rounded-xl h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="opacity-70">{product.description}</p>
                <div className="flex items-center gap-2 mt-2">
                    <span className="text-xl font-semibold">Rp. {product.price}</span>
                </div>
                <div className="flex items-center gap-2 mt-2">
                    <button
                        className="btn btn-sm btn-ghost"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                        <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">{quantity}</span>
                    <button
                        className="btn btn-sm btn-ghost"
                        onClick={() => setQuantity(quantity + 1)}
                    >
                        <Plus size={16} />
                    </button>
                </div>
                <div className="card-actions justify-end mt-4">
                    <button
                        className="btn btn-primary"
                        onClick={() => {
                            addToCart(product, quantity);
                            setQuantity(1);
                        }}
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};
export default ProductCard