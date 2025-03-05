import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const HomeContent = styled.main`
    width: 100%;
    max-width: 1000px;
`;

export const HomeTitle = styled.h2`
    margin-bottom: 10px;
    font-weight: 700;
    font-size: 22px;
`;

export const HomePhoto = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 2px;
`;