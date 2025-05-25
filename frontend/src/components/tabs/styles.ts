import styled, { css } from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
`;

export const TabButton = styled.button<{ active?: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 22px;
    color: #777;
    transition: 0.2s ease;

    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
        props.active &&
        css`
            color: #000;
        `}
`;
