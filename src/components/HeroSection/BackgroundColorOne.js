import React from 'react';
import { makeStyles } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import myFace from '/Users/l/my-react-website/src/images/caricature.jpg';
import './BackgroundColor.css';


const useStyles = makeStyles((theme) => ({
    section: {
        height: '800px',
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
            <div>
                
            </div>
    )
}

export default BackgroundColorOne