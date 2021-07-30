import React from 'react';
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
        '&:hover': {
            padding: '1px',
            transition: '0.3s',
            transform: 'translateX(1em)'
        }
    }
}))

function MonetizationButton() {
    const classes = useStyles();

    const [open, setOpen] = useState(false)

    const toggleButton = () => {
        setOpen(!open);
    }

    return (
        <div>
            <button className={` ${classes.buttonStyle} ${open ? 'open' : null} `} onClick={toggleButton}>Show Monetization Sources</button>
        </div>
    )
}

export default MonetizationButton