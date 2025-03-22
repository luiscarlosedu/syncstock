import styled from 'styled-components';

export const NewFileField = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;

    @media screen and (min-width: 640px) {
        flex-direction: row;
    }
`;

export const NewFileBtn = styled.button`
    width: 192px;
    height: 128px;
    border: 2px solid grey;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #EBEBEB;
    border: none;
    outline: none;
`;

export const NewFileBtnIcon = styled.div`
    position: absolute;
    cursor: pointer;

    svg {
        cursor: pointer;   
    }
`;

export const NewFileInput = styled.div`
    cursor: pointer;
    width: 100%;
    height: 100%;
`;

export const NewFileInputChildren = styled.input`
    opacity: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;