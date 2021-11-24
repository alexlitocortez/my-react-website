import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import BackgroundColorTwo from '../HeroSection/BackgroundColorTwo';
import BackgroundColorThree from '../HeroSection/BackgroundColorThree';
import Contact from '../NavMenu/Contact';
import BackgroundColor from '../HeroSection/BackgroundColor';
import Blog from '/Users/l/my-react-website/src/components/NavMenu/Blog.js';


function Home() {
    return (
        <div>
            <HeroSection />
            <BackgroundColorTwo />
            <BackgroundColorThree />
            <Footer />
        </div>
    )
}

export default Home

