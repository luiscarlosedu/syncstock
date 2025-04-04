import styled from 'styled-components';
import BackgroundImage from '../../../assets/enterprise-about.jpg';

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const AboutContentContainer = styled.div`
    width: 100%;
    max-width: 1180px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }
`;

export const AboutTitleContainer = styled.div`
    margin-bottom: 15px;
`;

export const AboutTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
`;

export const AboutBackgroundEnterprise = styled.div`
    width: 100%;
    height: 250px;
    border-radius: 4px;
    background-image: url(${BackgroundImage});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const AboutSection = styled.section`
    width: 100%;
    margin-top: 10px;
`;

export const AboutSyncStock = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 5px;
    background-color: white;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);
    display: flex;
`;

export const AboutSyncStockLeft = styled.div`
    flex: 1;
    background-color: blue;
`;

export const SyncStockLogo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const AboutSyncStockRight = styled.div`
    flex: 1;
    background-color: red;
    width: 100%;
`;