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

export const SearchWrapper = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    border-width: 1.5px;
    border-color: #d1d1d1;
    padding: 4px 12px;
    gap: 8px;
`;

export const SearchInput = styled.TextInput`
    flex: 1;
    font-size: 16px;
    color: #1a1a1a;
`;

export const SummaryBar = styled.View`
    flex-direction: row;
    background-color: #fff;
    border-radius: 8px;
    border-width: 1.5px;
    border-color: #d1d1d1;
    padding: 10px 12px;
`;

export const SummaryBarText = styled.Text`
    font-size: 14px;
    color: #555;
`;

export const SummaryCount = styled.Text`
    font-weight: 700;
    color: #1a1a1a;
`;

export const NoProductsContainer = styled.View`
    align-items: center;
    padding: 30px 20px;
    border-radius: 10px;
    background-color: #fff;
    border-width: 1.5px;
    border-color: #d1d1d1;
    gap: 6px;
`;

export const NoProductsIcon = styled.Text`
    font-size: 44px;
`;

export const NoProductsTitle = styled.Text`
    font-size: 17px;
    font-weight: 600;
    color: #1a1a1a;
    text-align: center;
`;

export const NoProductsText = styled.Text`
    font-size: 14px;
    color: #555;
    text-align: center;
`;