import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core';
import TrafficCard from '../Metric Cards/TrafficCard';
import './TrafficButton.css';

const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#7510F7',
        fontSize: '14px',
        fontFamily: 'sans-serif',
        textTransform: 'capitalize',
        width: '8em',
        height: '5em',
        padding: '10px',
        marginBottom: '3rem',
        borderRadius: '10%',
        outline: 'none',
        borderColor: '#3f51b5',
        '&:hover': {
            padding: '14px',
            transition: '0.3s',
            transform: 'translateX(1em)'
        },
    inactive: {
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

    const [show, setShow] = useState(true)

    const onClick = () => {
        show ?  setShow(document.getElementById('close').classList.toggle('inactive')) : setShow(false)
    }


    return (
        <div>
            <button id='close' className={classes.buttonStyle} onClick={() => {
                toggleTrafficChart();
                onClick();
                }}
            >Show Traffic</button>
            {
                showTrafficChart ? <TrafficCard /> : null
            }
        </div>
    )
}

export default TrafficButton


// Why does trafficbutton render one more button when I close the traffic chart

