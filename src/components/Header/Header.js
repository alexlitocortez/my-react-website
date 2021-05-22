import React from 'react'
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import myImage from '../src/caricature.jpg';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 1rem 2rem;
    background: black;
    overflow-x: hidden;
`;

export const HeaderLogo = styled(myImage)`
    width: 60px;
    height: 60px;
    color: #fff;
    position: absolute;
    top: 15px;
    left: 5px;
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
            <HeaderContainer />
            <HeaderLogo />
            <MenuBars />
        </div>
    )
}

export default Header
