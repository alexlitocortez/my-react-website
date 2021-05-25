import React from 'react';

function Contact() {
    return (
        <div>
            <h1>Contact</h1>
            <form>
                <input
                    type='email'
                    name='email'
                    placeholder='Your Email'
                    className='footer-input'
                />
                <i className='far fa-address-book'></i>
            </form>
        </div>
    );
}

export default Contact

