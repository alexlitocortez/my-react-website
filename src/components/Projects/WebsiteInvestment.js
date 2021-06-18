import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

// React Icons
import { GiMoneyStack } from 'react-icons/gi';


// Importing SearchBar component
import SearchBar from './SearchBar';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1.
    },
    hero: {
        backgroundColor: '#fff',
        height: '400px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '4rem'
    },
    cardTitle: {
        fontWeight: 800,
        paddingBottom: theme.spacing(3),
        color: 'black'
    },
    blogsContainer: {
        paddingTop: theme.spacing(3),
        overflow: 'auto',
        position: 'relative',
        top: '100px'
    },
    searchBar: {
        height: '20px',
        width: '20px'
    },
    card: {
        width: '500px',
        marginLeft: '22px'
    },
    content: {
        height: '400px'
    },
    cardAction: {
        display: 'flex'
    }
}));

function WebsiteInvestment() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <IconButton edge='start' className={classes.menuButton} color='inherit' aria-label='menu'>
                    </IconButton>
                    <Typography variant='h6' className={classes.title}>
                        Nichements
                    </Typography>
                    <Button color='inherit'></Button>
                </Toolbar>
            </AppBar>
            <Grid className={classes.hero}>
                <Box className={classes.searchBar}>
                    <SearchBar /> 
                </Box>
            </Grid>
            <Grid className={classes.blogsContainer} container spacing={3}>
                <Grid>
                    <Card className={classes.card}>
                        <CardActionArea>
                            <Typography className={classes.cardTitle}>Traffic</Typography>
                        </CardActionArea>
                    </Card>
                </Grid>
                <Grid>
                    <Card className={classes.card}>
                        <Typography className={classes.cardTitle}>Potential Revenue</Typography>
                    </Card>
                </Grid>
                <Grid>
                    <Card className={classes.card}>
                        <Box className={classes.cardAction}>
                            <GiMoneyStack />
                            <Typography className={classes.cardTitle}>
                                Potential Expenses<br></br>
                                $500
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            </Grid>
        </div>
    );
}

export default WebsiteInvestment