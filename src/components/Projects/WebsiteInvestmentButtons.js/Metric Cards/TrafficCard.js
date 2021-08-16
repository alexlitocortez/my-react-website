import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import TrafficChart from '/Users/l/my-react-website/src/components/Projects/Charts/TrafficChart.js';
import TrafficButton from '/Users/l/my-react-website/src/components/Projects/WebsiteInvestmentButtons.js/Metric Buttons/TrafficButton.js';
import '/Users/l/my-react-website/src/components/Projects/WebsiteInvestment.css';

const Line = styled.div`
    height: 0.4px;
    width: 25em;
    transform: rotate(0deg);
    border: 1px solid #E0E0E0;
    display: block;
    position: relative;
    top: 30px;
`;

const useStyles = makeStyles((theme) => ({
    card: {
        width: '400px',
        height: '350px',
        padding: '70px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
            width: '410px'
        }
    },
    cardTitle: {
        fontWeight: 800,
        color: 'black',
        position: 'relative',
        color: '#696969',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '@media (max-width: 768px)': {
            position: 'relative',
            left: '2rem'
        }
    },
    lineAdjustment: {
        '@media (max-width: 768px)': {
            position: 'relative',
            left: '2.2rem'
        }
    },
    trafficAdjustment: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        position: 'relative',
        right: '1rem',
        '@media (max-width: 768px)': {
            position: 'relative',
            left: '1rem'
        }
    },
    inactive: {
        display: 'none'
    }
}))

function TrafficCard() {

    const classes = useStyles();

    const [show, setShow] = useState(false)

    const toggleShow = () => {
        show ? setShow(false) : setShow(true)
    }

    const [showTraffic, setShowTraffic] = useState(false)

    const toggleDiv = () => {
        showTraffic ? setShowTraffic(false) : setShowTraffic(true)
    }

    return (
        <div>
        <Card className={` ${classes.card} ${show ? classes.inactive : ''}`}>
            <Container className={classes.cardTitle}>
                Traffic
                    <div className='close' id='close' onClick={() => {
                        toggleShow();
                        toggleDiv();
                    }}>
                    </div>
            </Container>
            <Line className={classes.lineAdjustment} />
            <div className={classes.trafficAdjustment}>
                <TrafficChart />
            </div>
        </Card>
        {
            showTraffic ? <TrafficButton /> : null
        }
        </div>
    )
}

export default TrafficCard


// It works but when I click the button and the div appears and click the X again, it doesn't show the button