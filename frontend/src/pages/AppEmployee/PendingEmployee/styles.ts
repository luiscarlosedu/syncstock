import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ImageArea = styled.img`
    width: 100%;
    height: 300px;
    margin-top: 60px;
    object-fit: cover;
    user-select: none;
    @media screen and (max-width: 768px) {
        margin-top: 0;
    }
`;

export const PendingEmployeeContentContainer = styled.div`
    width: 100%;
    max-width: 720px;
    padding: 32px 20px;
    text-align: justify;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.h1`
    font-size: 26px;
    color: #202020;
    margin-bottom: 16px;
`;

export const Description = styled.p`
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;

    strong {
        color: #202020;
    }
`;

export const BackButton = styled.button`
    background-color: #202020;
    color: #fff;
    border: none;
    padding: 12px 24px;
    font-size: 14px;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background-color: #333;
    }
`;
