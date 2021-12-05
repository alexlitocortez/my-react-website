import React, {useState} from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import { FaWindowClose } from 'react-icons/fa';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import './WebsiteInvestment.css';


// Imported components
import { FaBars } from 'react-icons/fa';
import HeroDashboard from './HeroDashboard';
import LineChart from './Charts/Chart';
import Sidebar from './Sidebar';
import RevenueChart from './Charts/RevenueChart';
import TrafficChart from './Charts/TrafficChart';
import ExpensesChart from './Charts/ExpensesChart';
import RevenuePie from './Charts/RevenuePie';
import DropdownDashboard from './DropdownDashboard';
import TrafficButton from './WebsiteInvestmentButtons.js/Metric Buttons/TrafficButton';
import RevenueButton from './WebsiteInvestmentButtons.js/Metric Buttons/RevenueButton';
import ExpensesButton from './WebsiteInvestmentButtons.js/Metric Buttons/ExpensesButton';
import MonetizationButton from './WebsiteInvestmentButtons.js/Metric Buttons/MonetizationButton';

// Importing cards

const DashboardMenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        background-image: url(${FaBars});
        background-size: contain;
        height: 30px;
        width: 40px;
        color: white;
        cursor: pointer;
        position: absolute;
        top: 7rem;
        right: 0.6rem;
        transform: translateY(-50%, 25%);

        &:hover {
            opacity: 0.3;
            transition: 0.2s ease-in-out;
        }
    }
`;


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
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        fontWeight: '800'
    },
    hero: {
        backgroundColor: '#fff',
        height: '400px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        fontSize: '4rem'
    },
    lineChartAdjustment: {
        '@media (max-width: 768px)': {
            position: 'relative',
            right: '1.5rem'
        },
        '@media (max-width: 425px)': {
            display: 'none'
        }
    },
    blogsContainer: {
        position: 'relative',
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex'
    },
    money: {
        textDecoration: 'underline'
    },
    moneyMaker: {
        '@media (max-width: 768px)': {
            position: 'relative',
            top: '210px',
            right: '50px',
        },
    },
    searchBarShadow: {
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)'
    },
    titleContainer: {
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)'
    },
    card: {
        width: '25rem',
        height: '25rem',
        padding: '70px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
            width: '20rem'
        }
    },
    cardAction: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem'
    },
    cardActions: {
        marginTop: '3rem',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)'
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
    revenueAdjustment: {
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
    expenseAdjustment: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '3rem',
        position: 'relative',
        right: '1rem',
        '@media (max-width: 768px)': {
            position: 'relative',
            left: '1.6rem'
        }
    },
    revenuePieAdjustment: {
        '@media (max-width: 768px)': {
            position: 'relative',
        }
    },
    inactive: {
        display: 'none'
    }
}
));

function WebsiteInvestment() {
    const classes = useStyles();

    // useState for opening and closing side menu

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    }

    // useState for closing and opening the different card metrics

    const [show, setShow] = useState(false)

    const toggleShow = () => {
        show ? setShow(false) : setShow(true);
    }

    const [showTwo, setShowTwo] = useState(false)

    const toggleShowTwo = () => {
        showTwo ? setShowTwo(false) : setShowTwo(true);
    }

    const [showThree, setShowThree] = useState(false)

    const toggleShowThree = () => {
        showThree ? setShowThree(false) : setShowThree(true)
    }

    const [showFour, setShowFour] = useState(false)

    const toggleShowFour = () => {
        showFour ? setShowFour(false) : setShowFour(true)
    }

    // useState for button components

    const [showTraffic, setShowTraffic] = useState(false)

    const toggleDiv = () => {
        showTraffic ? setShowTraffic(false) : setShowTraffic(true)
    }

    const [showRevenue, setShowRevenue] = useState(false)

    const toggleDivTwo = () => {
        showRevenue ? setShowRevenue(false) : setShowRevenue(true)
    }

    const [showExpenses, setShowExpenses] = useState(false)

    const toggleDivThree = () => {
        showExpenses ? setShowExpenses(false) : setShowExpenses(true)
    }

    const [showMonetization, setShowMonetization] = useState(false)

    const toggleDivFour = () => {
        showMonetization ? setShowMonetization(false) : setShowMonetization(true)
    }

    return (
        <div>
            <AppBar position='static' style={{ backgroundColor: '#7510F7' }}>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'></IconButton>
                    <Typography variant='h6' className={classes.title} style={{marginLeft: 28}}>
                        Nichements
                    </Typography>
                    <DashboardMenuBars open={open} onClick={toggle} />
                    <DropdownDashboard open={open} toggle={toggle} />
            </AppBar>
            <div className='main-container'>
                <Sidebar />
                <div className='others'>
                <div className='nichementHeader'>
                    <h3 style={{ color: '#696969' }}>Website Valuation Estimate</h3>
                </div>
                <div className={classes.lineChartAdjustment}>
                    <LineChart />
                </div>
                <Container style={{ marginBottom: '15px' }} className='dashboardAdjustment'>
                    <HeroDashboard />
                </Container>

                    <Grid className={ `${classes.blogsContainer} ${classes.moneyMaker}` } container spacing={1}>
                        {
                            showTraffic ? <TrafficButton /> : null
                        }
                        <Card className={` ${classes.card} ${show ? classes.inactive : ''} `}>
                            <CloseButton onClick={() => {
                                    toggleShow();
                                    toggleDiv();
                            }}></CloseButton>
                            <div className='cardTitle'>
                                Traffic
                            </div>
                            <div className={classes.trafficAdjustment}>
                                <TrafficChart />
                            </div>
                        </Card>
                        {
                            showRevenue ? <RevenueButton /> : null
                        }
                        <Card className={` ${classes.card} ${showTwo ? classes.inactive : ''}`}>
                            <CloseButton onClick={() => {
                                    toggleShowTwo();
                                    toggleDivTwo();
                            }}></CloseButton>
                            <div className='cardTitle'>
                                Revenue
                            </div>
                            <div  className={classes.revenueAdjustment}>
                                <RevenueChart />
                            </div>
                        </Card>
                        {
                            showExpenses ? <ExpensesButton /> : null
                        }
                        <Card className={` ${classes.card} ${showThree ? classes.inactive : ''}`}>
                            <CloseButton onClick={() => {
                                    toggleShowThree();
                                    toggleDivThree();
                            }}></CloseButton>
                            <div className='cardTitle'>
                                Expenses
                            </div>
                            <div className={` ${classes.cardAction} ${classes.expenseAdjustment} `}>
                                <ExpensesChart />
                            </div>
                        </Card>
                        {
                            showMonetization ? <MonetizationButton /> : null
                        }
                        <Card className={` ${classes.card} ${showFour ? classes.inactive : ''}`}>
                            <CloseButton onClick={() => {
                                    toggleShowFour();
                                    toggleDivFour();
                            }}></CloseButton>
                            <div className='cardTitle'>
                                Monetization Split
                            </div>
                            <div className={` ${classes.revenuePieAdjustment} ${classes.cardActions} `}>
                                <RevenuePie />
                            </div>
                        </Card>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default WebsiteInvestment