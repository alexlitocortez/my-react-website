import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

// Images
import drumkitImage from '/Users/l/my-react-website/src/images/Screen Shot 2021-11-13 at 2.39.19 PM.png';
import warriorsImage from '/Users/l/my-react-website/src/images/Screen Shot 2021-11-13 at 2.16.29 PM.png';
import dashboardImage from '/Users/l/my-react-website/src/images/dashboardImage.png';

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
        height: '600px',
        marginLeft: '22px',
        filter: '50%',
        border: '5px solid #b22222'
    },
    media: {
        height: 300,
    },
    articleTitle: {
        fontWeight: 400,
        color: 'white',
        marginBottom: '5',
        position: 'relative',
        top: '10px'
    },
    techDescription: {
        fontFamily: 'roboto',
        textTransform: 'uppercase',
        marginLeft: '1rem'
    },
    featureDescription: {
        marginLeft: '1rem',
        marginBottom: '3rem',
        fontFamily: 'roboto',
        textTransform: 'uppercase'
    },
    content: {
        height: '400px'
    },
    author: {
        display: 'flex'
    },
    overlayOne: {
        position: 'relative',
        bottom: '10px',
        left: '10px',
    },
    overlay: {
        position: 'relative',
        left: '10px',
        bottom: '50px',
        display: 'flex',
        color: 'white'
    },
    button: {
        float: 'right',
        marginRight: '3rem',
        backgroundColor: '#b22222',
        color: '#fff',
        borderRadius: '5px',
        cursor: 'pointer',
        padding: '0.3rem'
    }
}))

function Projects() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.hero}>
                <Box id='projects' style={{ color: '#493b2a'}}>Projects</Box>
            </Box>
            <Grid className={classes.blogsContainer} container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to='/drumkitproject' style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia 
                            className={classes.media}
                            image={drumkitImage}
                            />
                            {/* Author name */}
                            <div className={classes.overlay}>
                                
                            </div>

                            {/* Project title */}
                            <div className={classes.overlayOne}>
                                <Typography className={classes.articleTitle} gutterBottom variant='h5' component='h2' style={{ color: 'black' }}>Drumkit Sounds</Typography>
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

                            {/* Features */}
                            <div className={classes.featureDescription}>
                                <h4 style={{ color: '#b22222'}}>Features:</h4>
                                <ul>
                                    <li>Sound Effects</li>
                                    <li>Responsive Design</li>
                                </ul>
                            </div>

                            <Link to='/drumkitproject'><button className={classes.button}>Check it out</button></Link>

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
                            image={warriorsImage}
                            />

                            {/* Author name */}
                            <div className={classes.overlay}>
                                
                            </div>

                            {/* Project title */}
                            <div className={classes.overlayOne}>
                                <Typography className={classes.articleTitle} gutterBottom variant='h5' component='h2' style={{ color: 'black' }}>Warrior Player Stats</Typography>
                            </div>

                            {/* Tech stack */}
                            <div className={classes.techDescription}>
                                <h4 style={{ color: '#b22222'}}>Tech Stack:</h4>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                </ul>
                            </div>

                            {/* Features */}
                            <div className={classes.featureDescription}>
                                <h4 style={{ color: '#b22222'}}>Features:</h4>
                                <ul>
                                    <li>Image Carousel</li>
                                    <li>Statistic Carousel</li>
                                    <li>Responsive Design</li>
                                </ul>
                            </div>

                            <Link to='/warriors'><button className={classes.button} style={{ position: 'relative', bottom: '2rem' }}>Check it out</button></Link>

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
                            image={dashboardImage}
                            />

                            {/* Author name */}
                            <div className={classes.overlay}>
                                
                            </div>

                            {/* Project title */}
                            <div className={classes.overlayOne}>
                                <Typography className={classes.articleTitle} gutterBottom variant='h5' component='h2' style={{ color: 'black' }}>Website Investment Dashboard</Typography>
                            </div>

                            {/* Tech stack */}
                            <div className={classes.techDescription}>
                                <h4 style={{ color: '#b22222'}}>Tech Stack:</h4>
                                <ul>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                    <li>React</li>
                                </ul>
                            </div>

                            {/* Features */}
                            <div className={classes.featureDescription}>
                                <h4 style={{ color: '#b22222' }}>Features:</h4>
                                <ul>
                                    <li>Business Metrics</li>
                                    <li>Line Chart</li>
                                    <li>Sidebar</li>
                                    <li>Responsive Design</li>
                                </ul>
                            </div>

                            <Link to='/websiteinvestment'><button className={classes.button} style={{ position: 'relative', bottom: '2.8rem' }}>Check it out</button></Link>
                            
                        </CardActionArea>
                    </Card>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects
