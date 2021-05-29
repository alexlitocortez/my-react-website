import React from 'react';
import myCharacter from './../../images/caricature.jpg';
import styled from 'styled-components';


export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 80px;
    width: 100%;
    padding: 1rem 2 rem;
    background: black;
`;

function Header() {

    return (
        <div>
            <HeaderContainer>
                <img src={myCharacter} style={{ borderRadius: 90 }}></img>
            </HeaderContainer>
        </div>
    )
}


export default Header

