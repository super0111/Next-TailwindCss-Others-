import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout =({children}: { children: React.ReactNode }) =>{
    return(
        <div>
          <Navbar />
            <main>{children}</main>
          <Footer />
        </div>
    )
}

export default Layout;