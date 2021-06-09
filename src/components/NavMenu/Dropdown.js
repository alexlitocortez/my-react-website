import React from 'react';
import styled from 'styled-components';
import { navData } from '../data/NavData';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';


const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #cd853f;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({open}) => (open ? '1' : '0' )};
    top: ${({open}) => (open ? '0' : '-100%' )};
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
    margin-bottom: 50px;

    &:hover {
        color: #000d1a;
    }
`;

const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

const CloseIcon = styled(FaTimes)`
    color: #000d1a;
`;

const Dropdown = ({open, toggle}) => {

    return (
        <DropdownContainer open={open} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon onClick={toggle}/>
            </Icon>
            <DropdownMenu>
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