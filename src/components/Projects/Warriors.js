import React, { useState } from 'react';
import styles from './warriors.module.css';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import curry from '/Users/l/my-react-website/src/images/curry.jpg';
import oubre from '/Users/l/my-react-website/src/images/oubre.jpg';
import wiggins from '/Users/l/my-react-website/src/images/wiggins.jpeg';
import green from '/Users/l/my-react-website/src/images/green.jpg';
import wiseman from '/Users/l/my-react-website/src/images/wiseman.jpg';


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

    const [warriorPlayer, setWarriorPlayer] = useState(curry)

    const warriorImages = [
        {
            curry,
            oubre,
            wiggins,
            green,
            wiseman
        }
    ]

    const handleClick = () => {
        setWarriorPlayer(warriorImages.map())
    }


    function imageHelper() {

    }



    function addOne() {
        var input = ["Stephen Curry", "Kelly Oubre", "Andrew Wiggins", "Draymond Green", "James Wiseman"];
        if(counter == input.length)
        if(counter == images.length)
        counter = 0;
        header.innerHTML = input[counter];
        image.src = images[counter];
        counter++;
    }

    const classes = useStyles()

    return (                
        <div>
            <head>
                <meta charSet='UTF-8'></meta>
                <meta name='viewport' content='width=device-width, initial-scale=1.0'></meta>
            </head>
            <body>
                <Container className={classes.playerImage}>
                <img src={imageHelper} className={styles.fade} id='imageBox' alt='Warriors player' style={{ maxWidth: 600, maxHeight: 600 }}></img>
                </Container>
                <Container className={classes.namePlacement}>
                    <h1><span id={styles['thisone']}>Stephen Curry</span></h1>
                </Container>
                <Box className={classes.buttonPlacement}>
                    <button onClick={handleClick} type='button' className={styles.button} id='button'>Change Player</button>
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


// 1. Fix image problems (image works when i put it into variable. EX. src={green})


// How to use useState to access array of images and loop through them while displaying them

//Use useState it this doesn't work
