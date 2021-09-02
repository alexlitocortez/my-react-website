import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Avatar, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

// Images
import myCharacter from '../../images/caricature.jpg';
import projectImageOne from '../../images/drumkit.jpg';
import projectImageTwo from '../../images/warrior.jpg';
import projectImageThree from '../../images/investment.jpg';

const useStyles = makeStyles((theme) => ({
    hero: {
        backgroundColor: '#fff',
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
    blogsContainer: {
        paddingTop: theme.spacing(3),
        overflow: 'auto'
    },
    card: {
        maxWidth: '90%',
        marginLeft: '22px',
        filter: '50%'
    },
    media: {
        height: 300,
    },
    articleTitle: {
        fontWeight: 400,
        color: 'white',
        marginBottom: '5',
    },
    content: {
        height: '400px'
    },
    author: {
        display: 'flex'
    },
    overlayOne: {
        position: 'relative',
        bottom: '80px',
        left: '10px'
    },
    overlay: {
        position: 'relative',
        left: '10px',
        bottom: '80px',
        display: 'flex',
        color: 'white'
    },
}))

function Projects() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.hero}>
                <Box>My Recent Projects</Box>
            </Box>
            <Grid className={classes.blogsContainer} container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to='/drumkitproject' style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia 
                            className={classes.media}
                            image={projectImageOne}
                            />
                            {/* Project title */}
                            <div className={classes.overlayOne}>
                                <Typography className={classes.articleTitle} gutterBottom variant='h5' component='h2'>Drumkit Sounds</Typography>
                            </div>


                            {/* Author name */}
                            <div className={classes.overlay}>
                                <Avatar src={myCharacter} />
                                <Typography variant='subtitle2' component='p'>
                                    Alex
                                </Typography>
                            </div>
                            
                            
                        </CardActionArea>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to='/warriors' style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={projectImageTwo}
                            />
                            
                            {/* Project title */}
                            <div className={classes.overlayOne}>
                                <Typography className={classes.articleTitle} gutterBottom variant='h5' component='h2'>Warrior Player Stats</Typography>
                            </div>


                            {/* Author name */}
                            <div className={classes.overlay}>
                                <Avatar src={myCharacter} />
                                <Typography variant='subtitle2' component='p'>
                                    Alex
                                </Typography>
                            </div>

                        </CardActionArea>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to='/websiteinvestment' style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={projectImageThree}
                            />

                            {/* Project title */}
                            <div className={classes.overlayOne}>
                                <Typography className={classes.articleTitle} gutterBottom variant='h5' component='h2'>Warrior Player Stats</Typography>
                            </div>


                            {/* Author name */}
                            <div className={classes.overlay}>
                                <Avatar src={myCharacter} />
                                <Typography variant='subtitle2' component='p'>
                                    Alex
                                </Typography>
                            </div>
                            
                        </CardActionArea>
                    </Card>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects
