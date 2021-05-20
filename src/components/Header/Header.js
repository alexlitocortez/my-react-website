import React from 'react'
import styled from 'styled-components';
import { SiAFrame } from 'react-icons/si';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '../Button/Button.js';


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    background: black;
`;

export const HeaderLogo = styled(SiAFrame)`
    width: 60px;
    height: 60px;
    color: #fff;
    position: absolute;
    top: 15px;
    left: 5px;
`;

export const NavLinks = styled(Link)`
    ${NavLink}
    font-style: italic;
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

function Header() {
    return (
        <div>
            <HeaderContainer />
            <HeaderLogo to='/' /> <NavMenu>
                <NavBtn>
                    <Button to='/about' primary='true'>
                        About
                    </Button>
                    <Button to='/projects' primary='true'>
                        Projects
                    </Button>
                    <Button to='/contact' primary='true'>
                        Contact
                    </Button>
                </NavBtn>
            </NavMenu>
        </div>
    )
}

export default Header


