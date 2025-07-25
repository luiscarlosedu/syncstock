import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    border-radius: 8px;
`;

export const StatusCard = styled.div`
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 16px;
    border-radius: 8px;
    width: 100%;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    border: 0.1px solid white;
    user-select: none;
    transition: all .4s;

    &:hover {
        background-color:rgb(247, 247, 247);
        border: 0.1px solid rgba(0, 0, 0, 0.25);
    }
`;

export const StatusCardIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
`;

export const StatusCardContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StatusValue = styled.span`
    font-weight: bold;
    font-size: 18px;
    color: #202020;
`;

export const StatusTitle = styled.span`
    font-size: 14px;
    color: #555;
`;