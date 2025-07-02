import { useContext, useEffect, useState } from "react";
import { Container, EmployeeCard, EmployeeInfo, EmployeeName, EmployeeEmail, EmployeeAvatar, NoEmployeesContainer, NoEmployeesIcon, NoEmployeesTitle, NoEmployeesText } from "./styles";
import api from "../../../../services/api";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Navigate } from "react-router";

interface EmployeeProps {
    id: string;
    nome: string;
    email: string;
    foto?: string;
}

export function EnterpriseEmployees() {
    const [employees, setEmployees] = useState<EmployeeProps[]>([]);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        loadStorage();
    }, []);

    if(!user) {
        return <Navigate to="/" replace />
    }

    async function loadStorage() {
        try {
            const response = await api.get("/enterprise/employees");
            setEmployees(response.data);
        } catch (err) {
            console.log("[ERRO]", err);
        }
    }

    return (
        <Container>
            {employees.length === 0 ? (
                <NoEmployeesContainer>
                    <NoEmployeesIcon>👥</NoEmployeesIcon>
                    <NoEmployeesTitle>Nenhum funcionário encontrado</NoEmployeesTitle>
                    <NoEmployeesText>
                        Adicione colaboradores à sua equipe para começar.
                    </NoEmployeesText>
                </NoEmployeesContainer>
            ) : (
                employees.map((emp) => (
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
}
