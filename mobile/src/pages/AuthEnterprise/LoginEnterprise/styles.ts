import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    width: 100%;
`;

export const LoginContent = styled.View`
    width: 100%;
    flex: 1;
    margin-top: 16px;
`;

export const LoginContentText = styled.View`
    margin-bottom: 20px;
`;

export const LoginTitle = styled.Text`
    font-size: 25px;
    font-weight: bold;
    color: #000;
`;

export const LoginSubTitle = styled.Text`
    font-size: 15px;
    color: #606060;
    margin-top: 4px;
`;

export const LoginForm = styled.View`
    width: 100%;
`;

export const LoginInputContainer = styled.View`
    margin-bottom: 10px;
`;

export const LoginLabel = styled.Text`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 4px;
`;

export const Input = styled.TextInput`
    border: 1.5px solid black;
    padding: 10px;
    font-size: 14px;
    border-radius: 5px;
`;

export const LoginFormSubmit = styled.TouchableOpacity`
    background-color: #323232;
    padding: 14px;
    border-radius: 5px;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
`;

export const HorizontalRow = styled.View`
    flex-direction: row;
    align-items: center;
    margin: 20px 0;
`;

export const Hr = styled.View`
    flex: 1;
    height: 1px;
    background-color: #323232;
`;

export const HorizontalRowText = styled.Text`
    margin: 0 10px;
    font-size: 14px;
    font-weight: 500;
`;

export const LoginFooter = styled.View`
    align-items: center;
    margin-bottom: 40px;
`;

export const LoginFooterText = styled.Text`
    font-size: 14px;
`;

export const LoginFooterLink = styled.Text`
    color: blue;
    text-decoration: underline;
`;