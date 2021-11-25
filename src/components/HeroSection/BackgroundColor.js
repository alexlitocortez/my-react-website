
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// Images
import myCharacter from '../../images/caricature.jpg';


function BackgroundColor() {

    return (
        <div id='about' className='wrapper style1'>
            <div className='container'>
                <div className="row">
                    <div className='col-4 col-5-large col-12-medium'>
                        <span className='image fit'><img id='imageOne' src={myCharacter} alt="caricature picture" /></span>
                    </div>
                    <div className='col-8 col-7-large col-12-medium'>
                        <header id='aboutSection'>
                            <h1>Hi, I'm<strong> Alex Cortez</strong>.</h1>
                        </header>
                        <p id='aboutSection' className='paragraph'>I'm a<strong style={{ color: '#3e3e3e' }}> Frontend Developer</strong>.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BackgroundColor



