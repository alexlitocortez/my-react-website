import React from 'react';
import styles from './warriors.module.css';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { WarriorFunction } from './WarriorFunction';

const useStyles = makeStyles((theme) => ({
    playerImage: {
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
    const classes = useStyles();

    WarriorFunction()

    return (
        <div>
            <head>
                <meta charSet='UTF-8'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            </head>
            <body>
                <img id={styles['getImage']} className={styles.fade} src='curry.jpg' alt='Stephen Curry' width='600' height='400'>

                </img>
                <Container className={classes.playerImage}>
                    <h1><span id={styles['thisone']}>Stephen Curry</span></h1>
                </Container>
                <Box className={classes.buttonPlacement}>
                    <button type='button' className={styles.button}>CHANGE PLAYER</button>
                </Box>
                <br></br>
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