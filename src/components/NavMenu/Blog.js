import { makeStyles } from '@material-ui/core/styles'
import styled from 'styled-components'
import Box from '@material-ui/core/Box';
import { Avatar, Typography } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

import { useHistory } from 'react-router-dom';

// Images
import myCharacter from '../../images/caricature.jpg';
import blogImageOne from '../../images/blog_image_1.jpg';
import blogImageTwo from '../../images/blog_image_2.jpg';
import blogImageThree from '../../images/blog_image_3.jpg'
import Combining from './Combining';

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
        color: 'black',
    },
    blogsContainer: {
        paddingTop: theme.spacing(3),
        overflow: 'auto',
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
        marginBottom: '5'
    },
    content: {
        height: '400px',
    },
    author: {
        display: 'flex'
    }
    }))




function Resume(props) {
    const classes = useStyles()
    const history = useHistory();

    function handleClick() {
        history.push('/Combining')
    }

    return (
        <div>
            <Box className={classes.hero}>
                <Box>React Blog</Box>
            </Box>
            <Grid className={classes.blogsContainer} container spacing={3}>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card className={classes.card} onClick={handleClick}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={blogImageOne}
                            />
                            <CardContent>
                            <Typography className={classes.articleTitle} gutterBottom variant="h5" component="h2">
                                Why I'm Learning To Code
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            It all started when I got on Twitter and started following people like Naval and Sahil who talked about coding as leverage.
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
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={blogImageTwo}
                            />
                            <CardContent>
                            <Typography className={classes.articleTitle} gutterBottom variant="h5" component="h2">
                                Combining Coding And Marketing
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            Lebron James, who is a physical force at 6’8 and 250 pounds can not only score at will, he can also pass. 
                            This allows him to be a unique talent. 
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
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            className={classes.media}
                            image={blogImageThree}
                            />
                            <CardContent>
                            <Typography className={classes.articleTitle} gutterBottom variant="h5" component="h2">
                                My Schedule For Learning To Code
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                            In the beginning, I would code as long as my head could take. 
                            While that’s not the best strategy, I knew I had to do it because my learning curve was steep.
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
                </Grid>
            </Grid>
        </div>
    )
}





export default Resume





