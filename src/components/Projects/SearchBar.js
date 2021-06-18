import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
    <>
    <div>
        <div className='searchbar-section'>
            <form action='/' method='get'>
                <label htmlFor='header-search'>
                </label>
                <input
                    className='input'
                    type='text'
                    id='header-search'
                    placeholder='Website URL'
                    name='s'
                />
                <div className="button-container">
                    <button className='analyze' type='submit'>Analyze</button>
                </div>
            </form>
        </div>
    </div>
    </>
    )
};

export default SearchBar;