import React from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer';
import NavMenu from './NavMenu';

function Home() {
    return (
        <div>
            <Header />
            <Footer />
        </div>
    )
}

export default Home


// Problems:
// 1. Navmenu covers HeaderContainer (Try to bring NavMenu below header)
// 2. Hamburger menu doesn't show when screen gets small