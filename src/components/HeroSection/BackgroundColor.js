import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    hero: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    firstText: {
        color: '#7510f7',
        fontSize: '32px',
        position: 'relative',
        
    },
    button: {
        backgroundColor: '#757AE5',
        color: 'white',
        borderRadius: '10%',
        padding: '1rem',
        display: 'block',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        '&hover': {
            padding: '1px',
            transition: '0.3s',
            transform: 'translateX(1em)'
        }
    }
}))


function BackgroundColor() {

    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.hero}>
                <div className={classes.firstText}>
                    Hi, I'm Alex.
                    Nice to meet you.
                    <button className={classes.button}>
                        Know More
                    </button>
                </div>
                <div>
                    Hi
                </div>
            </Grid>
        </div>
    )
}

export default BackgroundColor
