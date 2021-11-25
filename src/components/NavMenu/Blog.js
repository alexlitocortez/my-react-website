import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import './Blog.css';

// Images
import myCharacter from '../../images/caricature.jpg';
import blogImageOne from '../../images/blog_image_1.jpg';
import blogImageTwo from '../../images/blog_image_2.jpg';
import blogImageThree from '../../images/blog_image_3.jpg'

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
        color: '#08D665',
        fontWeight: 'bold',
    },
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        alignItems: 'flex-start'
    },
    header: {
        color: 'black'
    }
    }))

function Blog() {
    const classes = useStyles();


    return (
        <div>
            <Box className={classes.hero}>
                <Box id='blog' style={{ color: '#3e3e3e' }}>Blog</Box>
            </Box>
            <div className='container' style={{ marginBottom: '5rem' }}>
                <div className='row' id='blogContainer'>
                    <div className='col-4 col-6-medium col-12-small'><Link to='/learningcoding' style={{ textDecoration: 'none' }}>
                        <article className='box style2'>
                            <div className="image featured"><img src={blogImageOne} /></div>
                            <h3 className={classes.header}>Why I'm Learning To Code</h3>
                        </article>
                    </Link></div>
                    <div className='col-4 col-6-medium col-12-small'><Link to='/combining' style={{ textDecoration: 'none' }}>
                        <article className='box style2'>
                            <div className="image featured"><img src={blogImageTwo} /></div>
                            <h3 className={classes.header}>Coding And Marketing</h3>
                        </article>
                    </Link></div>
                    <div className='col-4 col-6-medium col-12-small'><Link to='/schedule' style={{ textDecoration: 'none' }}>
                        <article className='box style2'>
                            <div className="image featured"><img src={blogImageThree} /></div>
                            <h3 className={classes.header}>Schedule For Coding</h3>
                        </article>
                    </Link></div>
                </div>
            </div>
        </div>
    )
}





export default Blog













