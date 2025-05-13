import styled from 'styled-components';

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const FaqContentContainer = styled.div`
    width: 100%;
    max-width: 1180px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;

export const FaqHeader = styled.div`
    margin-top: 10px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
`;

export const FaqTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
`;

export const FaqAccordion = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export const FaqItem = styled.div`
    border-radius: 1px solid #e0e0e0;
    border-radius: 6px;
`;

export const FaqQuestion = styled.button<{isOpen: boolean}>`
    width: 100%;    
    background: ${({ isOpen }) => (isOpen ? "#f0f0f0" : "#fafafa")};
    border: none;
    padding: 14px 16px;
    text-align: left;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.3s;
    position: relative;

    &:after {
        content: "${({isOpen}) => (isOpen ? "-" : "+")}";
        position: absolute;
        right: 16px;
        font-size: 20px;
        line-height: 1;
    }
`;

export const FaqAnswer = styled.div`
    padding: 12px 16px;
    background: white;
    font-size: 15px;
    line-height: 1.5;
    color: #444;
`;