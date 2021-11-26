import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import './Projects.css'

// Images
import drumkitImage from '/Users/l/my-react-website/src/images/Screen Shot 2021-11-13 at 2.39.19 PM.png';
import warriorsImage from '/Users/l/my-react-website/src/images/Screen Shot 2021-11-13 at 2.16.29 PM.png';
import dashboardImage from '/Users/l/my-react-website/src/images/dashboardImage.png';

const useStyles = makeStyles((theme) => ({
    hero: {
        height: '200px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
        fontWeight: 'bold'
    },
    row: {
        display: 'flex',
        boxSizing: 'border-box',
        alignItems: 'flex-start',
        justifyContent: 'center',
        ['@media (max-width: 980px)']: {
<<<<<<< HEAD
            width: '100vw',
=======
            width: '100vw'
        },
        ['@media (max-width: 768px)']: {
>>>>>>> 06115feeb58fbe674bf650d117c7879f7c32e4c2
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
            left: '4.2rem'
        },
        ['@media (max-width: 768px)']: {
            display: 'flex',
            flexDirection: 'column'
        },
    },
    box: {
        backgroundColor: '#fff',
        boxShadow: 'inset 0px 0px 0px 1px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.1)',
        padding: '2em'
    },
    style1: {
        padding: '3em 2em 3.5em 2em',
        width: '400px',
        cursor: 'pointer',
        ['@media (max-width: 768px)']: {
            maxWidth: '32em',
            marginLeft: 'auto !important',
            marginRight: 'auto !important'
        }
    },
    image: {
        display: 'inline-block',
        position: 'relative',
        objectFit: 'cover'
    },
    fit: {
        display: 'block',
        width: '100%'
    }
}))


function Projects() {
    const classes = useStyles();

    return (
        <div>
            <Box id='projects' className={classes.hero}>
                <Box style={{ color: '#3e3e3e' }}>Projects</Box>
            </Box>
            <div className={classes.row}>
                <div id='projectBox'>
                    <section className={` ${classes.box} ${classes.style1} `}><Link to='/DrumkitProject' style={{ textDecoration: 'none' }}>
                        <span className={` ${classes.image} ${classes.fit} `}>
                            <img className='drumkit' src={drumkitImage} />
                        </span>
                        <h3 style={{ color: 'black' }}>Drumkit Sounds</h3>
                    </Link></section>

                    <div>
                        <h4>Tech Stack:</h4>
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>

                    {/* Tech stack */}
                    <div className={classes.techDescription}>
                                <h4 style={{ color: '#b22222'}}>Tech Stack:</h4>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                </ul>
                            </div>
                </div>
                <div id='projectBox'>
                    <section className={` ${classes.box} ${classes.style1} `}><Link to='/warriors' style={{ textDecoration: 'none' }}>
                        <span className={` ${classes.image} ${classes.fit} `}>
                            <img className='drumkit' src={warriorsImage} />
                        </span>
                        <h3 style={{ color: 'black' }}>Warrior Player Stats</h3>
                    </Link></section>
                </div>
                <div id='projectBox'>
                    <section className={` ${classes.box} ${classes.style1} `}><Link to='/websiteinvestment' style={{ textDecoration: 'none' }}>
                        <span className={` ${classes.image} ${classes.fit} `}>
                            <img className='drumkit' src={dashboardImage} />
                        </span>
                        <h3 style={{ color: 'black' }}>SaaS Dashboard</h3>
                    </Link></section>
                </div>
            </div>
        </div>
    );
}

export default Projects



