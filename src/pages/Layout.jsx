import React from 'react'

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-base-200">
            {children}
        </div>
    )
}

export default Layout