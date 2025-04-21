import styled from "styled-components";

export const Container = styled.div`
    background-color: #fff;
    padding: 20px 20px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const InfoItem = styled.div`
    display: flex;
    gap: 20px;
`;

export const InfoItemName = styled.label`
    font-weight: bold;
    color: #444;
    font-size: 16px;
    min-width: 80px;
`;

export const InfoItemValue = styled.p`
    font-size: 16px;
    color: #222;
`;