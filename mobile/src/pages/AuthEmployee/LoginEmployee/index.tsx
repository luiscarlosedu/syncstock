import { Button } from "react-native";
import { AuthLayout } from "../../../components/layouts/auth-layout";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutesList } from "../../../routes/auth.routes";
import { Container } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type NavigationProps = NativeStackNavigationProp<AuthRoutesList, "LoginEmployee">

export default function LoginEmployee() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <AuthLayout>
            <Container>
                <Button title="Ir se registrar" onPress={() => navigation.navigate("LoginEmployee")} />
                <Button title="Ir para home" onPress={() => navigation.goBack()} />
            </Container>
        </AuthLayout>
    );
}