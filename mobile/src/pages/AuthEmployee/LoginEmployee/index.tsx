import { ActivityIndicator, Text } from "react-native";
import { AuthLayout } from "../../../components/layouts/auth-layout";
import { useNavigation } from "@react-navigation/native";
import { AuthRoutesList } from "../../../routes/auth.routes";
import { Container, HorizontalRow, HorizontalRowText, Hr, Input, LoginContent, LoginContentText, LoginFooter, LoginFooterLink, LoginFooterText, LoginForm, LoginFormSubmit, LoginInputContainer, LoginLabel, LoginSubTitle, LoginTitle } from "./styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthHeader } from "../../../components/auth-header";
import { useState } from "react";

type NavigationProps = NativeStackNavigationProp<AuthRoutesList, "LoginEmployee">

export default function LoginEmployee() {
    const navigation = useNavigation<NavigationProps>();
    const [loading, setLoading] = useState(false);

    return (
        <AuthLayout>
            <Container>
                <AuthHeader />
                <LoginContent>
                    <LoginContentText>
                        <LoginTitle>Entrar como Funcionário</LoginTitle>
                        <LoginSubTitle>Que bom te ver de novo!</LoginSubTitle>
                    </LoginContentText>

                    <LoginForm>
                        <LoginInputContainer>
                            <LoginLabel>Email</LoginLabel>
                            <Input placeholder="testeteste@gmail.com" keyboardType="email-address" />
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
                            Não possui uma conta de funcionário?{" "}
                            <LoginFooterLink onPress={() => navigation.navigate("RegisterEmployee")} >Crie-a agora!</LoginFooterLink>
                        </LoginFooterText>
                    </LoginFooter>
                </LoginContent>
            </Container>
        </AuthLayout>
    );
}