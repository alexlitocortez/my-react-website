import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import TrafficChart from '/Users/l/my-react-website/src/components/Projects/Charts/TrafficChart.js';
import TrafficButton from '/Users/l/my-react-website/src/components/Projects/WebsiteInvestmentButtons.js/Metric Buttons/TrafficButton.js';
import './CloseButton.css';

const CloseButton = styled(FaWindowClose)`
    height: 1.5rem;
    width: 1.5rem;
    position: relative;
    left: 26rem;
    bottom: 2.5rem;
    cursor: pointer;
    color: red;
`;


const useStyles = makeStyles((theme) => ({
    card: {
        width: '400px',
        height: '350px',
        padding: '70px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
            width: '300px'
        },
        '@media (max-width: 320px)': {
            width: '10rem'
        }
    },
    trafficAdjustment: {
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
            {
                showTraffic ? <TrafficButton /> : null
            }
        <Card className={` ${classes.card} ${show ? classes.inactive : ''} `}>
            <CloseButton onClick={() => {
                        toggleShow();
                        toggleDiv();}}>
            </CloseButton>
            <div className='cardTitle'>
                Traffic
            </div>
            <div className={classes.trafficAdjustment}>
                <TrafficChart />
            </div>
        </Card>
        </div>
    )
}

export default TrafficCard