import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box';
import { Avatar, Container, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import myCharacter from '../../images/caricature.jpg';
import Grid from '@material-ui/core/Grid';

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
        fontSize: '4rem'
    },
    blogTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
        color: 'black'
    },
    container: {
        display: 'flex',
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
        }
    },
    item: {
        flexBasis: '25%',
        maxWidth: '33%',
        padding: '5em',
        [theme.breakpoints.down('sm')]: {
            maxWidth: '100%'
        },
        [theme.breakpoints.down('md')]: {
            maxWidth: '100%'
        }
    },
    content: {
        height: '265px',
    }
    }))


function Resume() {
    const classes = useStyles()
    return (
        <div>
            <Box>
                <Box className={classes.hero}>
                    My Blog
                </Box>
            </Box>
            <Typography variant='h4' className={classes.blogTitle}>
                Articles
            </Typography>
        <div className={classes.container}>
            <div className={classes.item}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        alt='Contemplative Reptile'
                        height='140'
                        image={blogImageOne}
                        title='Contemplative Reptile'
                        />
                        <CardContent>
                            <Typography className={classes.blogTitle} gutterBottom variant='h5' component='h2'>
                                Why I'm Learning To Code
                            </Typography>
                            <Typography>
                                I’ve lived in the Bay Area my whole life. Ironically, I’ve never been into technology until a couple years ago. 
                                It all started when I got on Twitter and started following people like Naval and Sahil who talked about coding as leverage. 
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.CardActions}>
                        <Box className={classes.author}>
                            <Avatar src={myCharacter} />
                            <Box>
                                <Typography variant='subtitle2' component='p'>
                                    Alex
                                </Typography>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </div>
            <div className={classes.item}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        alt='Contemplative Reptile'
                        height='140'
                        image={blogImageTwo}
                        />
                        <CardContent className={classes.content}>
                            <Typography className={classes.blogTitle} gutterBottom variant='h5' component='h2'>
                                Combining Marketing And Coding
                            </Typography>
                            <Typography>
                                Combining skills makes you more unique. 
                                Lebron James, who is a physical force at 6’8 and 250 pounds can not only score at will, he can also pass. 
                                This allows him to be a unique talent.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.CardActions}>
                        <Box className={classes.author}>
                            <Avatar src={myCharacter} />
                            <Box>
                                <Typography variant='subtitle2' component='p'>
                                    Alex
                                </Typography>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
            </div>
            <div className={classes.item}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia
                        component='img'
                        alt='Contemplative Reptile'
                        height='140'
                        image={blogImageThree}
                        />
                        <CardContent className={classes.content}>
                            <Typography className={classes.blogTitle} gutterBottom variant='h5' component='h2'>
                                My Schedule For Learning To Code
                            </Typography>
                            <Typography>
                            In the beginning, I would code as long as my head could take. While that’s not the best strategy, I knew I had to do it because my learning curve was steep.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className={classes.CardActions}>
                        <Box className={classes.author}>
                            <Avatar src={myCharacter}/>
                            <Box>
                                <Typography variant='subtitle2' component='p'>
                                    Alex
                                </Typography>
                            </Box>
                        </Box>
                    </CardActions>
                </Card>
        </div>
        </div>
        </div>
    )
}





export default Resume





