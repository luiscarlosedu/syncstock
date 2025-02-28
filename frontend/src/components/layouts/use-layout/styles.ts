import styled from 'styled-components';

export const Container = styled.div`
    /* min-height: 100dvh; */
`;

export const UseLayoutPage = styled.main`
    display: flex;
    flex-direction: row;
    height: calc(100dvh - 65px);
    background-color: red;
    width: 100%;
    margin-top: 65px;
    overflow: hidden;

    article {
        overflow: auto;
        scrollbar-color: #404040 #202020;
    }
`;