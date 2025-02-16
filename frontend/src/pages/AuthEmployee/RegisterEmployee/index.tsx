import { AuthHeader } from "../../../components/auth-header";

import {
    Container,
    RegisterContainer,
    RegisterContent,
    RegisterContentText,
    RegisterTitle,
    RegisterSubTitle,
    RegisterForm,
    RegisterInputContainer,
    RegisterLabel,
    Input,
    RegisterFormSubmit
} from "./styles";

export default function RegisterEmployee() {
    return (
        <Container>
            <RegisterContainer>
                <AuthHeader />
                <RegisterContent>
                    <RegisterContentText>
                        <RegisterTitle>Cadastrar uma Funcionário</RegisterTitle>
                        <RegisterSubTitle>Crie sua conta de funcionário agora!</RegisterSubTitle>
                    </RegisterContentText>

                    <RegisterForm>
                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="inome">Nome</RegisterLabel>
                            <Input 
                                placeholder="Digite o nome da empresa"
                                type="text"
                                name="nome"
                                required
                                id="inome"
                            />
                        </RegisterInputContainer>
                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="iemail">Email</RegisterLabel>
                            <Input 
                                placeholder="testeteste@gmail.com"
                                type="email"
                                name="email"
                                required
                                id="iemail"
                            />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="isenha">Senha</RegisterLabel>
                            <Input 
                                placeholder="***************"
                                type="password"
                                required
                                name="senha"
                                id="isenha"
                            />
                        </RegisterInputContainer>

                        <RegisterFormSubmit 
                            type="submit"
                        >
                            Cadastrar
                        </RegisterFormSubmit>

                    </RegisterForm>
                </RegisterContent>
            </RegisterContainer>
        </Container>
    );
}