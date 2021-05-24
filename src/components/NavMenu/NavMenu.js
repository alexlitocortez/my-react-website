import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const NavContainer = styled.section`
    display: flex;
    justify-content: space-between;
    height: 50px;
    background: black;
    padding: 1rem 2rem;
    z-index: 1000;
    position: fixed;
    width: 100%;
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
        <div>
            <NavContainer>
                <NavMenuArea>
                    <ul>
                        <li><Link to='/about.js'>About</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/projects'>Projects</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </NavMenuArea>
            </NavContainer>
        </div>
    );
};

export default NavMenu
