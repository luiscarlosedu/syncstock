import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const PendingEmployeeContentContainer = styled.div`
    width: 100%;
    max-width: 1120px;
`;

export const ImageArea = styled.img`
    width: 100%;
    height: 300px;
    margin-top: 75px;
    object-fit: cover;
    user-select: none;
    border-radius: 4px;
    @media screen and (max-width: 768px) {
        margin-top: 0;
    }
`;