import {
    Container,
    LoginContainer,
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

import { AuthHeader } from "../../../components/auth-header";
import { AuthContext } from "../../../contexts/AuthContext";
import { FormEvent, useContext, useState } from "react";

export default function LoginEmployee() {
    const { signInEmployee } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    function LoginFormTest(e: FormEvent) {
        e.preventDefault();

        try {
            signInEmployee(email, senha);
            console.log("Login simulado co sucesso!");
        } catch (err) {
            console.log("erro", err);
        }

        setEmail("");
        setSenha("");
    }

    return (
        <Container>
            <LoginContainer>
                <AuthHeader />
                <LoginContent>
                    <LoginContentText>
                        <LoginTitle>Entrar como Funcionário</LoginTitle>
                        <LoginSubTitle>Que bom te ver de novo!</LoginSubTitle>
                    </LoginContentText>

                    <LoginForm
                        onSubmit={LoginFormTest}
                    >
                        <LoginInputContainer>
                            <LoginLabel htmlFor="iemail">Email</LoginLabel>
                            <Input 
                                placeholder="testeteste@gmail.com"
                                type="email"
                                required
                                id="iemail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                />
                        </LoginInputContainer>

                        <LoginInputContainer>
                            <LoginLabel htmlFor="isenha">Senha</LoginLabel>
                            <Input 
                                placeholder="***************"
                                type="password"
                                required
                                id="isenha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                            />
                        </LoginInputContainer>

                        <LoginFormSubmit 
                            type="submit"
                        >
                            Entrar
                        </LoginFormSubmit>

                    </LoginForm>

                    <HorizontalRow>
                        <Hr />
                        <HorizontalRowText>ou</HorizontalRowText>
                        <Hr />
                    </HorizontalRow>

                    <LoginFooter>
                        <LoginFooterText>
                            Não possui uma conta de funcionário? <LoginFooterLink
                                to={'/register/funcionario'}
                            >Crie-a agora!</LoginFooterLink>
                        </LoginFooterText>
                    </LoginFooter>

                </LoginContent>
            </LoginContainer>
        </Container>
    );
};