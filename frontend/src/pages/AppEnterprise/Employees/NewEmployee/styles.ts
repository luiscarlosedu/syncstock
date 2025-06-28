import styled from "styled-components";

export const EmployeeTitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
`;

export const EmployeeTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

export const RegisterEmployeeContent = styled.div`
    width: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.05);
`;

export const RegisterDescription = styled.p`
    font-size: 14px;
    color: #505050;
    margin-bottom: 5px;
`;

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
`;

export const InputLabel = styled.label`
    font-size: 14px;
    font-weight: 500;
    text-align: left;
    user-select: none;
    margin-bottom: 5px;
`;

export const RegisterInput = styled.input`
    padding: 10px;
    border: 1.5px solid #909090;
    border-radius: 5px;
    font-size: 14px;
    outline: none;
    margin-bottom: 5px;
    transition: 0.3s;

    &:focus {
        border-color: #303030;
    }
`;

export const RegisterBtn = styled.button`
    background-color: #1C1C1C;
    color: white;
    height: 40px;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    transition: all .4s;

    &:hover {
        background-color: #2F2F2F;
    }
`;