import React from 'react';
import './SearchBar.css';
import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';


//Material UI components
import Card from '@material-ui/core/Card';

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
        alignItems: 'center',
    },
    card: {
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2)',
        height: '300px',
        width: '100%',
        flex: '1'
    },
    boxOne: {
        width: '5px',
        height: '5px',
        border: '10px solid green',
        backgroundColor: 'green',
        borderRadius: '90%',
        position: 'relative',
        top: '110px',
        left: '47px',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
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
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    }
}))

export default function HeroDashboard() {
    const classes = useStyles();

    return (
        <div>
                <Card className= { `${classes.positioning} ${classes.card}` }>
                    <label>
                        <label>
                            <input class='input__field' type='text' placeholder='Website URL' />
                        </label>
                        <ButtonGroup>
                            <MoneyMaker style={{ marginRight: '15px', cursor: 'pointer' }}>Analyze</MoneyMaker>
                            <MoneyMaker type='reset' style={{ cursor: 'pointer' }}>Reset</MoneyMaker>
                        </ButtonGroup>
                    </label>
                </Card>
        </div>
    )
}