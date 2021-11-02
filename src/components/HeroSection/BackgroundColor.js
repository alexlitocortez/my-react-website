import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';
import myCharacter from '../../images/caricature.jpg';
import styled from 'styled-components';

const LogoImage = styled.div`
    width: 10px;
    height: 10px;
    border-radius: 90%;
    position: relative;
    bottom: 150px;
    background-repeat: no-repeat;
`;

const useStyles = makeStyles((theme) => ({
    hero: {
        marginTop: '10rem'
    },
    firstText: {
        color: '#493b2a',
        fontSize: '5.8rem',
        fontStyle: 'italic',
        textTransform: 'uppercase',
        letterSpacing: '42px',
        fontWeight: '900',
        position: 'relative',
        left: '25px',
        textAlign: 'center'
        
    },
    secondText: {
        display: 'block',
        color: '#b22222',
        textTransform: 'uppercase',
        textAlign: 'center',
        fontSize: '1.5rem',
        fontWeight: '700',
        textAlign: 'center',
        position: 'relative',
        top: '40px'
    },
    button: {
        backgroundColor: '#757AE5',
        color: 'white',
        fontSize: '16px',
        borderRadius: '12px',
        padding: '1rem',
        display: 'block',
        position: 'relative',
        left: '150px',
        marginTop: '2rem',
        outline: 'none',
        cursor: 'pointer',
        border: 'none',
        '&:hover': {
            padding: '1.1rem',
            transition: '0.3s',
        }
    }
}))

function BackgroundColor() {

    const classes = useStyles();

    return (
        <div>
            <Grid className={classes.hero}>
                <div className={classes.firstText}>
                    Hi, I'm Alex.
                    {/* <Link
                    to='/about'
                    target='_blank'
                    style={{ textDecoration: 'none' }}
                    ><button className={classes.button}>Know More</button></Link> */}
                </div>
                <div className={classes.secondText}>
                    Web Developer
                </div>
            </Grid>
        </div>
    )
}

export default BackgroundColor


