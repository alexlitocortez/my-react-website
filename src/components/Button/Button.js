import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
    white-space: nowrap;
    outline: none;
    border: none;
    min-width: 100px;
    max-width: 400px;
    cursor: pointer;
    text-decoration: none;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;

    &:hover {
        transform: translateY(-2px);
    }
`;

export default Button