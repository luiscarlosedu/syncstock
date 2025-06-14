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
    LoginFooterLink,
    Spinner
} from "./styles";

import { AuthHeader } from "../../../components/auth-header";
import { AuthContext } from "../../../contexts/AuthContext";
import { FormEvent, useContext, useState } from "react";
import { useNavigate } from "react-router";

export default function LoginEmployee() {
    const navigate = useNavigate();
    const { signInEmployee, loadingAuth } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function LoginFormOnSubmit(e: FormEvent) {
        e.preventDefault();

        try {
            await signInEmployee(email, senha);
            console.log("Usuário logado!");
            navigate("/funcionario/home");
        } catch (err) {
            console.log("erro", err);
            alert("[ERRO]");
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
                        onSubmit={LoginFormOnSubmit}
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
                            disabled={loadingAuth}
                        >
                            {loadingAuth ? <Spinner /> : "Entrar"}
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