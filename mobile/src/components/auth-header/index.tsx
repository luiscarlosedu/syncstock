import { Linking } from "react-native";
import {
    Container,
    LogoWrapper,
    LogoImage,
    Title,
    DevLink,
    StyledTouchable
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutesList } from "../../routes/auth.routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProp = NativeStackNavigationProp<AuthRoutesList>;

export function AuthHeader() {
    const navigation = useNavigation<NavigationProp>();

    const openGitHub = () => {
        Linking.openURL("https://github.com/luiscarlosedu");
    };

    return (
        <Container>
            <LogoWrapper onPress={() => navigation.navigate("Select")}>
                <LogoImage source={require("../../assets/syncstock-no.png")} />
                <Title>SyncStock</Title>
            </LogoWrapper>

            <StyledTouchable onPress={openGitHub}>
                <DevLink>Desenvolvedor</DevLink>
            </StyledTouchable>
        </Container>
    );
}
