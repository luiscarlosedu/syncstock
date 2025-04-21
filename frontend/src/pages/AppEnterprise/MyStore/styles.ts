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

export const MyStoreHead = styled.div`
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    gap: 15px;
    padding: 20px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const StoreImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #202020;
    border: 2px solid #202020;
`;

export const MyStoryHeadInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

export const StoryTitleName = styled.h2`
    font-size: 25px;
`;

export const StoryBtnArea = styled.div`
    display: flex;
    gap: 5px;
`;

export const StoryBtn = styled.button`
    background-color: #202020;
    color: white;
    padding: 5px 10px;
    border-radius: 7px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: #454545;
    }
`;

export const ChangeInfo = styled.div`
    background-color: white;
    display: flex;
    gap: 20px;
    padding: 5px 20px;
`;

export const ChangeInfoItem = styled.button`
    border: none;
    background-color: white;
    cursor: pointer;
`;