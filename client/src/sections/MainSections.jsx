import React from 'react'
import ProductCard from '../components/ProductCard'
import useCartStore from '../store/cart'
import useProductStore from '../store/product'

const MainSections = () => {
    const shoesData = useProductStore(st => st.shoesData)
    const addToCart = useCartStore(st => st.addToCart)

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-center">Featured Sneakers</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {shoesData.map(product => (
                    <ProductCard
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                    />
                ))}
            </div>
        </div>
    )
}

export default MainSections