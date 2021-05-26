import React from 'react';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import myCharacter from './../../images/caricature.jpg';
import Footer from '../Footer/Footer';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 1rem 2rem;
    background: black;
    overflow-x: hidden;
`;

export const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${FaBars});
        background-size: contain;
        height: 30px;
        width: 40px;
        color: white;
        cursor: pointer;
        position: absolute;
        top: 10px;
        right: 0;
        transform: translateY(-50%, 25%);
    }
`;

function Home() {
    return (
        <div>
            <HeaderContainer>
                <img src={myCharacter} alt='caricature of myself as the logo'></img>
            </HeaderContainer>
            <Footer />
        </div>
    )
}

export default Home


// Problems:
// 1. Navmenu covers HeaderContainer (Try to bring NavMenu below header)
// 2. Hamburger menu doesn't show when screen gets small