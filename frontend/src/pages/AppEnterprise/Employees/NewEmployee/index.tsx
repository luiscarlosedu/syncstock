import { Container, EmployeesContentContainer } from "../styles";
import { EmployeeTitle, EmployeeTitleContainer, RegisterEmployeeContent } from "./styles";

export default function NewEmployeeEnterprise() {
    return (
        <Container>
            <EmployeesContentContainer>
                <EmployeeTitleContainer>
                    <EmployeeTitle>Cadastrar funcionário</EmployeeTitle>
                </EmployeeTitleContainer>

                <RegisterEmployeeContent>
                    
                </RegisterEmployeeContent>
            </EmployeesContentContainer>
        </Container>
    );
}

/*
Insira o e-mail do funcionário que deseja cadastrar na empresa. 
                    Ele receberá um convite para acessar a plataforma.
*/