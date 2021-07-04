import React from 'react';
import styled from 'styled-components';
import { FaTimes } from 'react-icons/fa';
import { saaSData } from '../data/SaaSData';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

const DropdownContainer = styled.div`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #696969;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({open}) => (open ? `1` : '0' )};
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

const DropdownDashboard = ({open, toggle}) => {

    return (
        <DropdownContainer open={open} onClick={toggle} >
            <Icon onClick={toggle} >
                <CloseIcon onClick={toggle}/>
            </Icon>
            <DropdownMenu>
                {saaSData.map((item, index) => (
                    <Typography tp={item.link} key={index}>
                        {item.title}
                    </Typography>
                ))}
            </DropdownMenu>
        </DropdownContainer>
    )
}

export default DropdownDashboard    