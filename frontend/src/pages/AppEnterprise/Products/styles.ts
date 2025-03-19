import styled from 'styled-components';

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const ProductContentContainer = styled.div`
    width: 100%;
    max-width: 1180px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;

export const ProductsTitleAddContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const ProductsTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

export const ProductsAdd = styled.button`
    background-color: #000;
    color: white;
    padding: 8px 15px;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: #333;
    }
`;