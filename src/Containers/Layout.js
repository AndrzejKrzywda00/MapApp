import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Main from "./Main";

const Layout =({children}) => {

    return (
        <>
            <Navbar/>
            <Main>
                {children}
            </Main>
            <Footer/>
        </>
    );

}

export default Layout;