import { Linking } from "react-native";
import {
  Container,
  LogoWrapper,
  LogoImage,
  Title,
  DevLink,
  StyledTouchable
} from "./styles";

export function AuthHeader() {
  const openGitHub = () => {
    Linking.openURL("https://github.com/luiscarlosedu");
  };

  return (
    <Container>
      <LogoWrapper>
        <LogoImage source={require("../../assets/syncstock-no.png")} />
        <Title>SyncStock</Title>
      </LogoWrapper>

      <StyledTouchable onPress={openGitHub}>
        <DevLink>Desenvolvedor</DevLink>
      </StyledTouchable>
    </Container>
  );
}
