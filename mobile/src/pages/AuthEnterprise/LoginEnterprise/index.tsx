import { Button, Text } from "react-native";
import { AuthLayout } from "../../../components/layouts/auth-layout";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutesList } from "../../../routes/auth.routes";
import { Container } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<AuthRoutesList, "LoginEnterprise">

export default function LoginEnterprise() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <AuthLayout>
            <Container>
                <Text>Página Login Enterprise</Text>
                <Button title="Ir se registrar" onPress={() => navigation.navigate("RegisterEnterprise")} />
                <Button title="Ir para home" onPress={() => navigation.goBack()} />
            </Container>
        </AuthLayout>
    );
}