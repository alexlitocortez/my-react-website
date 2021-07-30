import React from 'react'
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import '/Users/l/my-react-website/src/components/Projects/WebsiteInvestment.css';

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
        padding: '4px',
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


function ExpensesButton() {

    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const toggleButton = () => {
        setOpen(!open);
    }

    return (
        <div>
            <button className={` ${classes.buttonStyle} ${open ? 'open' : null} `} onClick={toggleButton}>Show Expenses</button>
        </div>
    )
}

export default ExpensesButton