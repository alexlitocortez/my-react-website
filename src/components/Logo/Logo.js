import React from 'react';
import styled from 'styled-components';
import myCharacter from '../../images/caricature.jpg';
import { Link } from 'react-router-dom';
import NavMenu from '../NavMenu/NavMenu';
import './Logo.css';
import { HashLink } from 'react-router-hash-link';


const LogoContainer = styled.div`
    background-color: #282828;
    text-align: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10000;
    cursor: default;
    height: 3.5em;
    line-height: 3.5em;

    ul {
        margin-bottom: 0;
        list-style: none;
        padding-left: 0;
    }

    li {
        display: inline-block;
        padding-left: 0;
    }

    a {
        -moz-transition: background-color .2s ease-in-out;
        -webkit-transition: background-color .2s ease-in-out;
        -ms-transition: background-color .2s ease-in-out;
        transition: background-color .2s ease-in-out;
        position: relative;
        display: block;
        color: #fff;
        text-decoration: none;
        outline: 0;
        font-weight: 600;
        border-radius: 8px;
        color: #fff;
        height: 2.5em;
        line-height: 2.5em;
        padding: 0 1.25em;
    }

    a:hover {
        color: #fff !important;
        background: #383838;
    }

    a.active {
        background: #484848;
    }

    a.active:before {
        content: '';
        display: block;
        position: absolute;
        bottom: -0.6em;
        left: 50%;
        margin-left: -0.75em;
        border-left: solid 0.75em transparent;
        border-right: solid 0.75em transparent;
        border-top: solid 0.6em #282828;
    }
`;


function Logo() {
    return (
        <div>
            <LogoContainer className='logoContainer'>
                <ul className='container'>
                    <li><HashLink smooth to ='/#about'>About</HashLink></li>
                    <li><HashLink smooth to='/#projects'>Projects</HashLink></li>
                    <li><HashLink smooth to='/#blog'>Blog</HashLink></li>
                    <li><HashLink smooth to='/#contact'>Contact</HashLink></li>
                </ul>
            </LogoContainer>
        </div>
    )
}

export default Logo
