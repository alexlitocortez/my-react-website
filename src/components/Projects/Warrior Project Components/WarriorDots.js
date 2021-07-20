import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import './WarriorDots.css';

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

function WarriorDots() {

    const [greyDot, changeGreyDot] = useState({
        activeObject: null,
        objects: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}]
    })

    const setStatsForCurry = () => {
    }
    
    const setStatsForOubre = () => {
    }
    
    const setStatsForWiggins = () => {
    }
    
    const setStatsForGreen = () => {
    }
    
    const setStatsForWiseman = () => {
    }

    const classes = useStyles()

    function toggleActive(index) {
        changeGreyDot({...greyDot, activeObject: greyDot.objects[index] })
    }

    function toggleActiveStyles(index) {

        if (greyDot.objects[index] === greyDot.activeObject) {
            return 'dot active'
        } else {
            return 'dot inactive'
        }
    }

    return (
        <div>
            <Box className={classes.buttonPlacement}>
                <button onClick={() => setStatsForCurry()} className='button' id='steph' type='button'>Stephen Curry</button>
                <button onClick={() => setStatsForOubre()} className='button' id='kelly' type='button'>Kelly Oubre</button>
                <button onClick={() => setStatsForWiggins()} className='button' id='andrew' type='button'>Andrew Wiggins</button>
                <button onClick={() => setStatsForGreen()} className='button' id='draymond' type='button'>Draymond Green</button>
                <button onClick={() => setStatsForWiseman()} className='button' id='james' type='button'>James Wiseman</button>
            </Box>
            <div>
                {greyDot.objects.map((elements, index) => (
                    <div key={index} className={toggleActiveStyles(index)} onClick={() => {
                        toggleActive(index)
                    }}>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WarriorDots


