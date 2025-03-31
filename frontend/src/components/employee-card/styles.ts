import styled, {keyframes} from "styled-components";

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

    svg { 
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

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(-10px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(-10px);
    }
`;

export const OptionsMenu = styled.div<{ isOpen: boolean }>`
    position: absolute;
    top: 35px;
    right: 10px;
    background: white;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    padding: 8px;
    min-width: 140px;
    display: flex;
    flex-direction: column;
    z-index: 10;

    animation: ${({ isOpen }) => (isOpen ? fadeIn : fadeOut)} 0.1s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
    pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;


export const OptionItem = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px;
    font-size: 14px;
    color: #333;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #f1f1f1;
    }

    svg {
        min-width: 14px;
        min-height: 14px;
    }
`;
