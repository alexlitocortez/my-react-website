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
        color: 'black',
        position: 'relative',
        bottom: '50px',
    },
    header: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        marginBottom: '1rem',
        fontSize: '2.5rem',
        position: 'relative',
        left: '200px'
    },
    headerLine: {
        width: '65rem',
        borderColor: '#5288a4',
        position: 'relative',
        left: '0'
    },
    bodyDiv: {
        display: 'flex',
        alignItems: 'left',
        justifyContent: 'center',
        textAlign: 'left',
        width: '25em',
        lineHeight: '2.5rem',
        position: 'relative',
        right: '300px',
        '@media (max-width: 768px)' : {
            display: 'flex',
            flexDirection: 'column',

        }
    }
}))

function BackgroundColorOne() {
    const classes = useStyles();

    return (
            <div className={classes.section}>
                <h1 className={classes.header}>About</h1>
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