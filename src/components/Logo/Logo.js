import React from 'react';
import styled from 'styled-components';
import myCharacter from '../../images/caricature.jpg';
import { Link } from 'react-router-dom';


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
`;

const LogoImage = styled.div`
    display: flex;
    width: 75px;
    height: 75px;
    position: relative;
    top: 5px;
    left: 5px;
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
            </LogoContainer>
        </div>
    )
}

export default Logo


