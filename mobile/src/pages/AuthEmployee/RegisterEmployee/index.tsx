import { ActivityIndicator, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRoutesList } from "../../../routes/auth.routes";
import { AuthLayout } from "../../../components/layouts/auth-layout";
import { AuthHeader } from "../../../components/auth-header";
import {
    Container,
    RegisterContent,
    RegisterContentText,
    RegisterTitle,
    RegisterSubTitle,
    RegisterForm,
    RegisterInputContainer,
    RegisterLabel,
    Input,
    RegisterFormSubmit,
    RegisterFooter,
    RegisterFooterText,
    RegisterFooterLink
} from "./styles";
import { useState } from "react";

type NavigationProps = NativeStackNavigationProp<AuthRoutesList, "RegisterEmployee">;

export default function RegisterEmployee() {
    const navigation = useNavigation<NavigationProps>();
    const [loading, setLoading] = useState(false);

    return (
        <AuthLayout>
            <Container>
                <AuthHeader />

                <RegisterContent>
                    <RegisterContentText>
                        <RegisterTitle>Cadastrar Funcionário</RegisterTitle>
                        <RegisterSubTitle>Crie sua conta de funcionário agora mesmo!</RegisterSubTitle>
                    </RegisterContentText>

                    <RegisterForm>
                        <RegisterInputContainer>
                            <RegisterLabel>Nome</RegisterLabel>
                            <Input placeholder="Digite seu nome" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Email</RegisterLabel>
                            <Input placeholder="seuemail@gmail.com" keyboardType="email-address" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Senha</RegisterLabel>
                            <Input placeholder="********" secureTextEntry />
                        </RegisterInputContainer>

                        <RegisterFormSubmit disabled={loading}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={{ color: "#fff" }}>Cadastrar</Text>
                            )}
                        </RegisterFormSubmit>
                    </RegisterForm>

                    <RegisterFooter>
                        <RegisterFooterText>
                            Já possui conta?{" "}
                            <RegisterFooterLink onPress={() => navigation.navigate("LoginEmployee")}>
                                Entrar
                            </RegisterFooterLink>
                        </RegisterFooterText>
                    </RegisterFooter>
                </RegisterContent>
            </Container>
        </AuthLayout>
    );
}
