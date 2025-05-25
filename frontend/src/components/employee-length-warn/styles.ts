import styled from 'styled-components';
import { Link } from 'react-router';

export const EmployeeWarn = styled.p`
    background-color: #202020;
    border-radius: 6px;
    margin-bottom: 15px;
    color: white;
    font-size: 13px;
    gap: 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 20px;
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
`;

export const EmployeeWarnLink = styled(Link)`
    background-color: white;
    color: black;
    padding: 5px 10px;
    text-decoration: none;
    border-radius: 6px;
`;