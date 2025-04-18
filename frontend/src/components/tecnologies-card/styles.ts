import { styled } from 'styled-components';

export const TecCardContainer = styled.div`
    display: flex;
    padding: 5px;
    background-color: red;
    background-color: #efefef;
    gap: 7px;
    border-radius: 4px;
    align-items: center;
    border: 0.1px solid white;
    user-select: none;
    transition: all .4s;

    &:hover {
        background-color:rgb(247, 247, 247);
        border: 0.1px solid rgba(0, 0, 0, 0.25);
    }
`;

export const TecCardIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #dcdcdc;
    padding: 4px;
    border-radius: 2px;
`;

export const TecCardName = styled.p`
    font-size: 14px;
`;