import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { BsCodeSlash } from 'react-icons/bs';
import BackgroundColorOne from './BackgroundColorOne.js';
import './HeroSection.css';
import BackgroundColorTwo from './BackgroundColorTwo';
import BackgroundColorThree from './BackgroundColorThree';
import BackgroundColor from './BackgroundColor.js';
import Section from '/Users/l/my-react-website/src/components/HeroSection/Section.js';


const CodingImage = styled(BsCodeSlash)`
    display: flex;
    justifyContent: center;
    alignItems: center;
    position: relative;
    background-image: url(${BsCodeSlash});
    height: 50px;
    width: 40px;
`;

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: '#fff',
        height: '300px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem',
    },
    card: {
        width: '400px',
        height: '600px',
        position: 'relative',
        bottom: '15rem',
        fontSize: '12px',
        padding: '70px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
            width: '410px',
    },
    }
}))

function HeroSection() {
    const classes = useStyles();

    return (
        <div>
            <BackgroundColor />
            <BackgroundColorOne />
            <div className={classes.hero}>
                <Section />
            </div>
        </div>
    )
}

export default HeroSection