import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import htmlImage from '/Users/l/my-react-website/src/images/html_logo.png';
import cssImage from '/Users/l/my-react-website/src/images/css_logo.png';
import reactImage from '/Users/l/my-react-website/src/images/react_logo.png';
import javascriptImage from '/Users/l/my-react-website/src/images/javascript_logo.png';
import './Section.css';

const useStyles = makeStyles((theme) => ({
    body: {
        marginTop: '7em'
    },
    header: {
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'center',
        position: 'relative',
        left: '200px',
        textAlign: 'center',
        marginTop: '25rem',
        marginBottom: '2rem',
        fontSize: '2.5rem',
    },
    headerLine: {
        width: '65rem',
        borderColor: '#5288a4',
        position: 'relative',
        left: '0'
    },
    container: {
        width: '100%',
        padding: '1rem 0 0',
        left: 0,
        right: 0,
        ['@media (max-width: 768px)']: {
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            top: '250px'
        }
    },
    containerOne: {
        ['@media (max-width: 768px)']: {
            position: 'relative',
            top: '275px'
        }
    },
    text: {
        fontSize: '32px'
    },
    root: {
        flexGrow: 1
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        width: '10em',
        height: '7em',
        backgroundColor: 'white'
    },
    }
))

function Section() {
    const classes = useStyles();

    return (
        <div className={` ${classes.body} ${classes.container} `}>
            <h1 className={classes.header}>Skills</h1>
            <hr className={classes.headerLine}></hr>
            <div className="skills-container">
                <img src={htmlImage} alt='html logo' />
                <img src={cssImage} alt='css logo' />
                <img src={javascriptImage} alt='javascript logo' />
            </div>
            <div className="skills-container-two">
                <img src={reactImage} alt='react logo' />
            </div>
        </div>
    )
}

export default Section


