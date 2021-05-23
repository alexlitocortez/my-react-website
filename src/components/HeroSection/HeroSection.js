import React from 'react';
import styled from 'styled-components';


const Hero = styled.section`
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

const HeroWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;

const HeroImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
`;

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    max-width: 1600px;
    width: calc(100% -100px);
    color: white;

    h1 {
        font-size: clamp(1rem, 8vw, 2rem);
        font-weight: 400;
        text-transform: uppercase;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
        text-align: left;
        margin-bottom: 0.8rem;
        color: black;
    }

    p {
        margin-bottom: 1.2rem;
        text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    }
`;


function HeroSection() {
    return (
        <div>
            <Hero>
                <HeroWrapper>
                        <HeroContent>
                            <h1>
                                It me
                            </h1>
                            <p>
                                Make it happen!
                            </p>
                        </HeroContent>
                </HeroWrapper>
            </Hero>
        </div>
    )
}

export default HeroSection


