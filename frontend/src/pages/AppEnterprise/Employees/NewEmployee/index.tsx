import { Container, EmployeesContentContainer } from "../styles";
import { EmployeeTitle, EmployeeTitleContainer, InputLabel, RegisterBtn, RegisterDescription, RegisterEmployeeContent, RegisterForm, RegisterInput } from "./styles";

export default function NewEmployeeEnterprise() {
    return (
        <Container>
            <EmployeesContentContainer>
                <EmployeeTitleContainer>
                    <EmployeeTitle>Cadastrar funcionário</EmployeeTitle>
                </EmployeeTitleContainer>

                <RegisterEmployeeContent>
                    <RegisterDescription>
                        Insira o e-mail de um usuário que ainda não está vinculado a uma empresa. Certifique-se de entrar em contato com ele antes de concluir o cadastro na plataforma.
                    </RegisterDescription>
                    <RegisterForm>
                        <InputLabel htmlFor="email">Email do funcionário</InputLabel>
                        <RegisterInput 
                            id="email"
                            type="email"
                            placeholder="Ex: teste@teste.com"
                        />
                        <RegisterBtn>
                            Cadastrar
                        </RegisterBtn>
                    </RegisterForm>
                </RegisterEmployeeContent>
            </EmployeesContentContainer>
        </Container>
    );
}