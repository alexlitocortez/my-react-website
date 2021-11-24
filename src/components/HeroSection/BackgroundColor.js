
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';

// Images
import myCharacter from '../../images/caricature.jpg';




const useStyles = makeStyles((theme) => ({
    about: {
        position: 'relative',
        top: '5rem',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        height: '500px'
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        alignItems: 'flex-start'
    },
    image: {
        borderRadius: '90%',
        width: '5rem',
        height: '5rem'
    },
    fit: {
        display: 'block'
    },
    headerText: {
        textAlign: 'left'
    },
    header: {
        fontSize: '3.25em',
        letterSpacing: '-0.025em',
        fontWeight: '50',
        color: '#3e3e3e'
    },
    strong: {
        
    },
    paragraph: {
        fontSize: '1.5em',
        lineHeight: '1.75em',
    }
}))

function BackgroundColor() {
    const classes = useStyles();

    return (
        <div>
            <Container className={classes.about}>
                <div className='row'>
                    <div>
                        <img className={` ${classes.image} ${classes.fit} `} src={myCharacter}></img>
                    </div>
                    <div className={classes.headerText}>
                        <h1 className={classes.header}>Hi, I'm <strong className={classes.strong}>Alex Cortez</strong></h1>
                        <p className={classes.paragraph} style={{ color: '#43B3E0' }}>I'm a <strong style={{ color: '#3e3e3e' }}>Frontend Developer</strong>.</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default BackgroundColor



