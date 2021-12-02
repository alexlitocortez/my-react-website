import React from 'react';
import { FaBars } from 'react-icons/fa';
import { bool, func } from 'prop-types';
import styled from 'styled-components';

const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${FaBars});
        background-size: contain;
        height: 30px;
        width: 40px;
        color: grey;
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 10px;

        &:hover {
            opacity: 0.3;
            transition: 0.2s ease-in-out;
        }
    }
`;


function Hamburger({ open, setOpen }) {

    return (
        <div>
            <MenuBars open={open} onClick={() => setOpen(!open)} />
        </div>
    )
}

Hamburger.propTypes = {
    open: bool.isRequired,
    setOpen: func.isRequired
}

export default Hamburger
