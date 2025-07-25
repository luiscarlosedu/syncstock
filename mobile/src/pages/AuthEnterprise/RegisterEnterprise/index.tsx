import { Button } from "react-native";
import { AuthLayout } from "../../../components/layouts/auth-layout";
import { Container } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRoutesList } from "../../../routes/auth.routes";

type NavigationProps = NativeStackNavigationProp<AuthRoutesList, "RegisterEnterprise">;

export default function RegisterEnterprise() {
    const navigation = useNavigation<NavigationProps>();

    return (
        <AuthLayout>
            <Container>
                <Button title="Ir para login" onPress={() => navigation.goBack()} />
                <Button title="Ir para Home" onPress={() => navigation.navigate("Select")} />
            </Container>
        </AuthLayout>
    );
}