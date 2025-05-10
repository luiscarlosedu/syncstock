import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    justify-content: center;
    background-color: #F1F1F1;
    height: 100dvh;
`;

export const PendingEditContent = styled.form`
    background: #fff;   
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const PendingEditInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const PendingEditLabel = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #333;
`;

export const PendingEditInput = styled.input`
    padding: 8px 10px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.25s ease;
    outline: none;

    &:focus {
        border-color: #666;
    }
`;

export const PendingEditTwoInputsContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const PendingEditSubmit = styled.button`
    background-color: #2B2B2B;
    color: white;
    padding: 8px 15px;
    cursor: pointer;
    border-radius: 6px;
    border: 0;
    outline: none;
    transition: all .3s;

    &:hover {
        background-color:rgb(55, 55, 55);
    }
`;