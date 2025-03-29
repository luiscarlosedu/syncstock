import styled from 'styled-components';

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const EmployeesContentContainer = styled.div`
    width: 100%;
    max-width: 1180px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;

export const EmployeeHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const EmployeeHeaderTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

export const EmployeeHeaderAdd = styled.button`
    background-color: #000;
    color: white;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    border: 0;
    font-size: 14px;
    transition: all .4s;

    &:hover {
        background-color: #333;
    }
`;