import React from 'react';
import myCharacter from './../../images/caricature.jpg';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 80px;
    width: 100%;
    padding: 1rem 2 rem;
    background: black;
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

function Header() {
    return (
        <div>
            <HeaderContainer>
                <img src={myCharacter} style={{ borderRadius: 90 }}></img>
            </HeaderContainer>
            <MenuBars />
        </div>
    )
}


export default Header

// Header is right