import styled from 'styled-components';
import { Link } from 'react-router';

export const Container = styled.aside`
    background-color: #ebebeb;
    min-width: 250px;
    width: 320px;
    height: 100%;
`;

export const SideBarEnterprise = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 15px;
`;

export const SideBarEmployee = styled.div`

`;

export const SideBarList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 10px;
    list-style-type: none;
`;

export const SideBarItem = styled.li`
    
`;

export const SideBarItemLink = styled(Link)`
    color: #434343;
    font-weight: bold;
    text-decoration: none;
    padding: 4px 6px;
    display: flex;
    align-items: center;
    gap: 8px;
    /* background-color: white; */
    border-radius: 6px;
    font-size: 18px;
`;

export const SideBarFooter = styled.div`
    background-color: gray;
    width: 100%;
`;