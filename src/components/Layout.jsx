import React from 'react'
import './Layout.css';
import Navb from './Navb.jsx';
import Main from './Main.jsx';
import Aside from './Aside.jsx';
import Footer from './Footer.jsx';
const Layout = () => {
    return (
        <>
            <div className="">
                <Navb/>
            </div>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-sm-12 col-md-9 col-lg-8 '>
                        <Main/>
                    </div>
                    <div className='col-sm-12 col-md-3 col-lg-4 '>
                        <Aside/>
                    </div>
                </div>
            </div>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-12 '>
                        <Footer/>
                    </div>
                   
                </div>
            </div>
        </>
               
               
               
            
    )
}

export default Layout
