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
                    
                    <a href='https://twitter.com/sufitogoofies' target='_blank'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    
                    <a href='https://www.linkedin.com/in/amcortez92/' target='_blank'>
                        <i className='fab fa-linkedin'></i>
                    </a>

                    <a href='https://github.com/alexthegreat650' target='_blank'>
                        <i className='fab fa-github'></i>
                    </a>
            </div>
            <div className='copyright'>Copyright © 2021 Alex Cortez. All rights reserved.</div>
        </div>
    )
}

export default Footer
