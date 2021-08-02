import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    card: {
        width: '400px',
        height: '350px',
        padding: '70px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
            width: '410px'
        }
    }
}))


function Home() {
    
    const classes = useStyles();

    return (
        <div>
            <HeroSection />
            <Footer />
        </div>
    )
}

export default Home
