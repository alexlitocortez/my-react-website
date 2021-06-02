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

function About() {
    return (
        <div>
            <aboutText>
                Hello, my name is Alex and I'm a frontend developer. I currently live in the Bay Area and have
                worked at a startup which sparked my interest in learning to code. 
            </aboutText>
            <Grid container spacing={34} justify={'center'}>
                <Grid item>
                    <Paper style={{ height: 300, width: 300 }}>

                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{ height: 300, width: 300 }}>

                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default About

