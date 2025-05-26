import styled from "styled-components";

export const Container = styled.article`
    display: flex;
    justify-content: center;
`;

export const HomeContentContainer = styled.main`
    width: 100%;
    max-width: 1100px;

    @media screen and (min-width: 1800px) {
        max-width: 1300px;
    }

    @media screen and (max-width: 768px) {
        padding-bottom: 80px;
    }
`;

export const HomeTitle = styled.h2`
    font-weight: 700;
    font-size: 22px;
`;

export const HomeSubTitle = styled.h3`
    font-weight: 500;
    font-size: 15px;
    margin-top: -2px;
`;

export const HomePhoto = styled.img`
    width: 100%;
    height: 300px;
    margin-top: 12px;
    object-fit: cover;
    border-radius: 2px;
`;

export const HomeContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
`;

export const EmployeeInfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const EmployeeCard = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    border: 1.5px solid #d1d1d1;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const EnterpriseLogo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 15px;
    border-radius: 5px;
`;

export const EnterpriseDetails = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EnterpriseDetailsText = styled.p`
    font-weight: 600;
`;

export const EmployeesLabel = styled.span`
    font-size: 14px;

    @media (max-width: 768px) {
        font-size: 13px;
    }
`;

export const EmployeesTotal = styled.span`
    font-size: 18px;
    font-weight: bold;
`;

export const EmployeesCard = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    padding: 15px;
    border-radius: 8px;
    border: 1.5px solid #d1d1d1;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const EmployeesIcon = styled.span`
    font-size: 24px;
    margin-right: 15px;
`;

export const StockSummary = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-top: 20px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const StockCard = styled.div`
    background-color: white;
    padding: 15px;
    border: 1.5px solid #d1d1d1;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.05);
    text-align: center;
    border-radius: 8px;
    flex: 1;

    @media (max-width: 768px) {
        font-size: 14px;

        span {
            display: block;
        }
    }
`;

export const QuickActions = styled.div`
    display: flex;
    gap: 15px;
    margin-top: 20px;
    padding-bottom: 30px;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const ActionButton = styled.button`
    padding: 10px 15px;
    border: none;
    border-radius: 5px;
    background-color: #303030;
    color: white;
    cursor: pointer;
    border-radius: 8px;
    transition: 0.3s;

    &:hover {
        background-color: #505050;
    }
`;