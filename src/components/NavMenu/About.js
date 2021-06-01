import React from 'react';
import styled from 'styled-components';
import '../../images/HeroImageOne.jpeg';


const AboutSection = styled.div`
    display: grid;
    grid-template-columns: 2fr;
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;

function About() {
    return (
        <div>
            <AboutSection>

            </AboutSection>
        </div>
    );
}


export default About
