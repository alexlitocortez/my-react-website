import React from 'react';
import styled from 'styled-components';
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
                Hi, my name is Alex and I'm a frontend developer.
            </BoxTitle>
            <BoxTitle>
                I'm a Bay Area native who went to school for accounting, transitioned to marketing, and want 
                to make the move to developer my final destination.
                I'm naturally curious, and constantly working on my coding skills to get better every day.
            </BoxTitle>
            <BoxTitle>
                My hobbies include basketball, lifting, chess, and more. Contact me if you want to learn more.
            </BoxTitle>
            <Grid container spacing={2} justify={'center'} style={{ marginTop: 80 }}>
                <Grid item maxWidth='sm'>
                </Grid>
            </Grid>
        </div>
    );
}


export default About

