import { ShoppingCart, X, Minus, Plus } from 'lucide-react';


const CartItem = ({ item, updateQuantity, removeFromCart }) => {
    return (
        <div className="flex items-center gap-4 py-2">
            <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
            <div className="flex-1">
                <h3 className="font-medium">{item.name}</h3>
                <p className="text-sm opacity-70">Rp. {item.price}</p>
            </div>
            <div className="flex items-center gap-2">
                <button
                    className="btn btn-sm btn-ghost"
                    onClick={() => updateQuantity(item.id, Math.max(0, item.quantity - 1))}
                >
                    <Minus size={16} />
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                    className="btn btn-sm btn-ghost"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                    <Plus size={16} />
                </button>
            </div>
            <button
                className="btn btn-sm btn-ghost"
                onClick={() => removeFromCart(item.id)}
            >
                <X size={16} />
            </button>
        </div>
    );
};

export default CartItem