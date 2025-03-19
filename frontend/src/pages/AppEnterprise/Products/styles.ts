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

export const ProductContent = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ProductTotalSearchContainer = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const ProductTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
    user-select: none;
`;

export const ProductTotalTitle = styled.p`
    font-weight: 600;
`;

export const ProductTotal = styled.span`
    font-size: 18px;
`;

export const ProductSearchContainer = styled.div``;

export const ProductSearchInputContainer = styled.div`
    background-color: #F1F1F1;
    display: flex;
    align-items: center;
    padding: 5px 20px;
    border-radius: 8px;
`;

export const SearchIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProductSearchInput = styled.input`
    border: 0;
    padding: 10px 15px;
    background-color: #f1f1f1;
    width: 100%;
    flex: 2;
    outline: none;
`;