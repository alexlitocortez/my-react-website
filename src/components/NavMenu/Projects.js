import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import './Projects.css';

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
        objectFit: 'cover',
        width: '100%'
    },
    techDescription: {
        fontFamily: 'roboto',
        textTransform: 'uppercase',
        marginLeft: '1rem'
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
            
        </div>
    );
}

export default Projects



