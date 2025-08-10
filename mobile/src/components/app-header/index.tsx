import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Container, HeaderLogo, Logo, Title, MyEnterprise, MyEnterpriseText, MyEnterpriseImage } from "./styles";
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { EnterpriseTabRoutesList } from "../../routes/enterprise.routes";
import { useNavigation } from "@react-navigation/native";

type NavigationProp = BottomTabNavigationProp<EnterpriseTabRoutesList>;

export function AppHeader() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView 
            style={{ backgroundColor: "#1A1A1A" }} 
            edges={['top']}
        >
            <StatusBar 
                backgroundColor="#1A1A1A"
                barStyle="light-content"
            />

            <Container>
                <HeaderLogo 
                    onPress={() => navigation.navigate("HomeEnterprise")}
                    activeOpacity={0.7}
                >
                    <Logo
                        source={require('../../assets/syncstock-white.png')}
                        resizeMode="cover"
                    />
                    <Title>
                        SyncStock
                    </Title>
                </HeaderLogo>

                <MyEnterprise 
                    activeOpacity={0.7}
                >
                    <MyEnterpriseText>
                        Empresa
                    </MyEnterpriseText>
                    <MyEnterpriseImage
                        source={{ uri: 'https://github.com/luiscarlosedu.png' }}
                        resizeMode="cover"
                    />
                </MyEnterprise>
            </Container>
        </SafeAreaView>
    );
}