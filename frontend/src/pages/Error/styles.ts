import styled from "styled-components";

export const Container = styled.div`
    min-height: 100dvh;
    max-height: 100dvh;
    display: flex;
    flex-direction: column;
`;

export const ErrorContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 20px;
`;

export const ErrorTitle = styled.h1`
    font-size: 100px;
    margin-bottom: -20px;
`;

export const ErrorSubTitle = styled.h2`
    font-size: 23px;

    @media screen and (max-width: 768px) {
        font-size: 22px;
    }
`;

export const ErrorText = styled.p`
    font-size: inherit;
    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;