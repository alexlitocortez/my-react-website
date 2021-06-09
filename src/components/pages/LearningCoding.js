import React from 'react';
import styled, {css} from 'styled-components';
import Box from '@material-ui/core/Box';
import './LearningCoding.css';

const moneyTime = styled.li`
    color: pink;
`;




function LearningCoding() {
    return (
        <div>
            <div className='container'>
                <Box p={5}>
                    I’ve lived in the Bay Area my whole life. Ironically, I’ve never been into technology until a couple years ago. 
                    It all started when I got on Twitter and started following people like Naval and Sahil who talked about coding as leverage. 
                    It’s a skill that’s valuable and free to learn. Looking into it, I saw all the advantages coding provides:
                </Box>
                <ul className='moneyTime'>
                    <li>Feedback loop</li>
                    <li>Creativity</li>
                    <li>Learn everyday</li>
                    <li>Side projects</li>
                    <li>Community</li>
                </ul>
            </div>
        </div>
    )
}


export default LearningCoding

