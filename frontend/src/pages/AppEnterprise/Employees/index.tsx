import { Container, EmployeeHeader, EmployeeHeaderAdd, EmployeeHeaderTitle, EmployeesContentContainer } from "./styles";

export default function EmployeesEnterprise() {
    return (
        <Container>
            <EmployeesContentContainer>
                <EmployeeHeader>
                    <EmployeeHeaderTitle>
                        Funcionários
                    </EmployeeHeaderTitle>
                    <EmployeeHeaderAdd>
                        Adicionar funcionários
                    </EmployeeHeaderAdd>
                </EmployeeHeader>
            </EmployeesContentContainer>
        </Container>
    );
}