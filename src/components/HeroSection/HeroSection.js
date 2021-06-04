import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: '#fff',
        height: '400px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem',
    }
}))


function HeroSection() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.hero}>
                <Box>
                    My Blog
                </Box>
            </Box>
        </div>
    )
}

export default HeroSection


