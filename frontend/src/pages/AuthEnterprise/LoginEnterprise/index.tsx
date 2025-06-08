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
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { useNavigate } from "react-router";

export default function LoginEnterprise() {
    const navigate = useNavigate();
    const { signInEnterprise } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [senha, setSenha] = useState("");

    async function LoginFormTest(e: FormEvent) {
        e.preventDefault();

        try {
            signInEnterprise(email, cnpj, senha)
            .then(() => {
                console.log("[USUÁRIO LOGADO]");
                navigate('/empresa/home')
            }).catch((err) => {
                console.log("[ERRO] ", err);
            })
        } catch (err) {
            console.log("erro", err);
        }

        setEmail("");
        setCnpj("");
        setSenha("");
    }

    return (
        <Container>
            <LoginContainer>
                <AuthHeader />
                <LoginContent>
                    <LoginContentText>
                        <LoginTitle>Entrar como Empresa</LoginTitle>
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
                            <LoginLabel htmlFor="icnpj">CNPJ</LoginLabel>
                            <Input 
                                placeholder="12.345.678/0001-90"
                                type="text"
                                required
                                id="icnpj"
                                maxLength={18}
                                minLength={14}
                                value={cnpj}
                                onChange={(e) => setCnpj(e.target.value)}
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
                            Não possui uma conta de empresa? <LoginFooterLink
                                to={'/register/empresa'}
                            >Crie-a agora!</LoginFooterLink>
                        </LoginFooterText>
                    </LoginFooter>

                </LoginContent>
            </LoginContainer>
        </Container>
    );
};