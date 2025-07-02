import styled from 'styled-components';

export const Container = styled.div``;

export const UseLayoutPage = styled.main`
    display: flex; 
    flex-direction: row;
    height: calc(100dvh - 65px);
    width: 100%;
    margin-top: 65px;
    overflow: hidden;

    aside {
        @media screen and (max-width: 1000px) {
            display: none;
        }
    }

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

        @media screen and (max-width: 768px) {
            margin-bottom: 60px;
        }
    }
`;

export const BottomTabsWrapper = styled.div`
    display: none;

    @media screen and (max-width: 1000px) {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: white;
        border-top: 1px solid #ccc;
        z-index: 1000;
    }
`;
