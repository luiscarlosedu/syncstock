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
    border-radius: 7px;
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
    border-radius: 5px;
    background-color: white;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.05);
    display: flex;
`;

export const AboutSyncStockLeft = styled.div`
    flex: 1;
    display: flex;
    padding: 10px;
`;

export const SyncStockLogo = styled.img`
    width: 100%;
    max-width: 120px;
    height: 100%;
    object-fit: contain;
    border-radius: 6px;
    user-select: none;
`;

export const AboutLeftContent = styled.div`
    padding: 5px 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const AboutLeftContentTitle = styled.h3`
    font-size: 22px;
`;

export const AboutLeftContentDescription = styled.p`
    font-size: 15px;
`;

export const AboutLeftIconsArea = styled.div`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 5px;
`;

export const AboutIconLink = styled.a`
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
        font-size: 20px;
    }
`;

export const AboutSyncStockRight = styled.div`
    flex: 1;
    width: 100%;
    border-radius: 0px 5px 5px 0px;
    background-image: url("https://images.pexels.com/photos/7567527/pexels-photo-7567527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
    background-size: cover;
    background-position: center;
    position: relative;

    &:hover div {
        opacity: 1;
        pointer-events: all;
    }
`;

export const AboutOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    pointer-events: none;
    transition: opacity .4s ease;
`;

export const OverlayButton = styled.button`
    padding: 10px 20px;
    border: 0;
    background-color: white;
    color: black;
    font-weight: 600;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background-color: #f3f3f3;
    }
`;