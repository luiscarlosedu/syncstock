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
`;

export const StoreEditInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const StoreEditLabel = styled.label`
    
`;

export const StoreEditInput = styled.input`
    
`;