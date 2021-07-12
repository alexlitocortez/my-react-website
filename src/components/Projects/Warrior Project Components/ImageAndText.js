import React, {useState} from 'react';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';
import './ImageAndText.css';


// Warrior images
import curry from '/Users/l/my-react-website/src/images/curry.jpg';
import oubre from '/Users/l/my-react-website/src/images/oubre.jpg';
import wiggins from '/Users/l/my-react-website/src/images/wiggins.jpeg';
import green from '/Users/l/my-react-website/src/images/green.jpg';
import wiseman from '/Users/l/my-react-website/src/images/wiseman.jpg';


const useStyles = makeStyles((theme) => ({
    playerImage: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        height: '600px',
        width: '600px'
    },
    namePlacement: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center'
    },
    buttonPlacement: {
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: '2rem'
    }
}))


function ImageAndText() {
    const [warriorImage, setWarriorImage] = useState([])

    const addItem = () => {
        setWarriorImage([
            curryOne= curry,
            oubreTwo= oubre,
            wigginsThree = wiggins,
            greenFour = green,
            wisemanFive = wiseman
        ])
    }

    const classes = useStyles()

    return (
        <div>
            <Container className={classes.playerImage}>
            <img className={styles.fade} alt='Warriors player'></img>
            </Container>
            <Container>
                <h1><span id={styles['thisone']}>Stephen Curry</span></h1>
            </Container>
            <Box className={classes.buttonPlacement}>
                <button type='button' className={styles.button} id='button' onClick={addImage}>Change Player</button>
            </Box>
            <br></br>
        </div>
    )
}

export default ImageAndText