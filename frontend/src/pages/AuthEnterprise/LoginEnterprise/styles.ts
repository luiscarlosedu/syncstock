import { Link } from "react-router";
import styled, { keyframes } from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 60px;
    height: 100%;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1247px) and (min-width: 1000px)  {
        padding: 10px 10px;
    }

    @media screen and (max-width: 768px) {
        padding: 20px 0px;
    }
`;

export const LoginContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 20px;
`;

export const LoginContentText = styled.div`
    
`;

export const LoginTitle = styled.h1`
    font-size: 27px;

    @media screen and (max-width: 768px) {
        font-size: 23px;
    }
`;

export const LoginSubTitle = styled.h2`
    font-size: 19px;
    color: #606060;

    @media screen and (max-width: 768px) {
        font-size: 17px;
    }
`;

export const LoginForm = styled.form`
    width: 100%;
`;

export const LoginInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const LoginLabel = styled.label`
    font-weight: 600;
    font-size: 15px;

    @media screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

export const Input = styled.input`
    padding: 10px 10px;
    border: 1.5px solid black;
    font-size: 14px;
    border-radius: 5px;
    margin-bottom: 10px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

export const LoginFormSubmit = styled.button`
    background-color: #323232;
    color: white;
    width: 100%;
    height: 45px;
    border: 0;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    transition: 0.2s;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background-color: #505050;
    }
`;

export const HorizontalRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 10px;
`;

export const Hr = styled.hr`
    flex: 1;
    border: none;
    border-top: 1px solid #323232;
`;

export const HorizontalRowText = styled.h3`
    font-size: 14px;
    font-weight: 500;
`;

export const LoginFooter = styled.footer`
    width: 100%;
`;

export const LoginFooterText = styled.p`
    text-align: center;
    font-size: 14px;
`;

export const LoginFooterLink = styled(Link)`
    color: blue;
`;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
    border: 2px solid #f3f3f3;
    border-top: 2px solid #ffffff;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    animation: ${spin} 0.8s linear infinite;
    margin: 0 auto;
`;