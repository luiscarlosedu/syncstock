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

export default function LoginEnterprise() {
    return (
        <Container>
            <LoginContainer>
                <AuthHeader />
                <LoginContent>
                    <LoginContentText>
                        <LoginTitle>Entrar como Empresa</LoginTitle>
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
                            <LoginLabel htmlFor="icnpj">CNPJ</LoginLabel>
                            <Input 
                                placeholder="12.345.678/0001-90"
                                type="text"
                                required
                                id="icnpj"
                                maxLength={18}
                                minLength={14}
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