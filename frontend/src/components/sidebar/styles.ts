import styled from 'styled-components';
import { Link } from 'react-router';

export const Container = styled.aside`
    background-color: #ebebeb;
    min-width: 250px;
    width: 320px;
    height: 100%;
`;

export const SideBarEnterprise = styled.div``;

export const SideBarEmployee = styled.div`

`;

export const SideBarContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const SideBarList = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 10px;
    list-style-type: none;
`;

export const SideBarItem = styled.li``;

export const SideBarItemLink = styled(Link)<{ isActive: boolean }>`
    color: ${({ isActive }) => (isActive ? "#000" : "#434343")};
    background-color: ${({ isActive }) => (isActive ? "#FAFAFA" : "transparent")};
    font-weight: 600;
    text-decoration: none;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 10px;
    border-radius: 6px;
    font-size: 17px;
    transition: background-color 0.3s ease, color 0.3s ease;
`;

export const SideBarRow = styled.div`
    height: 1.3px;
    width: 93%;
    margin: 0 auto;
    background-color: black;
`;

export const SideBarFooter = styled.div`
    background-color: gray;
    width: 100%;
    border-radius: 4px;
`;

export const SideBarFooterButton = styled.button`
    width: 100%;
    border: 0;
    background-color: #434343;
    color: white;
    height: 100%;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
    transition: 0.4s;

    &:hover {
        background-color: #555555;
    };
`;