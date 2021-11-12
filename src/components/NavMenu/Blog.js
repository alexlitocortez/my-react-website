import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

// Images
import myCharacter from '../../images/caricature.jpg';
import blogImageOne from '../../images/blog_image_1.jpg';
import blogImageTwo from '../../images/blog_image_2.jpg';
import blogImageThree from '../../images/blog_image_3.jpg'

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
        color: '#08D665',
        fontWeight: 'bold'
    },
    heroSecond: {
        height: '25px',
        display: 'flex',
        color: 'black',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '2rem'
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
        color: 'black',
    },
    blogsContainer: {
        paddingTop: theme.spacing(3),
        overflow: 'auto',
    },
    card: {
        maxWidth: '90%',
        maxHeight: '500px',
        marginLeft: '22px'
    },
    media: {
        height: 240
    },
    articleTitle: {
        fontWeight: 400,
        color: 'black',
        marginTop: '1rem',
        marginLeft: '1rem'
    },
    content: {
        height: '400px',
    },
    author: {
        display: 'flex'
    }
    }))

function Blog() {
    const classes = useStyles();

    return (
        <div>
            <Box className={classes.hero}>
                <Box style={{ color: '#493b2a' }}>Blog</Box>
            </Box>
            <Grid className={classes.blogsContainer} container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to='/learningcoding' style={{ textDecoration: 'none' }}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.media}
                            image={blogImageOne}
                            />
                            <Typography className={classes.articleTitle} gutterBottom variant="h5" component="h2">
                                Why I'm Learning To Code
                            </Typography>
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to='/combining' style={{ textDecoration: 'none' }}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.media}
                            image={blogImageTwo}
                            />
                            <Typography className={classes.articleTitle} gutterBottom variant="h5" component="h2">
                                Combining Coding And Marketing
                            </Typography>                            
                        </Card>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Link to='/schedule' style={{ textDecoration: 'none' }}>
                        <Card className={classes.card}>
                            <CardMedia
                            className={classes.media}
                            image={blogImageThree}
                            />
                            <Typography className={classes.articleTitle} gutterBottom variant="h5" component="h2">
                                My Schedule For Learning To Code
                            </Typography>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
}





export default Blog













