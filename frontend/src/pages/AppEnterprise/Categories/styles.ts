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
    font-size: 22px;
`;

export const CategoryAdd = styled.button`
    background-color:rgb(50, 50, 50);
    color: white;
    padding: 5px 10px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        background-color: #525252;
    }
`;