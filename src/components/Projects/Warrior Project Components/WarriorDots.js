import React from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import './WarriorStats.css';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles((theme) => ({
    dotAlign: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        right: '10px',
        marginBottom: '3rem'
    },
    buttonPlacement: {
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center',
        marginTop: '2rem'
    }
}))

const setStatsForCurry = () => {
    toggleSwitch();
}

const setStatsForOubre = () => {
    toggleSwitch();
}

const setStatsForWiggins = () => {
    toggleSwitch();
}

const setStatsForGreen = () => {
    toggleSwitch();
}

const setStatsForWiseman = () => {
    toggleSwitch();
}

const toggleSwitch = () => {
    greyDot ? setGreyDot(false) : setGreyDot(true);
    console.log('it works')
}


function WarriorDots() {
    const classes = useStyles()

    return (
        <div>
            <Box className={classes.dotAlign}>
                <span id='dontOne' className={ `${classes.dot} ${greyDot ? 'greyout' : 'dot' }`}></span>
                <span id='dotTwo' className='dot'></span>
                <span id='dotThree' className='dot'></span>
                <span id='dotFour' className='dot'></span>
                <span id='dotFive' className={ `${classes.dot} ${greyDot ? 'greyout' : 'dot' }`}></span>
            </Box>
            <Box className={classes.buttonPlacement}>
                <button onClick={() => setStatsForCurry()} className='button' id='steph' type='button'>Stephen Curry</button>
                <button onClick={() => setStatsForOubre()} className='button' id='kelly' type='button'>Kelly Oubre</button>
                <button onClick={() => setStatsForWiggins()} className='button' id='andrew' type='button'>Andrew Wiggins</button>
                <button onClick={() => setStatsForGreen()} className='button' id='draymond' type='button'>Draymond Green</button>
                <button onClick={() => setStatsForWiseman()} className='button' id='james' type='button'>James Wiseman</button>
            </Box>
        </div>
    )
}

export default WarriorDots


