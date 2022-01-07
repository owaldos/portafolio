import React from 'react'
import './Layout.css';
import Navb2 from './Navb2.jsx';
import Main from './Main.jsx';
import Aside from './Aside.jsx';
import Footer from './Footer.jsx';
const Layout = () => {
    return (
        <>
            <div className="">
                
                <Navb2/>
            </div>
            <div className='container-fluid ' >
                <div className='row'>
                    <div className='col-12 p-0'>
                        <Main/>
                         <Aside/>
                         <Aside/> 
                         <Aside/> 
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
