import React, { useRef } from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';
import emailjs from 'emailjs-com';
import { makeStyles } from '@material-ui/core';


const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;

    @media only screen and (max-width: 728px) {
        display: block;
        position: relative;
        top: 550px;
    }
`;

const StyledForm = styled.form`
    width: 100%;
    max-width: 700px;
    padding: 40px;
    background-color: #fff;
    border-radius: 10px;
    box-sizing: border-box;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    color: black;

    h2 {
        color: black;
    }
`;

const StyledInput = styled.input`
    display: block;
    width: 100%;
`;

const StyledFieldset = styled.fieldset`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin: 20px 0;

    legend {
        padding: 0 10px;
    }

    label {
        padding-right: 20px;
    }

    input {
        margin-right: 10px;
    }
`;

const StyledButton = styled.button`
    border: 0;
    border-radius: 5px;
    height: 40px;
    margin-top: 30px;
    cursor: pointer;
`;

const useStyles = makeStyles((theme) => ({
    button: {
        display: 'block',
        backgroundColor: '#b22222',
        color: '#fff',
        fontSize: '.9rem',
        border: '0',
        borderRadius: '5px',
        padding: '1rem',
        height: '40px',
        marginTop: '30px',
        cursor: 'pointer',
        '&:hover': {
            padding: '1.1rem',
            transition: '0.3s ease-in-out'
        }
    }
}))


export const Contact = () => {
    const form = useRef();

    const classes = useStyles();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_nm8tjnh', 'template_rpi8ygv', e.target, 'user_fuw0r1aTNZuCkUk0b77am')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    return (

        <StyledFormWrapper>
            <StyledForm ref={form} onSubmit={sendEmail}>
                <div id='contact'><h2 style={{ marginBottom: '2rem' }}>Contact Form</h2></div>
                <label>Name</label>
                <StyledInput type='text' name='name' style={{ marginBottom: '2rem', minHeight: '25px' }}/>
                <label>Email</label>
                <StyledInput type='email' name='email' style={{ marginBottom: '2rem', minHeight: '25px' }}/>
                <label>Message</label>
                <StyledFieldset>
                    <textarea name='message' style={{ width: '100%', minHeight: '100px' }}/>
                </StyledFieldset>
                <StyledButton className={classes.button} type='submit'>
                    Send Message
                </StyledButton>
            </StyledForm>
        </StyledFormWrapper>
    )
}

export default Contact