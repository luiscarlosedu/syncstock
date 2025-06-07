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
    height: 35px;
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

export const FormFileArea = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0px 10px 0px;
`;

export const FormImgInputContainer = styled.div`
    position: relative;
    background-color: rgb(219, 219, 219);
    width: 100%;
    min-width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    gap: 10px;
    padding: 10px;
`;

export const FormImgInputTitle = styled.p`
    font-size: 14px;
`;

export const FormImgInput = styled.input`
    border: 0;
    background-color: red;
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
`;

export const FormSubmitBtn = styled.button`
    border-radius: 8px;
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

export const FormImgContainer = styled.div`
    width: 100%;
    position: relative;
`;

export const FormImgDelete = styled.button`
    position: absolute;
    border: 0;
    background-color: #121212;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    right: 0;
    border-radius: 0px 5px 0px 0px;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        background-color: red;
    }
`;

export const FormImg = styled.img`
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-radius: 5px;
`;

/*
.form-img-container {
    position: relative;
    width: 100%;
}

.form-img-delete {
    position: absolute;
    border: 0;
    background-color: black;
    padding: 6px;
    top: 0;
    right: 0;
    border-radius: 0px 2px 0px 2px;
    cursor: pointer;
    transition: .4s;
}

.form-img-delete:hover {
    background-color: red;
}

*/