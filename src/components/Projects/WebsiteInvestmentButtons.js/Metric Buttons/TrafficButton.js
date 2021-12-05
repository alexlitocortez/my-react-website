import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core';
import TrafficCard from '../Metric Cards/TrafficCard';



const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        cursor: 'pointer',
        color: '#FFFFFF',
        backgroundColor: '#a9a9a9',
        fontSize: '14px',
        fontFamily: 'sans-serif',
        textTransform: 'capitalize',
        width: '8em',
        height: '5em',
        padding: '0.35em 1.2em',
        margin: '0 0.3em 0.3em 0',
        border: 'none',
        borderRadius: '0.3em',
        transition: 'all 0.2s',
        textDecoration: 'none',
        textAlign: 'center',
        outline: 'none',
        '&:hover': {
            transform: 'scale(1.1)',
            backgroundColor: 'white',
            color: 'black'
        },
    inactive: {
        display: 'none'
    }
    }
}))

function TrafficButton() {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const toggleButton = () => {
        setOpen(!open);
    }

    const [showTrafficChart, setShowTrafficChart] = useState(false)

    const toggleTrafficChart = () => {
        showTrafficChart ? setShowTrafficChart(false) : setShowTrafficChart(true)
    }

    return (
        <div>
            <button className={` ${classes.buttonStyle} ${open ? 'open' : null} `} onClick={() => {
                toggleButton();
                toggleTrafficChart();
                }}
            >Show Traffic</button>
            {
                showTrafficChart ? <TrafficCard /> : null
            }
        </div>
    )
}

export default TrafficButton
