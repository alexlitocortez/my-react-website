import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';


const wholeContainer = styled.html`
    margin: 0;
    height: 100%;
`;

const Container = styled.div`
    background-color: #fff;
    border-radius: 10px;
    position: relative;
    bottom: 20px;

    @media screen and (max-width: 768px) {
        display: block;
        width: 370px;
        height: 150px;
        position: relative;
        left: 10px;
    }
`;

const useStyles = makeStyles((theme) => ({
    imageContainer: {
        borderRadius: '10px',
        height: '240px',
        margin: 0,
        padding: '20px',
        margin: 'auto',
        position: 'relative',
        backgroundColor: 'black',
        width: '600px',
        position: 'relative',
        top: '200px',
        [theme.breakpoints.down('sm')]: {
            width: '400px'
        }
    },
    button: {
        display: 'block',
        backgroundColor: '#00BFFF',
        fontSize: '1em',
        height: '40px',
        padding: '0 20px',
        marginTop: '30px',
        cursor: 'pointer',
        boxSizing: 'border-box',
        borderRadius: '10px',
        position: 'relative',
        top: '100px',
        left: '230px',
        [theme.breakpoints.down('sm')]: {
            alignItems: 'center',
            position: 'relative',
            left: '100px',
            top: '170px'
        }
    }
}))


function DogProject() {
    const classes = useStyles();

    return (
        <div>
            <wholeContainer />
            <Box className={classes.imageContainer}>
                <Container>
                <Button variant='contained' color='primary' className={classes.button}>Dog Images</Button>
                </Container>
            </Box>
        </div>
    )
}

export default DogProject

