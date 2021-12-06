import React from 'react';
import { makeStyles } from '@material-ui/core';
import Projects from '../NavMenu/Projects';
import './BackgroundColorTwo.css';
import { Link } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
    wholeSectionOne: {
        position: 'relative',
        bottom: '28rem',
        marginTop: '35rem',
        ['@media (max-width: 768px)']: {
            marginTop: '10rem',
        }
    },
    projectSection: {
        marginBottom: '5rem'
    }
}))

function BackgroundColorTwo() {
    const classes = useStyles();

    return (
        <div>
            <div className='wholeSectionTwo'>
                <div className={classes.projectSection}>
                    <Projects />
                </div>
            </div>
        </div>
    )
}

export default BackgroundColorTwo