import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import myFace from '/Users/l/my-react-website/src/images/caricature.jpg';
import './BackgroundColor.css';


const useStyles = makeStyles((theme) => ({
    section: {
        height: '600px',
        width: '100%',
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
    }
}))




function BackgroundColorOne() {
    const classes = useStyles();

    return (
            <div className={classes.section}>
                <h1 className={classes.header}>About</h1>
                <hr className={classes.headerLine}></hr>
                <div className='bodyDiv'>
                    <div className='bodyText'>
                        My coding journey started a year ago. I've done work for startups, small businesses, and started side projects before this journey. 
                        <br></br>
                        <br></br>
                        There are a lot of reasons of why I want to get into coding (check out my blog), but the ability to learn something everyday while 
                        using creativity to create something of value is an opportunity I couldn't pass up.<br></br>
                        <br></br>
                    </div>
                    <div className='caricature'>
                        <img src={myFace} alt='caricature' />
                    </div>
                </div>
            </div>
    )
}

export default BackgroundColorOne