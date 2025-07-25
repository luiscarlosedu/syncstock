import styled from "styled-components";

export const UserHeaderPendingContainer = styled.div`
    background-color: #fff;
    border-radius: 8px;
    display: flex;
    gap: 15px;
    padding: 20px;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
`;

export const UserImage = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    background-color: #202020;
    border: 2px solid #202020;
`;

export const UserPendingInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
`;

export const UserTitleName = styled.h2`
    font-size: 25px;
`;

export const UserBtnArea = styled.div`
    display: flex;
    gap: 5px;
    
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const UserBtn = styled.button`
    background-color: #202020;
    color: white;
    padding: 5px 10px;
    width: 100%;
    text-align: center;
    border: 0;
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color: #454545;
    }
`;