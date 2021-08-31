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

    },
    button: {
        backgroundColor: '#c585f7',
        color: 'white',
        borderRadius: '10%',
        padding: '1rem',
        display: 'block',
        outline: 'none'
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
