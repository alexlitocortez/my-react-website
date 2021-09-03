import React from 'react'
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import htmlImage from '/Users/l/my-react-website/src/images/html image.png';
import cssImage from '/Users/l/my-react-website/src/images/css image.png';
import reactImage from '/Users/l/my-react-website/src/images/react image.png';
import javascriptImage from '/Users/l/my-react-website/src/images/javascript image.png';
import './Section.css';


const useStyles = makeStyles((theme) => ({
    body: {
        marginTop: '7em'
    },
    header: {
        textAlign: 'center',
        marginTop: '10rem',
        marginBottom: '2rem',
        fontSize: '32px',
    },
    container: {
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
        backgroundColor: '#000022'
    },
    }
))

function Section() {
    const classes = useStyles();

    return (
        <div className={` ${classes.body} ${classes.container} `}>
            <div className={classes.header}>Languages I Know</div>
            <Grid container spacing={2} className={classes.container}>
                <Grid item xs={6} className='paperOne'>
                    <Paper className={classes.paper}>
                        <img src={htmlImage}></img>
                    </Paper>
                </Grid>
                <Grid item xs={6} className='paperOne'>
                    <Paper className={classes.paper}>
                        <img src={cssImage}></img>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2} className={` ${classes.container} ${classes.containerOne} `}>
                <Grid item xs={6} className='paperOne'>
                    <Paper className={classes.paper}>
                        <img src={javascriptImage}></img>
                    </Paper>
                </Grid>
                <Grid item xs={6} className='paperOne'>
                    <Paper className={classes.paper}>
                        <img src={reactImage}></img>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Section


