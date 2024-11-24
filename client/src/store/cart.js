import { create } from "zustand";
import { devtools } from "zustand/middleware";

const useCartStore = create(
  devtools(
    (set, get) => ({
      cart: [],
      
      addToCart: (product, quantity) => {
        set((state) => {
          const existingItem = state.cart.find(item => item.id === product.id);
          
          if (existingItem) {
            return {
              cart: state.cart.map(item =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + quantity }
                  : item
              )
            };
          }
          
          return {
            cart: [...state.cart, { ...product, quantity }]
          };
        }, false, 'addToCart'); // Action name for devtools
      },
      
      updateQuantity: (productId, newQuantity) => {
        if (newQuantity === 0) {
          get().removeFromCart(productId);
          return;
        }
        
        set((state) => ({
          cart: state.cart.map(item =>
            item.id === productId
              ? { ...item, quantity: newQuantity }
              : item
          )
        }), false, 'updateQuantity'); // Action name for devtools
      },
      
      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter(item => item.id !== productId)
        }), false, 'removeFromCart'); // Action name for devtools
      },
      
      getTotalPrice: () => {
        const state = get();
        return state.cart.reduce(
          (total, item) => total + (item.price * item.quantity),
          0
        ).toFixed(2);
      },
      
      clearCart: () => {
        set({ cart: [] }, false, 'clearCart'); // Action name for devtools
      }
    }),
    {
      name: 'cart-store', // Name that will appear in Redux DevTools
      enabled: process.env.NODE_ENV === 'development' // Only enable in development
    }
  )
);

export default useCartStore;