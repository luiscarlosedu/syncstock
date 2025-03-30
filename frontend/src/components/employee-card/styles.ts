import styled from "styled-components";

export const EmployeeCardContainer = styled.div`
    background: white;
    border-radius: 10px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    width: 280px;
    padding: 16px;
    display: flex;
    flex-direction: column;
    position: relative;
`;

export const EmployeePhoto = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background-color: #ccc;
`;

export const EmployeeName = styled.h3`
    margin: 10px 0 2px 0;
    font-size: 16px;
    font-weight: bold;
`;

export const EmployeeRole = styled.p`
    font-size: 13px;
    color: gray;
`;

export const EmployeeInfo = styled.div`
    width: 100%;
    margin-top: 8px;
    padding-top: 8px;
    border-top: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: gray;
`;

export const EmployeeData = styled.div`
    font-weight: bold;
    font-size: 14px;
    color: black;
`;

export const EmployeeInfoData = styled.div``;

export const EmployeeInfoDataName = styled.p``;

export const ContactInfo = styled.div`
    width: 100%;
    margin-top: 12px;
    font-size: 12.5px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 8px;
    overflow: hidden;

    svg { /* Aqui você força um tamanho fixo nos ícones */
        min-width: 14px;
        min-height: 14px;
    }
`;


export const OptionsButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    color: #888;
`;