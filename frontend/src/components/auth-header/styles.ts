import styled from "styled-components";
import { Link } from "react-router";

export const ContentHeader = styled.header`
    width: 100%;
    display: block;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 0px 20px;
    }
`;

export const HeaderLogo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    user-select: none;
`;

export const HeaderTitle = styled.h1`
    font-size: 25px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  transition: 0.3s ease-in-out;
`;

export const HeaderImage = styled.img`
    width: 30px;
    height: 30px;
`;

export const HeaderLink = styled.a`
    background-color: #353535;
    color: white;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 4px;
    font-size: 13px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    user-select: none;

    &:hover {
        background-color: #505050;
    }
`;