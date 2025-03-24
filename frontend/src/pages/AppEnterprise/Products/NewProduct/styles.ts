import styled from 'styled-components';

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
    display: flex;
    flex-direction: column;
`;

export const FormInputLabel = styled.label`
    user-select: none;
`;

export const FormInputLabelText = styled.p`
    margin-bottom: 3px;
    font-size: 14px;
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

export const FormSelect = styled.select`
    padding: 6px 1px;
    border-radius: 2px;
    outline: none;
`;

export const SelectOption = styled.option``;

export const FormTextArea = styled.textarea`
    width: 100%;
    min-height: 100px;
    padding: 5px 8px;
    border-radius: 6px;
    resize: none;
    outline: none;
    color: black;
`;

export const FormSubmitBtn = styled.button`
    background-color: #1C1C1C;
    color: white;
    width: 100%;
    height: 40px;
    border-radius: 5px;
    cursor: pointer;
    transition: all .3s;

    &:hover {
        background-color:rgb(47, 47, 47);
    }
`;

export const PaddingStyle = styled.div`
    padding-bottom: 18px;
`;