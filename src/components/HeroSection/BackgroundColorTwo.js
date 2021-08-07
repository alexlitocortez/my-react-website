import React from 'react';
import { makeStyles } from '@material-ui/core';
import Projects from '../NavMenu/Projects';

const useStyles = makeStyles((theme) => ({
    wholeSection: {
        position: 'relative',
        bottom: '15rem'
    },
    section: {
        height: '200px',
        width: '100%',
        margin: '0',
        textAlign: 'center',
        top: '50px',
        left: 0,
        right: 0,
        backgroundColor: '#7510F7',
        color: 'white',
        position: 'relative',
        marginBottom: '3rem',
    },
    projectSection: {
        marginBottom: '5rem'
    }
}))

function BackgroundColorTwo() {
    const classes = useStyles();

    return (
        <div className={classes.wholeSection}>
            <div className={classes.section}>
                <h1>Check out my projects which have brought me satisfaction and frustration.</h1>
            </div>
            <div className={classes.projectSection}>
                <Projects />
            </div>
        </div>
    )
}

export default BackgroundColorTwo