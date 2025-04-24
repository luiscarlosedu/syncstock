import { Container, EmployeeCard, EmployeeInfo, EmployeeName, EmployeeRole, EmployeeEmail, EmployeeAvatar } from "./styles";

export function EnterpriseEmployees() {
    // Isso aqui depois vai vir da API
    const employees = [
        { id: 1, nome: "Carlos Alberto", email: "carlos@syncstock.com", cargo: "Gerente" },
        { id: 2, nome: "Fernanda Lima", email: "fernanda@syncstock.com", cargo: "Estoquista" },
        { id: 3, nome: "João Pedro", email: "joao@syncstock.com", cargo: "Vendedor" },
    ];

    return (
        <Container>
            <EmployeeCard>
                <EmployeeAvatar 
                    src={`https://ui-avatars.com/api/?name=${"Luís Eduardo"}&background=202020&color=fff`} 
                />
                <EmployeeInfo>
                    <EmployeeName>Luís Eduardo</EmployeeName>
                    <EmployeeEmail>eduardo.luis070408@gmail.com</EmployeeEmail>
                </EmployeeInfo>
            </EmployeeCard>
        </Container>
    );
}
