import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'



function Layout({children}) {
    return (
        <>
            <Navbar/>
            <div className="content">
                {children}
            </div>
            <Footer/>

        </>
    )
}

export default Layout




