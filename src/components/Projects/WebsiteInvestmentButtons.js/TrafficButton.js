import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core';
import TrafficCard from './TrafficCard';
import { display } from '@material-ui/system';



const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        cursor: 'pointer',
        color: '#3f51b5',
        backgroundColor: 'white',
        padding: '10px',
        borderRadius: '10%',
        outline: 'none',
        borderColor: '#3f51b5',
        '&:hover': {
            padding: '12px',
            transition: '0.3s'
        },
    buttonDisappear: {
        display: 'none'
    }
    }
}))

function TrafficButton() {
    const classes = useStyles();

    const [showTrafficChart, setShowTrafficChart] = useState(false)

    const toggleTrafficChart = () => {
        showTrafficChart ? setShowTrafficChart(false) : setShowTrafficChart(true)
    }

    const [buttonDisappear, setButtonDisappear] = useState(false)

    const toggleButtonDisappear = () => {
        buttonDisappear ? setButtonDisappear(false) : setButtonDisappear(true)
    }

    return (
        <div>
            <button className={classes.buttonStyle} id='trafficButton' onClick={toggleTrafficChart}
            >Show Traffic</button>
            {
                showTrafficChart ? <TrafficCard /> : null
            }
        </div>
    )
}

export default TrafficButton

// 2 things need to happen when button is clicked:
// 1. button needs to disappear
// 2. card component needs to appear

