import React, {useState, useEffect} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import styles from './WarriorStats.module.css';
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
    },
    dot: {
        cursor: 'pointer',
        height: '15px',
        width: '15px',
        margin: '0 2px',
        backgroundColor: 'darkgray',
        borderRadius: '50%',
        display: 'block'
    },
    dotAlign: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        right: '10px',
        marginBottom: '3rem'
    }
}))

const curryStats = {
    points: '32.0',
    rebounds: '5.5',
    assists: '5.8'
}

const oubreStats = {
    points: '15.4',
    rebounds: '6',
    assists: '1.3'
}

const wigginStats = {
    points: '18.6',
    rebounds: '4.9',
    assists: '2.4'
}

const draymondStats = {
    points: '7.0',
    rebounds: '7.1',
    assists: '8.9'
}

const wisemanStats = {
    points: '11.5',
    rebounds: '5.8',
    assists: '0.7'
}



function WarriorStats() {

    const [warrior, setWarrior] = useState(curry)

    const [warriorPointStats, setWarriorPointStats] = useState('32')

    const [warriorReboundStats, setWarriorReboundStats] = useState('5.5')

    const [warriorAssisStats, setWarriorAssistStats] = useState('5.8')

    const [greyDot, setGreyDot] = useState({
        activeObject: null,
        objects: [{id: 'dotOne'}, {id: 'dotTwo'}, {id: 'dotThree'}, {id: 'dotFour'}, {id: 'dotFive'}]
    })

    const setStatsForCurry = () => {
        setWarrior(curry);
        setWarriorPointStats(curryStats.points);
        setWarriorReboundStats(curryStats.rebounds);
        setWarriorAssistStats(curryStats.assists);
    }

    const setStatsForOubre = () => {
        setWarrior(oubre);
        setWarriorPointStats(oubreStats.points);
        setWarriorReboundStats(oubreStats.rebounds);
        setWarriorAssistStats(oubreStats.assists);
    }

    const setStatsForWiggins = () => {
        setWarrior(wiggins);
        setWarriorPointStats(wigginStats.points);
        setWarriorReboundStats(wigginStats.rebounds);
        setWarriorAssistStats(wigginStats.assists);
    }

    const setStatsForGreen = () => {
        setWarrior(green);
        setWarriorPointStats(draymondStats.points);
        setWarriorReboundStats(draymondStats.rebounds);
        setWarriorAssistStats(draymondStats.assists);
    }

    const setStatsForWiseman = () => {
        setWarrior(wiseman);
        setWarriorPointStats(wisemanStats.points);
        setWarriorReboundStats(wisemanStats.rebounds);
        setWarriorAssistStats(wisemanStats.assists);
    }


    // How to turn off dot when another button is clicked

    const classes = useStyles()

    return (
        <div>
            <Container className={classes.playerImage}>
                <img className={classes.image} id='warriorImage' src={warrior}></img>
            </Container>
            <Box className={classes.dotAlign}>
                <span id='dotOne' className='dot'></span>
                <span id='dotTwo' className='dot'></span>
                <span id='dotThree' className='dot'></span>
                <span id='dotFour' className='dot'></span>
                <span id='dotFive' className='dot'></span>
            </Box>
            <Box className={classes.buttonPlacement}>
            <button onClick={() => setStatsForCurry()} className={styles.button} id='steph' type='button'>Stephen Curry</button>
            <button onClick={() => setStatsForOubre()} className={styles.button} id='kelly' type='button'>Kelly Oubre</button>
            <button onClick={() => setStatsForWiggins()} className={styles.button} id='andrew' type='button'>Andrew Wiggins</button>
            <button onClick={() => setStatsForGreen()} className={styles.button} id='draymond' type='button'>Draymond Green</button>
            <button onClick={() => setStatsForWiseman()} className={styles.button} id='james' type='button'>James Wiseman</button>
            </Box>
            <Container className={classes.statsBox}>
                <Container className={classes.innerStatsBox}>
                <h1>PPG: {warriorPointStats}</h1>
                <h1>RPG: {warriorReboundStats}</h1>
                <h1>APG: {warriorAssisStats}</h1>
                </Container>
            </Container>
        </div>
    )
}

export default WarriorStats


// CSS applies to whole app need to fix this
// button onClick to trigger color switch and correspond with dot
