import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { Avatar, Container, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import myCharacter from '../../images/caricature.jpg';


// Image imports
import blogImageOne from '../../images/blog_image_1.jpg';
import blogImageTwo from '../../images/blog_image_2.jpg';
import blogImageThree from '../../images/blog_image_3.jpg'


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
    },
    blogsContainer: {
        paddingTop: theme.spacing(3),
        gridTemplateRows: '1fr',
        display: 'flex'
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
        color: 'black'
    },
    card: {
        maxWidth: '100%',
        marginTop: theme.spacing(3),
    },
    media: {
        height: 240
    },
    author: {
        display: 'flex'
    },
    item: {
        border: '1px solid blue',
        flexBasis: '33%',
        maxWidth: '33%'
    }
}))


function Blog() {
    const classes = useStyles();
    return (
        <div>
            <Box>
                <Box className={classes.hero}>
                    My Blog
                </Box>
            </Box>
            <Container maxWidth='lg' className={classes.blogsContainer}>
                <Typography variant='h4' className={classes.blogTitle}>
                    Articles
                </Typography>
                <Grid Container spacing={6}>
                    <div>
                    <Grid className={classes.item} item xs={12} sm={6} md={4} lg={3}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={blogImageOne}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography className={classes.blogTitle} gutterBottom variant="h5" component="h2">
                                    Why I'm Learning To Code
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                I’ve lived in the Bay Area my whole life. Ironically, I’ve never been into technology until a couple years ago. 
                                It all started when I got on Twitter and started following people like Naval and Sahil who talked about coding as leverage. 
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.CardActions}>
                                <Box className={classes.author}>
                                    <Avatar src={myCharacter} />
                                    <Box ml={2}>
                                        <Typography variant='subtitle2' component='p'>
                                            Alex
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid className={classes.item} item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={blogImageTwo}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography className={classes.blogTitle} gutterBottom variant="h5" component="h2">
                                    The Power Of Combining Marketing And Coding
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                Combining skills makes you more unique. 
                                Lebron James, who is a physical force at 6’8 and 250 pounds can not only score at will, he can also pass. 
                                This allows him to be a unique talent. This is what I’m trying to be in my career.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.CardActions}>
                                <Box className={classes.author}>
                                    <Avatar src={myCharacter} />
                                    <Box ml={2}>
                                        <Typography variant='subtitle2' component='p'>
                                            Alex
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid className={classes.item} item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                alt="Contemplative Reptile"
                                height="140"
                                image={blogImageThree}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography className={classes.blogTitle} gutterBottom variant="h5" component="h2">
                                    My Schedule For Learning To Code
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                In the beginning, I would code as long as my head could take. While that’s not the best strategy, I knew I had to do it because my learning curve was steep.
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions className={classes.CardActions}>
                                <Box className={classes.author}>
                                    <Avatar src={myCharacter} />
                                    <Box ml={2}>
                                        <Typography variant='subtitle2' component='p'>
                                            Alex
                                        </Typography>
                                    </Box>
                                </Box>
                            </CardActions>
                    </Card>
                    </Grid>
                    </div>
                </Grid>
            </Container>
        </div>
    )
}


export default Blog
