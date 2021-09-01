import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
    section: {
        height: '400px',
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
                <h1 className={classes.header}>My Biography</h1>
                <hr className={classes.headerLine}></hr>
                <Container className={classes.bodyDiv}>
                        Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. 
                        I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </Container>
            </div>
    )
}

export default BackgroundColorOne