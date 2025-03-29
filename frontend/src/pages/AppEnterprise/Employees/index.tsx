import { Container, EmployeesHeader, EmployeesHeaderAdd, EmployeesHeaderTitle, EmployeesContentContainer } from "./styles";

export default function EmployeesEnterprise() {
    return (
        <Container>
            <EmployeesContentContainer>
                <EmployeesHeader>
                    <EmployeesHeaderTitle>
                        Funcionários
                    </EmployeesHeaderTitle>
                    <EmployeesHeaderAdd>
                        Adicionar funcionários
                    </EmployeesHeaderAdd>
                </EmployeesHeader>

                
            </EmployeesContentContainer>
        </Container>
    );
}