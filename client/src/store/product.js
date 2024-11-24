import { create } from "zustand";
import { devtools } from "zustand/middleware";


const useProductStore = create(
    devtools(
        (set) => ({
            shoesData: [
                {
                    id: 1,
                    name: "Classic Runner",
                    price: 140_000,
                    description: "Comfortable everyday running shoes",
                    image: "https://superga.id/cdn/shop/products/01-2750COTUCLASSIC-GREENGREY_52_900x.jpg?v=1626674910"
                },
                {
                    id: 2,
                    name: "Urban Sneaker",
                    price: 200_000,
                    description: "Stylish urban wear sneakers",
                    image: "https://superga.id/cdn/shop/products/03-2750-COT3STRAPU-NAVY_53_1024x1024@2x.jpg?v=1627543607"
                },
                {
                    id: 3,
                    name: "Sport Elite",
                    price: 300_000,
                    description: "Professional sports performance shoes",
                    image: "https://superga.id/cdn/shop/products/2750COTUCLASSICC57-2_1024x1024@2x.jpg?v=1626950650"
                },
                {
                    id: 4,
                    name: "Casual Comfort",
                    price: 250_000,
                    description: "Lightweight casual walking shoes",
                    image: "https://superga.id/cdn/shop/files/1_bb1a1765-f299-4148-9836-6684a27a6ecb_900x.jpg?v=1704795954"
                }
            ]
        })
    )
)

export default useProductStore