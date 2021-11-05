import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'


const Layout = ({children}) => {
    return (
        <div>
            <Navbar/>
            <div className="w-4/5 m-auto">
            {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
