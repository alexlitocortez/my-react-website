import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core';
import '/Users/l/my-react-website/src/components/Projects/WebsiteInvestment.css';
import RevenueCard from '../Metric Cards/RevenueCard.js';


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
            transform: 'scale(1.1)',
            backgroundColor: 'white',
            color: 'black'
        }
    }
}))

function RevenueButton() {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const toggleButton = () => {
        setOpen(!open);
    }

    const [showRevenueChart, setShowRevenueChart] = useState(false)

    const toggleRevenueChart = () => {
        showRevenueChart ? setShowRevenueChart(false) : setShowRevenueChart(true)
    }

    return (
        <div>
            <button className={` ${classes.buttonStyle} ${open ? 'open' : null} `} onClick={() => {
                toggleButton();
                toggleRevenueChart();
                }}
                >Show Revenue
            </button>
                {
                    showRevenueChart ? <RevenueCard /> : null
                }
        </div>
    )
}

export default RevenueButton
