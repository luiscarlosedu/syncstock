import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const Spinner = styled.div`
  border: 4px solid #999999;
  border-top: 4px solid #202020;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: ${spin} 1s linear infinite;
`;

export const SpinnerContainer = styled.div`
    background-color: #fff;
    padding: 10px 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    align-items: center;
    gap: 12px;
    border-radius: 8px;
`;