import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
    flex-direction: column;
    background-color: #fff;
`;

export const BackgroundImage = styled.Image`
    width: 100%;
    height: 380px;
`;

export const Content = styled.View`
    flex: 1;
    padding: 24px 24px;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    margin-top: -40px;
    border-top-left-radius: 36px;
    border-top-right-radius: 36px;
`;
