import { bool, func } from 'prop-types';
import React from 'react'
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

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

        &:hover {
            opacity: 0.3;
            transition: 0.2s ease-in-out;
        }
    }
`;

const Hamburger = (isOpen, setIsOpen) => {
    return (
        <div>
            <MenuBars isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}></MenuBars>
        </div>
    )
}

Hamburger.propTypes = {
    isOpen: bool.isRequired,
    setIsOpen: func.isRequired
}

export default Hamburger
