import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core';
import '/Users/l/my-react-website/src/components/Projects/WebsiteInvestment.css';
import RevenueCard from '../Metric Cards/RevenueCard.js';


const useStyles = makeStyles((theme) => ({
    buttonStyle: {
        cursor: 'pointer',
        color: 'white',
        backgroundColor: '#3f51b5',
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
            padding: '12px',
            transition: '0.3s',
            transform: 'translateX(1em)'
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
                >Show Revenue</button>
                {
                    showRevenueChart ? <RevenueCard /> : null
                }
        </div>
    )
}

export default RevenueButton
