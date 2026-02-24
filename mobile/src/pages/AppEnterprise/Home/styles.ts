import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: #f1f1f1;
`;

export const HomeContentContainer = styled.View`
    padding: 16px;
    padding-bottom: 40px;
`;

export const HomeTitle = styled.Text`
    font-size: 22px;
    font-weight: 700;
    color: #1a1a1a;
`;

export const HomeSubTitle = styled.Text`
    font-size: 15px;
    font-weight: 500;
    color: #444;
    margin-top: 2px;
`;

export const HomePhoto = styled.Image`
    width: 100%;
    height: 200px;
    border-radius: 8px;
    margin-top: 12px;
`;

export const HomeContent = styled.View`
    width: 100%;
    margin-top: 10px;
`;

export const EnterpriseInfoContainer = styled.View`
    flex-direction: column;
    gap: 12px;
    margin-top: 10px;
`;

export const EnterpriseCard = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    border-width: 1.5px;
    border-color: #d1d1d1;
    gap: 12px;
`;

export const EnterpriseLogo = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 5px;
`;

export const EnterpriseDetails = styled.View`
    flex-direction: column;
`;

export const EnterpriseDetailsText = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
`;

export const EnterpriseLabel = styled.Text`
    font-size: 13px;
    color: #555;
`;

export const EnterpriseTotal = styled.Text`
    font-size: 18px;
    font-weight: 700;
    color: #1a1a1a;
`;

export const EmployeeCard = styled.View`
    flex: 1;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    border-width: 1.5px;
    border-color: #d1d1d1;
    gap: 12px;
`;

export const EmployeeIcon = styled.Text`
    font-size: 24px;
`;

export const StockSummary = styled.View`
    flex-direction: row;
    gap: 12px;
    margin-top: 20px;
`;

export const StockCard = styled.View`
    flex: 1;
    background-color: #fff;
    padding: 15px;
    border-radius: 8px;
    border-width: 1.5px;
    border-color: #d1d1d1;
    align-items: center;

`;

export const StockBold = styled.Text`
    font-weight: 700;
    color: #1a1a1a;
`;

export const QuickActions = styled.View`
    gap: 12px;
    margin-top: 20px;
`;

export const ActionButton = styled.TouchableOpacity`
    background-color: #303030;
    padding: 12px 15px;
    border-radius: 8px;
    align-items: center;
`;

export const ActionButtonText = styled.Text`
    color: #fff;
    font-weight: 500;
    font-size: 15px;
`;