import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import '/Users/l/my-react-website/src/components/Projects/WebsiteInvestment.css';
import MonetizationCard from '../Metric Cards/MonetizationCard';

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
        borderColor: '#3f51b5',
        '&:hover': {
            color: 'black',
            backgroundColor: 'white',
            transform: 'scale(1.1)'
        }
    }
}))

function MonetizationButton() {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const toggleButton = () => {
        setOpen(!open);
    }

    const [showRevenuePieChart, setShowRevenuePieChart] = useState(false)

    const toggleRevenuePieChart = () => {
        showRevenuePieChart ? setShowRevenuePieChart(false) : setShowRevenuePieChart(true)
    }

    return (
        <div>
            <button className={` ${classes.buttonStyle} ${open ? 'open' : null} `} onClick={() => {
                toggleButton();
                toggleRevenuePieChart();
                }}
                >Show Monetization Sources</button>
                {
                    showRevenuePieChart ? <MonetizationCard /> : null
                }
        </div>
    )
}

export default MonetizationButton


