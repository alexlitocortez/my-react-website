import React, { useState } from 'react';
import styles from './warriors.module.css';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import ImageAndText from './Warrior Project Components/ImageAndText';


const useStyles = makeStyles((theme) => ({
    playerImage: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        height: '600px',
        width: '600px'
    },
    namePlacement: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttonPlacement: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '2rem'
    },
    textAlign: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '2rem'
    },
    statsBox: {
        backgroundColor: '#152238',
        marginTop: '2rem',
        borderRadius: '10px',
        height: '400px'
    },
    innerStatsBox: {
        backgroundColor: 'rgba(255, 255, 255, .15)',
        backdropFilter: 'blur(5px)',
        borderRadius: '10px',
        position: 'relative',
        top: '2rem',
        height: '320px',
        color: 'white'
    }
}))

function Warriors() {

    

    const handleClick = () => {
        if(document.getElementById('kelly') == 'clicked') {
            document.getElementById('ppg').innerHTML = '17';
            document.getElementById('rpg').innerHTML = '5';
            document.getElementById('apg').innerHTML = '3';
        }
    }

    const classes = useStyles()

    return (                
        <div>
            <head>
                <meta charSet='UTF-8'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            </head>
            <body>
                <ImageAndText />
            </body>
        </div>
    )
}



export default Warriors


// 1. Fix image problems (image works when i put it into variable. EX. src={green})


// How to use useState to access array of images and loop through them while displaying them

//Use useState it this doesn't work
