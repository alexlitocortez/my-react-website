import React from 'react';
import './SearchBar.css';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    positioning: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    card: {
        boxShadow: '0 3px 5px 2px rgba(0, 0, 0, 0.2);',
        width: '500px',
        height: '300px'
    }
}))

export default function SearchBars() {
    const classes = useStyles();

    return (
        <Grid className={ `${classes.positioning} ${classes.card}` }>
            <label className='input'>
                <input className='input__field' type='text' placeholder='Website URL' />
                <span className='input__label'></span>
            </label>
            <div className="button-group">
                <button>Analyze</button>
                <button type='reset'>Reset</button>
            </div>
        </Grid>
    )
}


