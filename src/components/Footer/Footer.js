import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-link-items'>
                <Link to='/'>
                    Twitter
                </Link>
                <Link to='/'>
                    LinkedIn
                </Link>
                <div className='social-media-icons'>
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
                </div>
            <h2>
                Alex Cortez 2021
            </h2>
            </div>
        </div>
    )
}

export default Footer
