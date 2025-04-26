import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const StoreEditContentContainer = styled.main`
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;

export const StoreEditContent = styled.form`
    background: #fff;   
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const StoreEditInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const StoreEditLabel = styled.label`
    font-size: 14px;
    font-weight: 600;
    color: #333;
`;

export const StoreEditInput = styled.input`
    padding: 10px 13px;
    border: 2px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.3s ease;
    outline: none;

    &:focus {
        border-color: #666;
    }
`;