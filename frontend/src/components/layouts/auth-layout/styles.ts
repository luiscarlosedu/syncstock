import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 100dvh;

    @media screen and (max-width: 1000px) {
        flex-direction: column-reverse;
        height: auto;
    }
`;