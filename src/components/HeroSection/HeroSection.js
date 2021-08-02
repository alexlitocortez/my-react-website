import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import { BsCodeSlash } from 'react-icons/bs';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: '#fff',
        height: '1000px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
    },
    card: {
        width: '400px',
        height: '600px',
        padding: '70px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
            width: '410px'
    },
    backgroundColor: {
        height: '300px',
        width: '300px'
    }
    }
}))


function HeroSection() {
    const classes = useStyles();

    return (
        <div className={classes.hero}>
            <div className={classes.backgroundColor}>
                Hi
            </div>
                <Card className={classes.card}>
                    Languages I know:
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>React</li>
                </Card>
        </div>
    )
}

export default HeroSection