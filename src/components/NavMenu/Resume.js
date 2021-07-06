import React from 'react';
import styled from 'styled-components';
import './Resume.css';
import Footer from '../Footer/Footer';



const CenterHeader = styled.div`
    text-align: center;
`;

const SpaceMaker = styled.div`
    margin-bottom: 10em;
`;



function Resume() {
    return (
        <div style={{ backgroundColor: '#707070', color: '#fffdd0' }}>
            <CenterHeader>
                <h1 style={{ fontWeight: 70 }}>Alex Cortez</h1>
                <SpaceMaker />
                <h1>Resume</h1>
                <SpaceMaker />
                <h1>Experience</h1>
                <hr style={{ width: 300 }}></hr>
                <h1 style={{ fontWeight: 300, marginBottom: '1em' }}>Rizzle</h1>
                <h3 style={{ marginBottom: '1em' }}>Growth Marketer</h3>
                        <ul style={{ listStyle: 'none', marginBottom: '1em' }}>
                            <li>Develop brand awareness through influencer partnerships</li>
                            <li>Develop content for website</li>
                            <li>Implement A/B testing for different traffic channels</li>
                        </ul>
                <h3 style={{ marginBottom: '3em' }}>2019-2020</h3>
                <h1 style={{ fontWeight: 300, marginBottom: '1em' }}>TriAudioSound, Inc.</h1>
                <h3 style={{ marginBottom: '1em' }}>Digital Marketing Contractor</h3>
                        <ul style={{ listStyle: 'none', marginBottom: '1em' }}>
                            <li>Maintained campaigns in paid search and social to drive online leads</li>
                            <li>Conducted keyword research via query reports to ensure we reached qualified consumers</li>
                            <li>Created website content via keyword research to generate organic traffic</li>
                        </ul>
                <h3>2018-2019</h3>
                <SpaceMaker />
                <h1>Skills</h1>
                <hr style={{ width: 300 }}></hr>
                        <ul style={{ listStyle: 'none' }}>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Javascript</li>
                            <li>React</li>
                        </ul>
                <SpaceMaker />
                <h1>Education</h1>
                <hr style={{ width: 300 }}></hr>
                <h1 style={{ fontWeight: 300, marginBottom: '1em' }}>San Francisco State University</h1>
                <h3 style={{ marginBottom: '1em' }}>B.S. In Business Administration (Accounting)</h3>
                <h3 style={{ marginBottom: '3em' }}>2014-2016</h3>
            </CenterHeader>
            <div className='footer'>
                <Footer />
            </div>
            <hr style={{ width: 300 }}></hr>
            <h3 style={{ textAlign: 'center' }}>alexlitocortez@gmail.com</h3>
        </div>
    )
}

export default Resume
