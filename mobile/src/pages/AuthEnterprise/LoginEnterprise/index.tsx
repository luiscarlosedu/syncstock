import { ActivityIndicator, Button, Text } from "react-native";
import { AuthLayout } from "../../../components/layouts/auth-layout";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutesList } from "../../../routes/auth.routes";
import {
  Container,
  LoginContent,
  LoginContentText,
  LoginTitle,
  LoginSubTitle,
  LoginForm,
  LoginInputContainer,
  LoginLabel,
  Input,
  LoginFormSubmit,
  HorizontalRow,
  Hr,
  HorizontalRowText,
  LoginFooter,
  LoginFooterText,
  LoginFooterLink
} from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthHeader } from "../../../components/auth-header";
import { useState } from "react";

type NavigationProps = NativeStackNavigationProp<AuthRoutesList, "LoginEnterprise">

export default function LoginEnterprise() {
    const navigation = useNavigation<NavigationProps>();
    const [loading, setLoading] = useState(false);

    return (
        <AuthLayout>
            <Container>
                <AuthHeader />

                <LoginContent>
                    <LoginContentText>
                        <LoginTitle>Entrar como Empresa</LoginTitle>
                        <LoginSubTitle>Que bom te ver de novo!</LoginSubTitle>
                    </LoginContentText>

                    <LoginForm>
                        <LoginInputContainer>
                            <LoginLabel>Email</LoginLabel>
                            <Input placeholder="testeteste@gmail.com" keyboardType="email-address" />
                        </LoginInputContainer>

                        <LoginInputContainer>
                            <LoginLabel>CNPJ</LoginLabel>
                            <Input placeholder="12.345.678/0001-90" keyboardType="numeric" />
                        </LoginInputContainer>

                        <LoginInputContainer>
                            <LoginLabel>Senha</LoginLabel>
                            <Input placeholder="***************" secureTextEntry />
                        </LoginInputContainer>

                        <LoginFormSubmit disabled={loading}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={{ color: "#fff" }}>Entrar</Text>
                            )}
                        </LoginFormSubmit>
                    </LoginForm>

                    <HorizontalRow>
                        <Hr />
                        <HorizontalRowText>ou</HorizontalRowText>
                        <Hr />
                    </HorizontalRow>

                    <LoginFooter>
                        <LoginFooterText>
                            Não possui uma conta de empresa?{" "}
                            <LoginFooterLink onPress={() => navigation.navigate("RegisterEnterprise")} >Crie-a agora!</LoginFooterLink>
                        </LoginFooterText>
                    </LoginFooter>
                </LoginContent>
            </Container>
        </AuthLayout>
    );
}
