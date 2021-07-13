import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import './ImageAndText.css';
import { makeStyles } from '@material-ui/core';


// Warrior images
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
        justifyContent: 'space-around',
        textAlign: 'center',
        marginTop: '2rem'
    },
    card: {
        justifyContent: 'center'
    },
    media: {
        height: 240
    },
    image: {
        margin: 'auto',
        width: 600,
        padding: '10px',
        height: 400,
        justifyContent: 'center',
        alignItems: 'center'
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


const title = React.createElement('h1')

function ImageAndText() {

    const [warrior, setWarrior] = useState(curry)

    const [warriorPointStats, setWarriorPointStats] = useState('32')

    const [warriorReboundStats, setWarriorReboundStats] = useState('5.5')

    const [warriorAssisStats, setWarriorAssistStats] = useState('5.8')

    const title = () => {
        title.innerHTML = 'PPG: 17';
        title.innerHTML = 'RPG: 5';
        title.innerHTML = 'APG: 5';
    }

    // Figure out how to call this function alongside another onclick function below
    // Then figure out how to insert the dynamic text inside the div when called

    const classes = useStyles()

    return (
        <div>
            <Container className={classes.playerImage}>
                <img className={classes.image} src={warrior}></img>
            </Container>
            <Box className={classes.buttonPlacement}>
            <button onClick={() => setWarrior(curry)} className='button' id='steph' type='button'>Stephen Curry</button>
            <button onClick={() => setWarrior(oubre)} className='button' id='kelly' type='button'>Kelly Oubre</button>
            <button onClick={() => setWarrior(wiggins)} className='button' id='andrew' type='button'>Andrew Wiggins</button>
            <button onClick={() => setWarrior(green)} className='button' id='draymond' type='button'>Draymond Green</button>
            <button onClick={() => setWarrior(wiseman)} className='button' id='james' type='button'>James Wiseman</button>
            </Box>
            <Container className={classes.statsBox}>
                <Container className={classes.innerStatsBox}>
                <h1>PPG:{warriorPointStats}</h1>
                <h1>RPG:{warriorReboundStats}</h1>
                <h1>APG:{warriorAssisStats}</h1>
                </Container>
            </Container>
        </div>
    )
}

export default ImageAndText


// When I click button create element with dynamic text