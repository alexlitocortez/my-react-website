import React, {useState} from 'react'
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { FaWindowClose } from 'react-icons/fa';
import { makeStyles } from '@material-ui/core/styles';
import ExpensesChart from '../../Charts/ExpensesChart';
import ExpensesButton from '../Metric Buttons/ExpensesButton';

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
    expenseAdjustment: {
        '@media (max-width: 768px)': {
            position: 'relative',
            left: '1.6rem'
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

function ExpenseCard() {

    const classes = useStyles();

    const [show, setShow] = useState(false)

    const toggleShow = () => {
        show ? setShow(false) : setShow(true)
    }

    const [showExpenses, setShowExpenses] = useState(false)

    const toggleDiv = () => {
        showExpenses ? setShowExpenses(false) : setShowExpenses(true)
    }

    return (
            <div>
                {
                    showExpenses ? <ExpensesButton /> : null
                }
            <Card className={` ${classes.card} ${show ? classes.inactive : ''}`}>
                <CloseButton onClick={() => {
                            toggleShow();
                            toggleDiv();
                        }}>

                </CloseButton>
                <div className='cardTitle'>
                    Expenses
                </div>
                <div className={` ${classes.expenseAdjustment} ${classes.cardAction}`}>
                    <ExpensesChart />
                </div>
            </Card>
            </div>
    )
}

export default ExpenseCard
