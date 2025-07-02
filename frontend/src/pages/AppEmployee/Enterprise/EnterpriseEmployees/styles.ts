import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const EmployeeCard = styled.div`
    background-color: #F1F1F1;
    padding: 15px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 15px;
    border: 0.1px solid white;
    user-select: none;
    transition: all .4s;

    &:hover {
        background-color:rgb(247, 247, 247);
        border: 0.1px solid rgba(0, 0, 0, 0.25);
    }
`;

export const EmployeeAvatar = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: #202020;
`;

export const EmployeeInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const EmployeeName = styled.span`
    font-size: 16px;
    font-weight: bold;
    color: #202020;
`;

export const EmployeeEmail = styled.span`
    font-size: 13px;
    color: #888;
`;

export const NoEmployeesContainer = styled.div`
    text-align: center;
    padding: 40px 20px;
    border-radius: 8px;
    background-color: #f9f9f9;
    border: 1px dashed #ccc;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`;

export const NoEmployeesIcon = styled.div`
    font-size: 48px;
`;

export const NoEmployeesTitle = styled.h2`
    font-size: 18px;
    font-weight: 600;
    color: #333;
`;

export const NoEmployeesText = styled.p`
    font-size: 14px;
    color: #666;
`;