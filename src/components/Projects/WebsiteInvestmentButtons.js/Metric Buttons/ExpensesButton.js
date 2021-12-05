import React from 'react'
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import '/Users/l/my-react-website/src/components/Projects/WebsiteInvestment.css';
import ExpenseCard from '../Metric Cards/ExpenseCard';

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


function ExpensesButton() {

    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const toggleButton = () => {
        setOpen(!open);
    }

    const [showExpenseChart, setShowExpenseChart] = useState(false)

    const toggleExpenseChart = () => {
        showExpenseChart ? setShowExpenseChart(false) : setShowExpenseChart(true)
    }

    return (
        <div>
            <button className={` ${classes.buttonStyle} ${open ? 'open' : null} `} onClick={() => {
                toggleButton();
                toggleExpenseChart();
                }}
                >Show Expenses</button>
                {
                    showExpenseChart ? <ExpenseCard /> : null
                }
        </div>
    )
}

export default ExpensesButton