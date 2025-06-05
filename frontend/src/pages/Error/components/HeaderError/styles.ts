import styled from "styled-components";

export const HeaderErrorContainer = styled.header`
    width: 100%;
    background-color: #1A1A1A;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    height: 62px;
    z-index: 200;
    position: fixed;
`;

export const HeaderErrorLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    user-select: none;
`;

export const HeaderErrorLogoImage = styled.img`
    width: 30px;
    height: 30px;

    @media screen and (max-width: 768px) {
        width: 26px;
        height: 26px;
    }
`;

export const HeaderErrorLogoTitle = styled.h1`
    color: white;
    font-size: 22px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 19px;
    }
`;