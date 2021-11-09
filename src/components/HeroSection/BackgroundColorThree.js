import React from 'react';
import { makeStyles } from '@material-ui/core';
import Blog from '../NavMenu/Blog';


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
        marginBottom: '3rem'
    },
    projectSection: {
        marginBottom: '5rem'
    }
}))

function BackgroundColorThree() {
    const classes = useStyles();

    return (
        <div className={classes.wholeSection}>
        <div id='blog' className='wholeSectionOne'>
            <Blog />
        </div>
        </div>
    )
}

export default BackgroundColorThree