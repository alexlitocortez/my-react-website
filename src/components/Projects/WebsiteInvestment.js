import React, {useState} from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
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
        top: 175px;
        right: 0;
        transform: translateY(-50%, 25%);

        &:hover {
            opacity: 0.3;
            transition: 0.2s ease-in-out;
        }
    }
`;

const MoneyClocks = styled.div`
    position: relative;
    bottom: 70px;
    right: 20px;
`;

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
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
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
    cardTitle: {
        fontWeight: 800,
        color: 'black',
        position: 'relative',
        color: '#696969',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        width: '400px',
        height: '350px',
        padding: '70px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
            width: '410px',
        }
    },
    cardAction: {
        display: 'flex'
    }
}
));




function WebsiteInvestment() {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open)
    }

    const message = () => {
        var card = document.getElementById('card');
        if(document.getElementById('close').clicked == true) {
            card.style.display = 'none';
        }
    }

    return (
        <div>
            <AppBar position='static'>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                    </IconButton>
                    <Typography variant='h6' className={classes.title} style={{marginLeft: 28}}>
                        Nichements
                    </Typography>
                    <DashboardMenuBars open={open} onClick={toggle} />
                    <DropdownDashboard open={open} toggle={toggle} />
            </AppBar>
            <div className='main-container'>
                <Sidebar />
                <div className='others'>
                <LineChart />
                <Container style={{ marginBottom: '15px' }}>
                    <HeroDashboard />
                </Container>
                    <Grid className={ `${classes.blogsContainer} ${classes.moneyMaker}` } container spacing={1}>
                        <Card className={classes.card} id='card'>
                            <Container className={classes.cardTitle}>
                                Traffic
                                <div className='close' id='close'></div>
                            </Container>
                            <Line />
                            <Box className={classes.cardAction}>
                                    <TrafficChart />
                            </Box>
                        </Card>
                        <Card className={classes.card}>
                            <Container className={classes.cardTitle}>
                                Revenue
                                <div className='close' id='close'></div>
                            </Container>
                            <Line />
                            <Box className={classes.cardAction}>
                                <containerForCharts>
                                    <RevenueChart />
                                </containerForCharts>
                            </Box>
                        </Card>
                        <Card className={classes.card}>
                        <Container className={classes.cardTitle}>
                            Expenses
                            <div className='close' id='close'></div>
                        </Container>
                            <Line />
                            <Box className={classes.cardAction}>
                                <containerForCharts>
                                    <ExpensesChart />
                                </containerForCharts>
                            </Box>
                        </Card>
                        <Card className={classes.card}>
                            <Container className={classes.cardTitle}>
                                Monetization Split
                                <div className='close' id='close'></div>
                            </Container>
                            <Line />
                            <Box className={classes.cardAction}>
                                <MoneyClocks>
                                    <RevenuePie />
                                </MoneyClocks>
                            </Box>
                        </Card>
                    </Grid>
                </div>
            </div>
        </div>
    );
}

export default WebsiteInvestment


//Make the X icons close the charts and rearrange the boxes




// Take out the dog project and add my NBA project
// Style projects so they look appealing
// Fix home page
