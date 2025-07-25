// styles.ts
import styled from "styled-components/native";

export const SelectContent = styled.View`
    width: 100%;
    flex: 1;
    justify-content: space-between;
    align-items: center;
`;

export const SelectContentText = styled.View`
    width: 100%;
    padding: 20px 0;
    gap: 10px;
`;

export const SelectContentTextContainer = styled.View``;

export const SelectLabel = styled.Text`
    font-size: 13px;
    font-weight: bold;
`;

export const Title = styled.Text`
    font-size: 27px;
    font-weight: bold;
    color: #000;
`;

export const SubTitle = styled.Text`
    font-size: 15px;
    color: #606060;
    margin-top: 4px;
`;

export const SelectButtonArea = styled.View`
    margin-top: 10px;
    gap: 6px;
`;

export const SelectButton = styled.TouchableOpacity`
    background-color: #323232;
    padding: 15px 10px;
    border-radius: 5px;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const SelectButtonText = styled.Text`
    color: white;
    font-size: 12px;
    text-align: center;
`;

export const SelectContentFooter = styled.View``;

export const SelectFooterText = styled.Text`
    font-size: 10px;
    color: #505050;
    text-align: justify;
    margin-bottom: 20px;
`;
