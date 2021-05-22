import React from 'react';
import styled from 'styled-components';


const HeroWrapper = styled.section`
    height: 100vh;
    max-height: 1100px;
    position: relative;
    overflow: hidden;
    z-index: 999;
    position: absolute;
    top: 50px;

    img {
        width: 100vw;
        height: 100vh;
        position: relative;
        top: 60px;
        object-fit: cover;
    }
`;

function HeroSection() {
    return (
        <div>
            <HeroWrapper>
                <img src='src/images/HeroImageOne.jpeg' alt='Marin hiking' />
            </HeroWrapper>
        </div>
    )
}

export default HeroSection


