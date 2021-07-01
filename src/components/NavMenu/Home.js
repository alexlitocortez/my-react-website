import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';




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