import { EnterpriseData } from "..";
import { Container, EmployeeCard, EmployeeInfo, EmployeeName, EmployeeEmail, EmployeeAvatar, NoEmployeesContainer, NoEmployeesIcon, NoEmployeesTitle, NoEmployeesText } from "./styles";

interface Props {
    data: EnterpriseData["funcionarios"];
}

export function EnterpriseEmployees({data}: Props) {
    return (
        <Container>
            {data.length === 0 ? (
                <NoEmployeesContainer>
                    <NoEmployeesIcon>👥</NoEmployeesIcon>
                    <NoEmployeesTitle>Nenhum funcionário encontrado</NoEmployeesTitle>
                    <NoEmployeesText>
                        Comece adicionando seus primeiros colaboradores à sua empresa.
                    </NoEmployeesText>
                </NoEmployeesContainer>
            ) : (
                data.map((emp) => (
                    <EmployeeCard key={emp.id}>
                        <EmployeeAvatar 
                            src={
                                emp.foto 
                                    ? `${import.meta.env.VITE_API_URL}/files/${emp.foto}`
                                    : `https://ui-avatars.com/api/?name=${emp.nome}&background=202020&color=fff`
                            } 
                        />
                        <EmployeeInfo>
                            <EmployeeName>{emp.nome}</EmployeeName>
                            <EmployeeEmail>{emp.email}</EmployeeEmail>
                        </EmployeeInfo>
                    </EmployeeCard>
                ))
            )}
        </Container>
    );
};