import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import './Warriors.css';
import { makeStyles } from '@material-ui/core/styles';

// Warrior images
import curry from '/Users/l/my-react-website/src/images/curry.jpg';
import oubre from '/Users/l/my-react-website/src/images/oubre.jpg';
import wiggins from '/Users/l/my-react-website/src/images/wiggins.jpeg';
import green from '/Users/l/my-react-website/src/images/green.jpg';
import wiseman from '/Users/l/my-react-website/src/images/wiseman.jpg';


const useStyles = makeStyles((theme) => ({
    card: {
        justifyContent: 'center'
    },
    media: {
        height: 240
    },
    statsBox: {
        backgroundColor: '#5288a4',
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
        marginBottom: '3rem',
        marginTop: '3rem'
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

const playerName = {
    steph: 'Stephen Curry',
    kelly: 'Kelly Oubre',
    Andrew: 'Andrew Wiggins',
    Draymond: 'Draymond Green',
    James: 'James Wiseman'
}

function WarriorStats() {
    const classes = useStyles()

    const [warrior, setWarrior] = useState(curry)

    const [warriorName, setWarriorName] = useState(playerName.steph)


    // Dot functionality

    //How to undo active class on one div when clicking another div

    const [greyDot, setGreyDot] = useState(true)

    const [greyDotTwo, setGreyDotTwo] = useState(false)

    const [greyDotThree, setGreyDotThree] = useState(false)

    const [greyDotFour, setGreyDotFour] = useState(false)

    const [greyDotFive, setGreyDotFive] = useState(false)

    const toggleClass = () => {
        greyDot ? setGreyDot(false) : setGreyDot(true);
        greyDotTwo ? setGreyDotTwo(false) : setGreyDotTwo(false);
        greyDotThree ? setGreyDotThree(false) : setGreyDotThree(false);
        greyDotFour ? setGreyDotFour(false) : setGreyDotFour(false);
        greyDotFive ? setGreyDotFive(false) : setGreyDotFive(false)
    }

    const toggleClassTwo = () => {
        greyDotTwo ? setGreyDotTwo(false) : setGreyDotTwo(true);
        greyDot ? setGreyDot(false) : setGreyDot(false);
        greyDotThree ? setGreyDotThree(false) : setGreyDotThree(false);
        greyDotFour ? setGreyDotFour(false) : setGreyDotFour(false);
        greyDotFive ? setGreyDotFive(false) : setGreyDotFive(false);
    }

    const toggleClassThree = () => {
        greyDotThree ? setGreyDotThree(false) : setGreyDotThree(true);
        greyDot ? setGreyDot(false) : setGreyDot(false);
        greyDotTwo ? setGreyDotTwo(false) : setGreyDotTwo(false);
        greyDotFour ? setGreyDotFour(false) : setGreyDotFour(false);
        greyDotFive ? setGreyDotFive(false) : setGreyDotFive(false);
    }


    const toggleClassFour = () => {
        greyDotFour ? setGreyDotFour(false) : setGreyDotFour(true);
        greyDot ? setGreyDot(false) : setGreyDot(false);
        greyDotTwo ? setGreyDotTwo(false) : setGreyDotTwo(false);
        greyDotThree ? setGreyDotThree(false) : setGreyDotThree(false);
        greyDotFive ? setGreyDotFive(false) : setGreyDotFive(false);
    }


    const toggleClassFive = () => {
        greyDotFive ? setGreyDotFive(false) : setGreyDotFive(true);
        greyDot ? setGreyDot(false) : setGreyDot(false);
        greyDotTwo ? setGreyDotTwo(false) : setGreyDotTwo(false);
        greyDotThree ? setGreyDotThree(false) : setGreyDotThree(false);
        greyDotFour ? setGreyDotFour(false) : setGreyDotFour(false);
    }

    // useState for Warrior player statistics

    const [warriorPointStats, setWarriorPointStats] = useState('32')

    const [warriorReboundStats, setWarriorReboundStats] = useState('5.5')

    const [warriorAssisStats, setWarriorAssistStats] = useState('5.8')

    // Main function which holds all the other functions

    const setStatsForCurry = () => {
        setWarrior(curry);
        setWarriorPointStats(curryStats.points);
        setWarriorReboundStats(curryStats.rebounds);
        setWarriorAssistStats(curryStats.assists);
        setWarriorName(playerName.steph);
        toggleClass();
    }

    const setStatsForOubre = () => {
        setWarrior(oubre);
        setWarriorPointStats(oubreStats.points);
        setWarriorReboundStats(oubreStats.rebounds);
        setWarriorAssistStats(oubreStats.assists);
        setWarriorName(playerName.kelly);
        toggleClassTwo();
    }

    const setStatsForWiggins = () => {
        setWarrior(wiggins);
        setWarriorPointStats(wigginStats.points);
        setWarriorReboundStats(wigginStats.rebounds);
        setWarriorAssistStats(wigginStats.assists);
        setWarriorName(playerName.Andrew);
        toggleClassThree();
    }

    const setStatsForGreen = () => {
        setWarrior(green);
        setWarriorPointStats(draymondStats.points);
        setWarriorReboundStats(draymondStats.rebounds);
        setWarriorAssistStats(draymondStats.assists);
        setWarriorName(playerName.Draymond);
        toggleClassFour();
    }

    const setStatsForWiseman = () => {
        setWarrior(wiseman);
        setWarriorPointStats(wisemanStats.points);
        setWarriorReboundStats(wisemanStats.rebounds);
        setWarriorAssistStats(wisemanStats.assists);
        setWarriorName(playerName.James);
        toggleClassFive();
    }

    // How to turn off dot when another button is clicked



    return (
        <div>
            <div className='playerImage'>
                <img className='image' id='warriorImage' src={warrior}></img>
            </div>
            <Box className={classes.namePlacement}>
                <h1><span className='namePlacement'>{warriorName}</span></h1>
            </Box>
            <Box className={classes.dotAlign}>
                <span id='dotOne' className={` dot ${greyDot ? 'active' : ''}`}></span>
                <span id='dotTwo' className={` dot ${greyDotTwo ? 'active' : ''}`}></span>
                <span id='dotThree' className={` dot ${greyDotThree ? 'active' : ''}`}></span>
                <span id='dotFour' className={` dot ${greyDotFour ? 'active' : ''}`}></span>
                <span id='dotFive' className={` dot ${greyDotFive ? 'active' : ''}`}></span>
            </Box>
            <div className='buttonPlacement'>
                <button onClick={() => setStatsForCurry()} 
                        className='button' 
                        id='steph' 
                        type='button'>
                Stephen Curry</button>
                <button onClick={() => setStatsForOubre()} 
                        className='button' 
                        id='kelly' 
                        type='button'>
                Kelly Oubre</button>
                <button onClick={() => setStatsForWiggins()} 
                        className='button' 
                        id='andrew' 
                        type='button'>
                Andrew Wiggins</button>
                <button onClick={() => setStatsForGreen()} 
                        className='button' 
                        id='draymond' 
                        type='button'>
                Draymond Green</button>
                <button onClick={() => setStatsForWiseman()} 
                        className='button' 
                        id='james' 
                        type='button'>
                James Wiseman</button>
            </div>
            <Container className={classes.statsBox}>
                <Container className={classes.innerStatsBox}>
                <h1 style={{ color: 'black' }}>PPG: {warriorPointStats}</h1>
                <h1 style={{ color: 'black' }}>RPG: {warriorReboundStats}</h1>
                <h1 style={{ color: 'black' }}>APG: {warriorAssisStats}</h1>
                </Container>
            </Container>
        </div>
    )
}

export default WarriorStats


