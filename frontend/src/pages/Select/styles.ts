import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px 60px;

    @media screen and (max-width: 1247px) and (min-width: 1000px)  {
        padding: 10px 10px;
    }

    @media screen and (max-width: 768px) {
        padding: 20px 0px;
    }
`;

export const SelectContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    
    height: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const SelectContentText = styled.div`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    flex: 2;
`;

export const SelectContentTextContainer = styled.div``;

export const SelectLabel = styled.h3`
    font-size: 16px;
    font-weight: 600;

    @media screen and (max-width: 768px) {
        font-size: 13px;
    }
`;

export const Title = styled.h1`
    font-size: 30px;

    @media screen and (max-width: 768px) {
        font-size: 27px;
    }
`;

export const SubTitle = styled.h2`
    font-size: 19px;
    color: #606060;

    @media screen and (max-width: 768px) {
        font-size: 15px;
    }
`;

export const SelectButtonArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const SelectButton = styled.button`
    background-color: #323232;
    color: white;
    padding: 15px 10px;
    border: 0;
    outline: none;
    cursor: pointer;
    border-radius: 5px;
    font-size: 14px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    user-select: none;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    &:hover {
        background-color: #505050;
    }
`;

export const SelectContentFooter = styled.div`
    padding: 0px 10px;
    
    @media screen and (max-width: 768px) {
        padding: 0px 20px;
    }
`;

export const SelectFooterText = styled.p`
    font-size: 12px;
    color: #505050;
    text-align: justify;

    @media screen and (max-width: 768px) {
        font-size: 10px;
    }
`;