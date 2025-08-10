import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { Container, HeaderLogo, Logo, Title, MyEnterprise, MyEnterpriseText, MyEnterpriseImage } from "./styles";

export function AppHeader() {
    return (
        <SafeAreaView style={{ backgroundColor: "#1A1A1A" }} edges={['top']}>
            <StatusBar 
                backgroundColor="#1A1A1A"
                barStyle="light-content"
            />
            <Container>
                <HeaderLogo>
                    <Logo
                        source={require('../../assets/syncstock-white.png')}
                        resizeMode="cover"
                    />
                    <Title>SyncStock</Title>
                </HeaderLogo>
                <MyEnterprise activeOpacity={0.7}>
                    <MyEnterpriseText>Empresa</MyEnterpriseText>
                    <MyEnterpriseImage
                        source={{ uri: 'https://github.com/luiscarlosedu.png' }}
                        resizeMode="cover"
                    />
                </MyEnterprise>
            </Container>
        </SafeAreaView>
    );
}