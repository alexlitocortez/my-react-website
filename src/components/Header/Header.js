import React from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import myCharacter from './../../images/caricature.jpg';
import { Link } from 'react-router-dom';


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

function Header() {
    return (
        <div>
            <HeaderContainer>
                <img src={myCharacter} alt='caricature of myself as the logo'></img>
            </HeaderContainer>
            <MenuBars />
        </div>
    )
}

<li><Link to='/about'>About</Link></li>


export default Header
