import { SafeAreaView } from "react-native-safe-area-context";
import { Container, HeaderLogo, Logo, Title, MyEnterprise, MyEnterpriseText, MyEnterpriseImage } from "./styles";
import { StatusBar } from "react-native";

export function AppHeader() {
    return (
        <>
            <StatusBar 
                backgroundColor="#1A1A1A"
                barStyle="light-content"
            />
            <SafeAreaView>
                <Container>
                    <HeaderLogo>
                        <Logo 
                            source={require('../../assets/syncstock-white.png')} 
                            resizeMode="cover"
                        />
                        <Title>
                            SyncStock
                        </Title>
                    </HeaderLogo>
                    <MyEnterprise activeOpacity={0.7}>
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
        </>
    );
}