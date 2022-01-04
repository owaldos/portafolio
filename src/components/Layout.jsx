import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import './Layout.css'


const Layout = () => {
    return (
        <BrowserRouter>
           <div className="row box-primary">
                <nav className=" col-12 nav">
                    nav
                </nav>
                <main className=" col-sm-12 col-md-9 col-lg-8 main">
                    main
                </main>
                <aside className=" col-sm-12 col-md-3 col-lg-4 aside"> 
                    aside
                </aside>
                <footer className=" col-12 footer">
                    footer
                </footer>
           </div>
        </BrowserRouter>
    )
}

export default Layout
