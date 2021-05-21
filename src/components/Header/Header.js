import React from 'react'
import styled from 'styled-components';
import { SiAFrame } from 'react-icons/si';

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width: 100%;
    padding: 1rem 2rem;
    background: black;
    overflow-x: hidden;
`;

export const HeaderLogo = styled(SiAFrame)`
    width: 60px;
    height: 60px;
    color: #fff;
    position: absolute;
    top: 15px;
    left: 5px;
`;

function Header() {
    return (
        <div>
            <HeaderContainer />
            <HeaderLogo />
        </div>
    )
}

export default Header


