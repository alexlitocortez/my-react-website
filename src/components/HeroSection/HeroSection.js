import React from 'react';
import styled from 'styled-components';
import HeroImageOne from '../images/HeroImageOne.jpeg';
import HeroImageTwo from '../images/HeroImageTwo.jpeg';

const HeroWrapper = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
    z-index: 999;
    position: absolute;
    top: 50px;
`;



function HeroSection() {
    return (
        <div>
            <HeroWrapper />
        </div>
    )
}

export default HeroSection

