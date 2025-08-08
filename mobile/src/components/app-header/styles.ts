import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    background-color: #1A1A1A;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
    height: 67px;
`;

export const HeaderLogo = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
`;

export const Logo = styled.Image`
    width: 28px;
    height: 28px;
`;

export const Title = styled.Text`
    color: white;
    font-size: 20px;
    font-weight: bold;
`;

export const MyEnterprise = styled.TouchableOpacity`
    background-color: #303030;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    padding: 0px 0px 0px 8px;
    height: 40px;
    overflow: hidden;
    gap: 5px;
`;

export const MyEnterpriseText = styled.Text`
    color: white;
    font-size: 14px;
    font-weight: 500;
`;

export const MyEnterpriseImage = styled.Image`
    width: 40px;
    height: 40px;
    border-radius: 0px 8px 8px 0px;
`;