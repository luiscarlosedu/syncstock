import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    justify-content: center;
    background-color: #F1F1F1;
    height: 100dvh;
`;

export const MyAccountContentContainer = styled.main`
    width: 100%;
    max-width: 1100px;
    margin-top: 80px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;
