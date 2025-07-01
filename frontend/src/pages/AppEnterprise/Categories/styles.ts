import styled, { keyframes } from "styled-components";

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
    align-items: center;
    margin-bottom: 20px;
`;

export const CategoryTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

export const CategoryAdd = styled.button`
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

export const CategoryTotalSearchContainer = styled.div`
    background-color: white;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-radius: 6px;
    margin-bottom: 20px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);

    @media screen and (max-width: 768px){
        flex-direction: column;
        gap: 4px;

        input {
            width: 100%;
        }
    }
`;

export const CategoryTotalContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const CategoryTotalTitle = styled.p`
    font-weight: 600;
    font-size: 14px;
`;

export const CategoryTotal = styled.span`
    font-size: 16px;
`;

export const CategorySearchContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const CategorySearchInputContainer = styled.div`
    background-color: #f1f1f1;
    display: flex;
    align-items: center;
    padding: 4px 10px;
    border-radius: 6px;
    width: 100%;
`;

export const SearchIcon = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 6px;
    color: #888;
`;

export const CategorySearchInput = styled.input`
    border: none;
    padding: 8px;
    background: transparent;
    outline: none;
    font-size: 14px;
`;

export const CategoryList = styled.div`
    width: 100%;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    background-color: white;
    display: flex;
    flex-direction: column;
`;

export const CategoryListHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #F5F5F5;
    padding: 12px;
    font-weight: bold;
    border-bottom: 2px solid #EAEAEA;
`;

export const CategoryItem = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px;
    border-bottom: 1px solid #EAEAEA;
    transition: background 0.2s;

    &:hover {
        background-color: #FAFAFA;
    }

    &:last-child {
        border-bottom: none;
    }
`;

export const NoCategoriesContainer = styled.div`
    text-align: center;
    padding: 40px 20px;
    border-radius: 8px;
    background-color: #fff;
    border: 1px solid #eaeaea;
    margin-top: 20px;
`;

export const NoCategoriesIcon = styled.div`
    font-size: 48px;
    margin-bottom: 15px;
`;

export const NoCategoriesTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const NoCategoriesText = styled.p`
    font-size: 14px;
    color: #555;
    margin-bottom: 20px;
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