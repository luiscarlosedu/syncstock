import styled from 'styled-components';

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const StoreConfigContentContainer = styled.main`
    width: 100%;
    max-width: 1100px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;