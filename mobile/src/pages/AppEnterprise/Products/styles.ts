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

export const ProductCard = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    border-width: 1.5px;
    border-color: #d1d1d1;
    padding: 12px;
    gap: 12px;
`;

export const ProductThumb = styled.Image`
    width: 52px;
    height: 52px;
    border-radius: 8px;
    background-color: #eee;
`;

export const ProductInfo = styled.View`
    flex: 1;
    gap: 6px;
`;

export const ProductName = styled.Text`
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
`;

export const CategoryBadge = styled.View`
    align-self: flex-start;
    background-color: #f1f1f1;
    border-radius: 4px;
    padding: 2px 8px;
`;

export const CategoryBadgeText = styled.Text`
    font-size: 12px;
    color: #555;
    font-weight: 500;
`;

export const QuantityWrapper = styled.View`
    align-items: center;
`;

export const QuantityValue = styled.Text`
    font-size: 20px;
    font-weight: 700;
    color: #1a1a1a;
`;

export const QuantityLabel = styled.Text`
    font-size: 11px;
    color: #888;
`;