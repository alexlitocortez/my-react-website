import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavContainer = styled.section`
    display: flex;
    flex-direction: column;
    height: 50px;
    background: black;
    padding: 1rem 2rem;
    margin: 0;
`;

const NavMenuArea = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    li {
        display: inline;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-size: 24px;
        align-items: center;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
    }

    a:hover {
        opacity: 0.3;
        transition: fill 0.25s;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;



function NavMenu() {
    return (
        <nav>
        <div>
            <NavContainer>
                <NavMenuArea>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/projects'>Projects</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul>
                </NavMenuArea>
            </NavContainer>
        </div>
        </nav>
    );
};

export default NavMenu


