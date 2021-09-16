import React from 'react';
import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        background: white;
        height: 100%;
        margin: 0;
        color: #fff;
    }
`;

const sharedStyles = css`
    background-color: #eee;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #ddd;
    margin: 10px 0 20px 0;
    padding: 20px;
    box-sizing: border-box;
`;

const StyledFormWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    padding: 0 20px;
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
    ${sharedStyles};
`;

const StyledTextArea = styled.textarea`
    background-color: #eee;
    width: 100%;
    min-height: 100px;
    resize: none;
    ${sharedStyles};
`;


const StyledButton = styled.button`
    display: block;
    background-color: #00BFFF;
    color: #fff;
    font-size: .9rem;
    border: 0;
    border-radius: 5px;
    height: 40px;
    padding: 0 20px;
    margin-top: 30px;
    cursor: pointer;
    box-sizing: border-box;
`;

const StyledFieldset = styled.fieldset`
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    margin- 20px 0;

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

function Contact() {
    return (
        <>
            <GlobalStyle />
            <StyledFormWrapper>
                <StyledForm className='contact-form'>
                    <h2>Contact Form</h2>
                    <label htmlFor='name'>Name</label>
                    <StyledInput type='name' name='name' id='name'/>
                    <label htmlFor='email'>Email</label>
                    <StyledInput type='email' name='email' id='email'/>
                    <StyledFieldset>
                        <label htmlFor='message' id='message'>Message</label>
                        <StyledTextArea name='message' />
                    </StyledFieldset>
                <StyledButton type='submit'>Send Message</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
        </>
    );
}

export default Contact

