import React from 'react';
import './SearchBar.css';
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';
import './SearchBar.css';


//Material UI components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

const Source = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    font-size: 32px;
    padding: 20px;
`;

const Revenue = styled.div`
    color: #696969;
`;

const Percentage = styled.div`
    text-align: right;
    color: #696969;
`;

const Monetization = styled.li`
    font-size: 20px;
    margin-top: 5px;
    margin-bottom: 20px;
    color: #A9A9A9;
`;

const ButtonGroup = styled.div`
    margin-top: calc(var(--size-bezel) * 2.5);
    display: flex;
`;

const MoneyMaker = styled.button`
    color: currentColor;
    padding: var(--size-bezel) calc(var(--size-bezel) * 2);
    background: var(--color-accent);
    border: none;
    border-radius: var(--size-radius);
    font-weight: 900;
    justify-content: space-around;
`;


const useStyles = makeStyles((theme) => ({
    positioning: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2);',
        width: '500px',
        height: '300px',
        position: 'relative',
        left: '100px'
    },
    boxOne: {
        width: '5px',
        height: '5px',
        border: '10px solid green',
        backgroundColor: 'green',
        borderRadius: '90%',
        position: 'relative',
        top: '110px',
        left: '47px'
    },
    boxTwo: {
        width: '5px',
        height: '5px',
        border: '10px solid royalblue',
        backgroundColor: 'royalblue',
        borderRadius: '10px',
        position: 'relative',
        top: '127px',
        left: '47px',
        borderRadius: '90%'
    }
}))

export default function HeroDashboard() {
    const classes = useStyles();

    return (
        <div>
            <Grid className='overall'>
                <Card className={classes.card}>
                    <div style={{ textAlign: 'center', fontSize: '32px', marginTop: '20px' }}>Monetization</div>
                    <div className={classes.boxOne}></div>
                    <div className={classes.boxTwo}></div>
                    <Source>
                        <Revenue>
                            <div style={{ position: 'relative', bottom: '30px' }}>Source</div>
                            <div style={{ listStyle: 'none', marginTop: '5px' }}>
                                <Monetization>Affiliate</Monetization>
                                <Monetization>Display Ads</Monetization>
                            </div>
                        </Revenue>
                        <Percentage>
                            <div style={{ position: 'relative', bottom: '30px' }}>Share</div>
                            <div style={{listStyle: 'none'}}>
                                <Monetization>70%</Monetization>
                                <Monetization>30%</Monetization>
                            </div>
                        </Percentage>
                    </Source>
                </Card>
                <Card className= { `${classes.positioning} ${classes.card}` }>
                    <label>
                        <label>
                            <input class='input__field' type='text' placeholder='Website URL' />
                            <span className='input__label' style={{ textAlign: 'center' }}>Enter Website</span>
                        </label>
                        <ButtonGroup>
                            <MoneyMaker style={{ marginRight: '15px' }}>Analyze</MoneyMaker>
                            <MoneyMaker type='reset'>Reset</MoneyMaker>
                        </ButtonGroup>
                    </label>
                </Card>
            </Grid>
        </div>
    )
}