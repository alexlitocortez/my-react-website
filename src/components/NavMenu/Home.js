import React from 'react';
import Footer from '../Footer/Footer';
import HeroSection from '../HeroSection/HeroSection';



function Home() {
    return (
        <div>
            <HeroSection />
            <Footer />
        </div>
    )
}

export default Home



// Problems:
// 1. Navmenu covers HeaderContainer (Try to bring NavMenu below header)
// 2. Hamburger menu doesn't show when screen gets small