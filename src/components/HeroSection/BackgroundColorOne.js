import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    section: {
        height: '600px',
        width: '100%',
        margin: '0',
        padding: '1rem 0 0',
        textAlign: 'center',
        top: '100px',
        left: 0,
        right: 0,
        backgroundColor: '#000022',
        color: 'white',
        position: 'relative',
        bottom: '50px',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'left',
        marginBottom: '1rem'
    },
    headerLine: {
        width: '25em',
        borderColor: '#08D665'
    },
    bodyDiv: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'left',
        width: '25em'
    }
}))

function BackgroundColorOne() {
    const classes = useStyles();

    return (
            <div className={classes.section}>
                <h1 className={classes.header}>Why Coding</h1>
                <hr className={classes.headerLine}></hr>
                <Container className={classes.bodyDiv}>
                        My coding journey started a year ago. I've done work for startups, small businesses, and started side projects before this journey. 
                        <br></br>
                        <br></br>
                        There are a lot of reasons of why I want to get into coding (check out my blog), but the ability to learn something everyday while 
                        using creativity to create something of value is an opportunity I couldn't pass up.<br></br>
                        <br></br>
                </Container>
            </div>
    )
}

export default BackgroundColorOne