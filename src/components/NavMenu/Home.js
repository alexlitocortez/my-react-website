import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
import BackgroundColorTwo from '../HeroSection/BackgroundColorTwo';
import BackgroundColorThree from '../HeroSection/BackgroundColorThree';


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
