import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const LogoImage = styled.Image`
  width: 30px;
  height: 30px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-weight: bold;
  color: #000;
`;

export const StyledTouchable = styled.TouchableOpacity``;

export const DevLink = styled.Text`
  background-color: #353535;
  color: white;
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 13px;
  overflow: hidden;
`;
