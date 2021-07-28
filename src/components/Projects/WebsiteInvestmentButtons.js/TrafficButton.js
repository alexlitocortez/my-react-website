import React from 'react'
import { makeStyles } from '@material-ui/core';


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
        }
    }
}))

function TrafficButton() {
    const classes = useStyles();

    return (
        <div>
            <button className={classes.buttonStyle}>Show Traffic</button>
        </div>
    )
}

export default TrafficButton
