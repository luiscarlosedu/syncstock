import styled from 'styled-components';

export const CreateCategoryBox = styled.form`
    background-color: white;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const CreateCategoryContent = styled.div`
    padding: 20px;
`;

export const CreateCategoryTitle = styled.p`
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 16px;
`;

export const CreateCategoryInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 5px 10px;
    border-radius: 4px;
    border: 1px solid black;
    outline: none;
`;

export const CreateCategoryBtn = styled.button`
    width: 100%;
    border: 0;
    height: 40px;
    font-weight: 700;
    border-radius: 0px 0px 8px 8px;
    background-color: #1A1A1A;
    color: white;
    font-size: 13px;
    padding: 5px 10px;
    outline: none;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color:rgb(47, 47, 47);
    }
`;