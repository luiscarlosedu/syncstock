import { ActivityIndicator, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRoutesList } from "../../../routes/auth.routes";
import { useState } from "react";
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
    HorizontalRow,
    Hr,
    HorizontalRowText,
    RegisterFooter,
    RegisterFooterText,
    RegisterFooterLink
} from "./styles";

type NavigationProps = NativeStackNavigationProp<AuthRoutesList, "RegisterEnterprise">;

export default function RegisterEnterprise() {
    const navigation = useNavigation<NavigationProps>();
    const [loading, setLoading] = useState(false);

    return (
        <AuthLayout>
            <Container>
                <AuthHeader />
                <RegisterContent>
                    <RegisterContentText>
                        <RegisterTitle>Cadastro de Empresa</RegisterTitle>
                        <RegisterSubTitle>Crie uma conta para sua empresa</RegisterSubTitle>
                    </RegisterContentText>

                    <RegisterForm>
                        <RegisterInputContainer>
                            <RegisterLabel>Nome da empresa</RegisterLabel>
                            <Input placeholder="Nome fantasia" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Email</RegisterLabel>
                            <Input placeholder="empresa@email.com" keyboardType="email-address" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>CNPJ</RegisterLabel>
                            <Input placeholder="12.345.678/0001-90" keyboardType="numeric" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Senha</RegisterLabel>
                            <Input placeholder="***************" secureTextEntry />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Endereço</RegisterLabel>
                            <Input placeholder="Rua Exemplo, 123" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Telefone</RegisterLabel>
                            <Input placeholder="(99) 99999-9999" keyboardType="phone-pad" />
                        </RegisterInputContainer>

                        <RegisterFormSubmit disabled={loading}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={{ color: "#fff" }}>Cadastrar</Text>
                            )}
                        </RegisterFormSubmit>
                    </RegisterForm>

                    <HorizontalRow>
                        <Hr />
                        <HorizontalRowText>ou</HorizontalRowText>
                        <Hr />
                    </HorizontalRow>

                    <RegisterFooter>
                        <RegisterFooterText>
                            Já possui uma conta?{" "}
                            <RegisterFooterLink onPress={() => navigation.navigate("LoginEnterprise")}>
                                Entre agora!
                            </RegisterFooterLink>
                        </RegisterFooterText>
                    </RegisterFooter>
                </RegisterContent>
            </Container>
        </AuthLayout>
    );
}