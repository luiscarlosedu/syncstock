import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
    background-color: #f1f1f1;
`;

export const ProductContentContainer = styled.View`
    padding: 16px;
    padding-bottom: 40px;
    gap: 12px;
`;

export const ProductsTitleAddContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ProductsTitle = styled.Text`
    font-size: 22px;
    font-weight: 700;
    color: #1a1a1a;
`;