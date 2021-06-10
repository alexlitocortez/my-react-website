import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Avatar, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

// Images
import myCharacter from '../../images/caricature.jpg';
import projectImageOne from '../../images/drumkit.jpg';
import projectImageTwo from '../../images/dog.jpg';
import projectImageThree from '../../images/investment.jpg';

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
        fontSize: '4rem'
    },
    blogsContainer: {
        paddingTop: theme.spacing(3),
        overflow: 'auto'
    },
    card: {
        maxWidth: '90%',
        marginLeft: '22px'
    },
    media: {
        height: 240
    },
    articleTitle: {
        fontWeight: 400,
        color: 'black',
        marginBottom: '5',
    },
    content: {
        height: '400px'
    },
    author: {
        display: 'flex'
    }
}))

function Projects() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.hero}>
                <Box>Projects</Box>
            </Box>
            <Grid className={classes.blogsContainer} container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to='/drumkit' style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={projectImageOne}
                            />
                            <CardContent>
                                <Typography className={classes.articleTitle} gutterBottom variant='h5' component='h2'>
                                    Drumkit Sounds
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>

                                </Typography>
                            </CardContent>
                            <CardActionArea className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src={myCharacter} />
                                <Box ml={2}>
                                    <Typography variant='subtitle2' component='p'>
                                        Alex
                                    </Typography>
                                </Box>
                            </Box>
                            </CardActionArea>
                        </CardActionArea>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={projectImageTwo}
                            />
                            <CardContent>
                                <Typography className={classes.articleTitle} gutterBottom variant='h5' component='h2'>
                                    Dog Image Generator
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>

                                </Typography>
                            </CardContent>
                            <CardActionArea className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src={myCharacter} />
                                <Box ml={2}>
                                    <Typography variant='subtitle2' component='p'>
                                        Alex
                                    </Typography>
                                </Box>
                            </Box>
                            </CardActionArea>
                        </CardActionArea>
                    </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link style={{ textDecoration: 'none' }}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={projectImageThree}
                            />
                            <CardContent>
                                <Typography className={classes.articleTitle} gutterBottom variant='h5' component='h2'>
                                    Website Investment
                                </Typography>
                                <Typography variant='body2' color='textSecondary' component='p'>

                                </Typography>
                            </CardContent>
                            <CardActionArea className={classes.cardActions}>
                            <Box className={classes.author}>
                                <Avatar src={myCharacter} />
                                <Box ml={2}>
                                    <Typography variant='subtitle2' component='p'>
                                        Alex
                                    </Typography>
                                </Box>
                            </Box>
                            </CardActionArea>
                        </CardActionArea>
                    </Card>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
}

export default Projects
