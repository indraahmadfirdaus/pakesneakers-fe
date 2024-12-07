import { ShoppingBag, User } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Drawer = () => {
    const nav = useNavigate()

    return (
        <div className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-side">
                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <p className='text-xl mb-4 font-bold'>PakeSneakers</p>

                    {/* Sidebar content here */}
                    <li className='text-dark'><a
                    ><ShoppingBag /> My Orders </a></li>
                    <li className='text-error'><a
                        onClick={() => {
                            nav('/login')
                        }}
                    ><User /> Sign Out </a></li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer