import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    background-color: #1A1A1A;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 200;
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    user-select: none;
`;

export const HeaderLogoImage = styled.img`
    width: 30px;
    height: 30px;

    @media screen and (max-width: 768px) {
        width: 26px;
        height: 26px;
    }
`;

export const HeaderLogoTitle = styled.h1`
    color: white;
    font-size: 22px;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 19px;
    }
`;

export const MyEnterprise = styled.button`
    background-color: #303030;
    border: 0;
    cursor: pointer;
    color: white;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    width: 130px;
    padding: 0px 0px 0px 6px;
    border-radius: 8px;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #3A3A3A;
    }

    @media screen and (max-width: 768px) {
        
    }
`;

export const MyEnterpriseText = styled.h3`
    font-size: 15px;
    font-weight: 500;

    @media screen and (max-width: 768px) {
        font-size: 13px;
    }
`;

export const MyEnterpriseImage = styled.img`
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 0px 8px 8px 0px;
`;