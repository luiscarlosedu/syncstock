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
