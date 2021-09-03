import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    hero: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '10rem'
    },
    firstText: {
        color: '#7510f7',
        fontSize: '32px',
        position: 'relative',
        
    },
    button: {
        backgroundColor: '#757AE5',
        color: 'white',
        fontSize: '16px',
        borderRadius: '12px',
        padding: '1rem',
        display: 'block',
        position: 'relative',
        left: '150px',
        marginTop: '2rem',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        '&:hover': {
            padding: '1.1rem',
            transition: '0.3s',
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
                    <Link
                    to='/about'
                    target='_blank'
                    style={{ textDecoration: 'none' }}
                    ><button className={classes.button}>Know More</button></Link>
                </div>
            </Grid>
        </div>
    )
}

export default BackgroundColor
