import React from 'react';
import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import TrafficChart from '../Charts/TrafficChart';
import { makeStyles } from 'react-native-elements';

const Line = styled.div`
    height: 0.4px;
    width: 25em;
    transform: rotate(0deg);
    border: 1px solid #E0E0E0;
    background-color: #E0E0E0;
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
    }
}))


function TrafficCard() {
    return (
        <div>
            <Card className={` ${classes.card} ${}`}>
                <Container>
                <div className='close' id='close' onClick={() => {
                    toggleShow();
                    toggleDiv();
                }}></div>
                </Container>
                <Line />
                <div>
                    <TrafficChart />
                </div>
            </Card>
        </div>
    )
}

export default TrafficCard





<Card className={` ${classes.card} ${show ? classes.inactive : ''}`} id='card'>
                            <Container className={classes.cardTitle}>
                                Traffic
                                <div className='close' id='close' onClick={() => {
                                    toggleShow();
                                    toggleDiv();
                                }}></div>
                            </Container>
                            <Line className={classes.lineAdjustment} />
                            <div className={classes.trafficAdjustment}>
                                <TrafficChart />
                            </div>
                        </Card>