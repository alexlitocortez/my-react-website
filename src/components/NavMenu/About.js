import React from 'react';
import styled from 'styled-components';
import imageOne from '../../images/HeroImageOne.jpeg';
import imageTwo from '../../images/HeroImageTwo.jpeg';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

export const aboutText = styled.div`
    text-align: center;
    font-size: 24px;
    width: 300px;
`;

const BoxTitle = styled.div`
    color: #333;
    font-size: 2rem;
    text-align: center;
    margin-top: 5rem;

    @media (min-width: 780px) {
        font-size: 24px;
    }
`;


function About() {
    return (
        <div>
            <BoxTitle>
                Hi, my name is Alex and I'm an aspiring fronted developer
            </BoxTitle>
            <Grid container spacing={2} justify={'center'} style={{ marginTop: 80 }}>
                <Grid item maxWidth='sm'>
                    <Paper style={{ height: 400, width: 600 }}>
                        <img src={imageOne} alt='sitting on a fence trail' style={{ maxWidth: 600, maxHeight: 600 }}></img>
                    </Paper>
                </Grid>
                <Grid item maxWidth='sm'>
                    <Paper style={{ height: 600, width: 400 }}>
                        <img src={imageTwo} alt='standing in front of the Golden Gate Bridge' style={{ maxWidth: 600, maxHeight: 600 }}></img>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}


export default About

