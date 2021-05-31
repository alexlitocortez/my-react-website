import React from 'react';
import styled from 'styled-components';
import { navData } from '../data/NavData';
import { Link } from 'react-router-dom';
import { bool } from 'prop-types';


const DropdownContainer = styled.div`
    display: none;

    @media screen and (max-width: 768px) {

    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    }
    transform: ${({ Open }) => Open ? 'translateX(0)' : 'translateX(-100%)'};
`;


const DropdownMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 80px);
    text-align: center;
    margin-bottom: 4rem;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4, 60px);
    }
`;


const DropdownLink = styled(Link)`
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;

    &:hover {
        color: #000d1a;
    }
`;


const Dropdown = ({ open }) => {

    return (
        <DropdownContainer >
                <DropdownMenu open={open}>
                    {navData.map((item, index) => (
                        <DropdownLink to={item.link} key={index}>
                            {item.title}
                        </DropdownLink>
                    ))}
                </DropdownMenu>
                
        </DropdownContainer>
    )
}

export default Dropdown