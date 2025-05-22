import styled from "styled-components";
import backgroud_image from '../../../../../assets/enterprise1.jpg';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: url(${backgroud_image});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #505050;

    @media screen and (max-width: 1000px) {
        height: 250px;
        max-height: 300px;
    }
`;