import React from 'react';
import { makeStyles } from '@material-ui/core';

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
        backgroundColor: '#7510F7',
        color: 'white',
        position: 'relative',
        bottom: '200px',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2rem'
    }
}))

function BackgroundColor() {
    const classes = useStyles();

    return (
        <div className={classes.section}>
            <h1 className={classes.header}>Hi, I’m Alex. Nice to meet you.</h1>
            <div>
            Since beginning my journey as a freelance designer nearly 10 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. 
            I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
            </div>
        </div>
    )
}

export default BackgroundColor