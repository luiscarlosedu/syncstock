import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const UpdateStockContainer = styled.div`
    width: 100%;
    max-width: 500px;
    background: white;
    padding: 24px;
    border-radius: 8px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

export const BackButton = styled.button`
    background-color: transparent;
    color: #000;
    border: 1px solid #ccc;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.3s;

    &:hover {
        background-color: #f1f1f1;
    }
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 14px;
`;

export const Label = styled.label`
    font-size: 14px;
    font-weight: 500;
`;

export const Select = styled.select`
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
`;

export const Input = styled.input`
    padding: 10px;
    border-radius: 6px;
    border: 1px solid #ccc;
    font-size: 14px;
`;

export const Button = styled.button`
    background-color: #000;
    color: white;
    padding: 10px;
    border-radius: 6px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    border: none;
    margin-top: 10px;
    transition: background-color 0.3s;

    &:hover {
        background-color: #333;
    }
`;
