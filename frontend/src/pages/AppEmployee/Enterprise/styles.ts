import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const MyStoreContentContainer = styled.main`
    width: 100%;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;

export const ChangeInfo = styled.div`
    background-color: white;
    display: flex;
    gap: 20px;
    padding: 5px 20px;
    border-radius: 8px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const ChangeInfoItem = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
    padding: 5px 0px;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    transition: all 0.2s ease;

    &:hover {
        color: #404040;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: transparent;
        transition: background-color 0.3s ease;
    }

    &:hover::after {
        background-color: #202020;
    }

    &.active {
        color: #202020;
    }

    &.active::after {
        background-color: #202020;
    }
`;