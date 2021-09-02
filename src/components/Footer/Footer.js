import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import myCharacter from '../../images/caricature.jpg';

function Footer() {
    return (
        <div className='footer-container'>
            <img src={myCharacter} className='logoImage'></img>
            <div className='email'>alexlitocortez@gmail.com</div>
            <div className='footer-link-items'>
                    <Link
                    to='/'
                    target='_blank'
                    aria-label='Twitter'
                    >
                        <i className='fab fa-twitter'></i>
                    </Link>
                    <Link
                    to='/'
                    target='_blank'
                    aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin'></i>
                    </Link>
                    <Link
                    to='/'
                    target='_blank'
                    aria-label='Github'
                    >
                        <i className='fab fa-github'></i>
                    </Link>
            </div>
            <div className='copyright'>Copyright © 2021 Alex Cortez. All rights reserved.</div>
        </div>
    )
}

export default Footer
