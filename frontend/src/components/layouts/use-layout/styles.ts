import styled from 'styled-components';

export const Container = styled.div`
    /* min-height: 100dvh; */
`;

export const UseLayoutPage = styled.main`
    display: flex; 
    flex-direction: row;
    height: calc(100dvh - 65px);
    width: 100%;
    margin-top: 65px;
    overflow: hidden;

    aside > div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        padding: 20px;
    }

    article {
        overflow: auto;
        scrollbar-color: #404040 #202020;
        padding: 19px 25px;
        width: 100%;
        background-color: #F1F1F1;
    }
`;