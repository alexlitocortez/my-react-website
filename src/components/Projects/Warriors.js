import React from 'react';
import './Warriors.css';
import { WarriorFunction } from './WarriorFunction';

function Warriors() {
    WarriorFunction()
    
    return (
        <div>
            <head>
                <meta charSet='UTF-8'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            </head>
            <body>
                <img id='getImage' className='fade' src='curry.jpg' alt='Stephen Curry' width='600' height='400'></img>
                <div className="stats">
                    <h1>PPG: <span id="ppg"></span></h1>
                    <h1>RPG: <span id="rpg"></span></h1>
                    <h1>APG: <span id="apg"></span></h1>
                </div>
                <div className="slideshow-container">
                    <h1><span id="thisone">Stephen Curry</span></h1>
                    <button type='button' id='button' className='button'>CHANGE PLAYER</button>
                </div>
                <br></br>
                <div className="text-align" id="text-align">
                    <span id="dotOne" class="dot"></span>
                    <span id="dotTwo" class="dot"></span>
                    <span id="dotThree" class="dot"></span>
                    <span id="dotFour" class="dot"></span>
                    <span id="dotFive" class="dot"></span>
                </div>
            </body>
        </div>
    )
}

export default Warriors