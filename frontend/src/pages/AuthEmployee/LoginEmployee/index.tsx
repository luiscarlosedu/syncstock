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

export default function LoginEmployee() {
    return (
        <Container>
            <LoginContainer>
                <AuthHeader />
                <LoginContent>
                    <LoginContentText>
                        <LoginTitle>Entrar como Funcionário</LoginTitle>
                        <LoginSubTitle>Que bom te ver de novo!</LoginSubTitle>
                    </LoginContentText>

                    <LoginForm>
                        <LoginInputContainer>
                            <LoginLabel htmlFor="iemail">Email</LoginLabel>
                            <Input 
                                placeholder="testeteste@gmail.com"
                                type="email"
                                required
                                id="iemail"
                            />
                        </LoginInputContainer>

                        <LoginInputContainer>
                            <LoginLabel htmlFor="isenha">Senha</LoginLabel>
                            <Input 
                                placeholder="***************"
                                type="password"
                                required
                                id="isenha"
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