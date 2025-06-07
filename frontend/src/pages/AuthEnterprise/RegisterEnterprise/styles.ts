import { Link } from "react-router";
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
`;

export const RegisterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 60px;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 1247px) and (min-width: 1000px)  {
        padding: 10px 10px;
    }

    @media screen and (max-width: 768px) {
        padding: 20px 0px;
    }
`;

export const RegisterContent = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    gap: 20px;
`;

export const RegisterContentText = styled.div``;

export const RegisterTitle = styled.h1`
    font-size: 24px;

    @media screen and (max-width: 768px) {
        font-size: 23px;
    }
`;

export const RegisterSubTitle = styled.h2`
    font-size: 17px;
    color: #606060;
`;

export const RegisterForm = styled.form`
    width: 100%;
`;

export const RegisterInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

export const RegisterLabel = styled.label`
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

export const FormFileArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px 10px 0px;
`;

export const FormImgInputContainer = styled.div`
    position: relative;
    background-color: rgb(219, 219, 219);
    width: 100%;
    min-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    gap: 10px;
    padding: 10px;
`;

export const FormImgInputTitle = styled.p`
    font-size: 14px;
`;

export const FormImgInput = styled.input`
    border: 0;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const FormImgContainer = styled.div`
    width: 100%;
    position: relative;
`;

export const FormImgDelete = styled.button`
    position: absolute;
    border: 0;
    background-color: #121212;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    border-radius: 0px 5px 0px 0px;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        background-color: red;
    }
`;

export const FormImg = styled.img`
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
`;

export const RegisterFormSubmit = styled.button`
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

export const RegisterFooter = styled.footer`
    width: 100%;
`;

export const RegisterFooterText = styled.p`
    text-align: center;
    font-size: 14px;
`;

export const RegisterFooterLink = styled(Link)`
    color: blue;
`;