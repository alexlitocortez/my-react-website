import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import BackgroundColorTwo from '../HeroSection/BackgroundColorTwo';
import BackgroundColorThree from '../HeroSection/BackgroundColorThree';
import Contact from '../NavMenu/Contact';


function Home() {
    return (
        <div>
            <HeroSection />
            <BackgroundColorTwo />
            <BackgroundColorThree />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home
