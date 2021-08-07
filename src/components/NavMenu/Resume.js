import React, {Component} from 'react';
import styled from 'styled-components';
import Footer from '../Footer/Footer';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container'
import './Resume.css';


const useStyles = makeStyles((theme) => ({
    PDFHeader: {
        backgroundColor: 'white',
        width: '800px',
        margin: 'auto',
        textAlign: 'center',
        color: 'black'
    },
    jobDuties: {
        textAlign: 'center',
        marginBottom: '1em',
        listStyle: 'none'
    }
}
));

const SpaceMaker = styled.div`
    margin-bottom: 5em;
`;

function Resume() {
    const classes = useStyles();

    return (
        <div style={{ backgroundColor: '#323639', color: '#fffdd0', zIndex: 1000 }}>
                    <Container className={classes.PDFHeader}>
                            <h1 style={{ fontWeight: 70 }}>Alex Cortez</h1>
                            <h3 style={{ textAlign: 'center' }}>alexlitocortez@gmail.com</h3>

                            <SpaceMaker />
                            <h1>EXPERIENCE</h1>
                            <hr style={{ width: 300 }}></hr>
                            <h1 style={{ fontWeight: 300, marginBottom: '1em' }}>Rizzle</h1>
                            <h3 style={{ marginBottom: '1em' }}>Growth Marketer</h3>
                                    <ul className={classes.jobDuties}>
                                        <li>Develop brand awareness through influencer partnerships</li>
                                        <li>Develop content for website</li>
                                        <li>Implement A/B testing for different traffic channels</li>
                                    </ul>
                            <h3 style={{ marginBottom: '3em' }}>2019-2020</h3>
                            <h1 style={{ fontWeight: 300, marginBottom: '1em' }}>TriAudioSound, Inc.</h1>
                            <h3 style={{ marginBottom: '1em' }}>Digital Marketing Contractor</h3>
                                    <ul className={classes.jobDuties}>
                                        <li>Maintained campaigns in paid search and social to drive online leads</li>
                                        <li>Conducted keyword research via query reports to ensure we reached qualified consumers</li>
                                        <li>Created website content via keyword research to generate organic traffic</li>
                                    </ul>
                            <h3>2018-2019</h3>
                            <SpaceMaker />
                            <h1>SKILLS</h1>
                            <hr style={{ width: 300 }}></hr>
                                    <ul className={classes.jobDuties}>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Javascript</li>
                                        <li>React</li>
                                    </ul>
                            <SpaceMaker />
                            <h1>EDUCATION</h1>
                            <hr style={{ width: 300 }}></hr>
                            <h1 style={{ fontWeight: 300, marginBottom: '1em' }}>San Francisco State University</h1>
                            <h3 style={{ marginBottom: '1em' }}>B.S. In Business Administration (Accounting)</h3>
                            <h3 style={{ marginBottom: '3em' }}>2014-2016</h3>

                            <hr style={{ width: 300 }}></hr>
                    </Container>
                    <div className='footer'>
                        <Footer />
                    </div>
        </div>
        
    )
}

export default Resume


