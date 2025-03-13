import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const CategoryContentContainer = styled.div`
    width: 100%;
    max-width: 1180px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;

export const CategoryTitleAddContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CategoryTitle = styled.h1`
    
`;

export const CategoryAdd = styled.button`
    background-color: #3E3E3E;
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    border: 0;
`;