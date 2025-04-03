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