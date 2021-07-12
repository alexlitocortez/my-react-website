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
    const classes = useStyles()

    return (                
        <div>
            <head>
                <meta charSet='UTF-8'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            </head>
            <body>
                <ImageAndText />
                <Container className={classes.textAlign}>
                    <span id={styles['dotOne']} class={styles.dot}></span>
                    <span id={styles['dotTwo']} class={styles.dot}></span>
                    <span id={styles['dotThree']} class={styles.dot}></span>
                    <span id={styles['dotFour']} class={styles.dot}></span>
                    <span id={styles['dotFive']} class={styles.dot}></span>
                </Container>
                <Container className={classes.statsBox}>
                    <Container className={classes.innerStatsBox}>
                    <h1>PPG: <span id={styles['ppg']}></span></h1>
                    <h1>RPG: <span id={styles['rpg']}></span></h1>
                    <h1>APG: <span id={styles['apg']}></span></h1>
                    </Container>
                </Container>
            </body>
        </div>
    )
}

export default Warriors


// 1. Fix image problems (image works when i put it into variable. EX. src={green})


// How to use useState to access array of images and loop through them while displaying them

//Use useState it this doesn't work
