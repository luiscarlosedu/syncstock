import styled, { css } from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 60px;
    background-color: #ffffff;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 1px solid #ccc;
    position: relative;
    z-index: 1000;
`;

export const TabButton = styled.button<{ active?: boolean }>`
    background: none;
    border: none;
    cursor: pointer;
    padding: 10px;
    font-size: 22px;
    color: #777;
    transition: 0.2s ease;
    -webkit-tap-highlight-color: transparent;

    display: flex;
    align-items: center;
    justify-content: center;

    ${(props) =>
        props.active &&
        css`
            color: #000;
        `}
`;

export const MoreMenu = styled.div`
    position: absolute;
    bottom: 70px;
    right: -10px;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    padding: 8px;
    z-index: 1001;

    button {
        background: none;
        border: none;
        padding: 10px 16px;
        text-align: left;
        font-size: 14px;
        cursor: pointer;
        color: #333;
        transition: background 0.2s;

        &:hover {
            background-color: #f5f5f5;
        }
    }
`;
