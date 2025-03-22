import styled from 'styled-components';

export const NewFileField = styled.div`
    background-color: #fff;
    width: 100%;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 15px;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);

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

export const NewFormContainer = styled.div`
    width: 100%;
    background-color: #fff;
    padding: 12px;
    border-radius: 8px;
    margin-top: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
`;

export const NewForm = styled.form`
    width: 100%;
`;

export const FormInputContainer = styled.div`
    margin-bottom: 7px;
`;

export const FormInputLabel = styled.label`
    user-select: none;
`;

export const FormInputLabelText = styled.p`
    margin-bottom: 3px;
`;

export const FormInput = styled.input`
    width: 100%;
    border: 1px solid #505050;
    border-radius: 3px;
    padding: 0px 8px;
    height: 44px;
    outline: none;

    &:-webkit-autofill {
        -webkit-box-shadow: 0 0 0 30px #606060 inset;
        -webkit-text-fill-color: white;
    }

`;