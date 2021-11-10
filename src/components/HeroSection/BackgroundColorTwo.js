import React from 'react';
import { makeStyles } from '@material-ui/core';
import Projects from '../NavMenu/Projects';
import './BackgroundColorTwo.css';
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    wholeSection: {
        position: 'relative',
        bottom: '28rem',
        marginTop: '35rem',
        ['@media (max-width: 768px)']: {
            marginTop: '10rem'
        }
    },
    section: {
        height: '400px',
        width: '100%',
        margin: '0',
        textAlign: 'center',
        top: '50px',
        left: 0,
        right: 0,
        backgroundColor: '#5288a4',
        color: 'white',
        position: 'relative',
        marginBottom: '3rem',
        ['@media (min-width: 768px)']: {
            marginTop: '2rem'
        }
    },
    header: {
        position: 'relative',
        top: '10rem'
    },
    button: {
        color: 'white',
        fontSize: '16px',
        backgroundColor: '#b22222',
        outline: 'none',
        border: 'none',
        borderRadius: '12px',
        padding: '1rem',
        width: '8rem',
        marginTop: '13rem',
        cursor: 'pointer',
        '&:hover': {
            padding: '1.1rem',
            transition: '0.3s'
        }
    },
    projectSection: {
        marginBottom: '5rem'
    }
}))

function BackgroundColorTwo() {
    const classes = useStyles();

    return (
        <div className={classes.wholeSection}>
        <div className='wholeSectionOne'>
            <div className={classes.section}>
                <h1 className={classes.header}>Check out my projects which have brought me satisfaction and frustration.</h1>
            </div>
            <div className={classes.projectSection}>
                <Projects />
            </div>
        </div>
        </div>
    )
}

export default BackgroundColorTwo