import React, {useState} from 'react';
import Card from '@material-ui/core/Card';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import RevenueChart from '../../Charts/RevenueChart';
import RevenueButton from '../Metric Buttons/RevenueButton';
import './CloseButton.css';


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
    revenueAdjustment: {
        '@media (max-width: 768px)': {
            position: 'relative',
            left: '1.8rem'
        }
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
            <div className='cardTitle'>
                <div className='revenueTitle'>
                    Revenue
                </div>
                <div className='close' id='close' onClick={() => {
                    toggleShow();
                    toggleDiv();
                }}>
                </div>
            </div>
            <div className={classes.revenueAdjustment}>
                <RevenueChart />
            </div>
        </Card>
        </div>
    )
}

export default RevenueCard