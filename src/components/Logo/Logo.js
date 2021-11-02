import React from 'react';
import styled from 'styled-components';
import myCharacter from '../../images/caricature.jpg';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import { NavLink } from 'react-router-dom';
import './Logo.css';


const LogoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 80px;
    width: 100%;
    padding: 1rem 2 rem;
    background: black;
    margin: 0;
    padding: 0;
    background-color: #5288a4;
`;

const LogoImage = styled.div`
    display: flex;
    width: 75px;
    height: 75px;
    position: relative;
    top: 5px;
    left: 5px;
    text-decoration: none;
`;

const LogoText = styled.div`
    display: flex;
    text-decoration: none;
    letter-spacing: 1.75px;
    text-transform: uppercase;
    font-size: 0.75rem; 
    color: white;
    margin: 0 20px;
    margin-top: 2rem;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const NavMenuArea = styled.div`
    display: flex;
    position: relative;
    bottom: 45px;
    color: white;

    li {
        display: inline-block;
        color: white;
        width: 1rem;
        height: 1rem;
        position: relative;
        left: 0;
    }

    a {
        color: #fff;
        text-decoration: none;
        font-size: 1.5rem;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;
        letter-spacing: 1.75px;
        text-transform: uppercase;
        margin-left: 80rem;
    }

    a:hover {
        opacity: 0.3;
        transition: fill 0.25s;
    }

    @media screen and (max-width: 768px) {
        display: none;
    }
`;




function Logo() {
    return (
        <div>
            <LogoContainer>
                    <Link to='/'>
                    <LogoImage>
                        <img src={myCharacter} style={{ borderRadius: 90, cursor: 'pointer' }} alt='logo'></img>
                    </LogoImage>
                    </Link>
                    <LogoText>
                        Alex Cortez
                    </LogoText>
            </LogoContainer>
        </div>
    )
}

export default Logo
