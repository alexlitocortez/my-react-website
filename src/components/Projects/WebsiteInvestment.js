import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import './WebsiteInvestment.css';
import HeroDashboard from './HeroDashboard';

// React Icons
import { MdAttachMoney } from 'react-icons/md';
import { BsGraphUp } from 'react-icons/bs';
import { GiMoneyStack } from 'react-icons/gi';

import { FaBars } from 'react-icons/fa';
import LineChart from './Charts/Chart';
import Sidebar from './Sidebar';
import RevenueChart from './Charts/RevenueChart';

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

const MoneyTime = styled.div`
    position: relative;
    top: 200px;
    height: 1000px;
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
        paddingBottom: theme.spacing(3),
        color: 'black',
        marginLeft: '30%'
    },
    blogsContainer: {
        position: 'relative',
        justifyContent: 'space-around',
        alignItems: 'center',
        display: 'flex'
    },
    monetization: {
        padding: '50px',
        height: '300px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)'
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
    card: {
        width: '200px',
        height: '300px',
        padding: '70px',
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        '@media (max-width: 768px)': {
            width: '410px'
        }
    },
    content: {
        height: '400px'
    },
    cardAction: {
        display: 'flex'
    }
}));


function WebsiteInvestment(toggle) {
    const classes = useStyles();

    return (
        <div>
            <AppBar position='static'>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                    </IconButton>
                    <Typography variant='h6' className={classes.title} style={{marginLeft: 28}}>
                        Nichements
                    </Typography>
                    <DashboardMenuBars onClick={toggle} />
            </AppBar>
            <div className='main-container'>
                <Sidebar />
                <div className='others'>
                <LineChart />
                <Grid className={classes.hero}>
                    <HeroDashboard />
                </Grid>
                    <Grid className={ `${classes.blogsContainer} ${classes.moneyMaker}` } container spacing={1}>
                        <Card className={classes.card}>
                            <Box className={classes.cardAction}>
                                <BsGraphUp size={40}/>
                                <Typography className={classes.cardTitle} style={{color: 'royalblue'}}>Traffic</Typography>
                            </Box>
                        </Card>
                        <Card className={classes.card}>
                            <Box className={classes.cardAction}>
                                <MdAttachMoney size={40}/>
                                <Typography className={classes.cardTitle} style={{color: 'green'}}>Potential Revenue</Typography>
                            </Box>
                        </Card>
                        <Card className={classes.card}>
                            <Box className={classes.cardAction}>
                                <GiMoneyStack size={40}/>
                                <Typography className={classes.cardTitle} style={{color: 'red'}}>Potential Expenses</Typography>
                            </Box>
                        </Card>
                    </Grid>
                    <MoneyTime>
                        <RevenueChart />
                    </MoneyTime>
                </div>
            </div>
        </div>
    );
}

export default WebsiteInvestment


// Get dropdown arrows placed all the way to the right
// get dropdown menu to show up