import React from 'react';
import styled from 'styled-components';
import { menuData } from '../../data/NavData';
import { Link } from 'react-router-dom';

const DropdownContainer = styled.div`
    position: fixed,
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
`;



