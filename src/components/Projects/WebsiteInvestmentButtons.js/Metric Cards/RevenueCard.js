import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import RevenueChart from '../../Charts/RevenueChart';
import RevenueButton from '../Metric Buttons/RevenueButton';

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
    revenueAdjustment: {
        '@media (max-width: 768px)': {
            position: 'relative',
            left: '1.8rem'
        }
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem'
    },
    inactive: {
        display: 'none'
    }
}))



function RevenueCard() {

    const classes = useStyles();

    const [show, setShow] = useState(false)

    const toggleShow = () => {
        show ? setShow(false) : setShow(true)
    }

    const [showRevenue, setShowRevenue] = useState(false)

    const toggleDiv = () => {
        showRevenue ? setShowRevenue(false) : setShowRevenue(true)
    }

    return (
        <div>
            {
                showRevenue ? <RevenueButton /> : null
            }
        <Card className={` ${classes.card} ${show ? classes.inactive : ''}`}>
            <Container className={classes.cardTitle}>
                Revenue
                    <div className='close' id='close' onClick={() => {
                        toggleShow();
                        toggleDiv();
                    }}>
                    </div>
            </Container>
            <Line className={classes.lineAdjustment} />
            <div className={` ${classes.revenueAdjustment} ${classes.cardAction}`}>
                <RevenueChart />
            </div>
        </Card>
        </div>
    )
}

export default RevenueCard