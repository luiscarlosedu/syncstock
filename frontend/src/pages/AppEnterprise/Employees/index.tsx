import { FaSearch } from "react-icons/fa";
import { Container, EmployeesHeader, EmployeesHeaderAdd, EmployeesHeaderTitle, EmployeesContentContainer, EmployeesContent, EmployeesStatus, EmployeesTotalContainer, EmployeesTotalTitle, EmployeesTotal, EmployeesSearchContainer, EmployeesSearchInputContainer, SearchIcon, EmployeesSearchInput, EmployeesContainer } from "./styles";
import { EmployeeCard } from "../../../components/employee-card";

export default function EmployeesEnterprise() {
    const employees = [
        {
            nome: "Luís Eduardo",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "eduardo.luis@gmail.com",
            number: "88997876890"
        },
        {
            nome: "Luís Eduardo",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "eduardo.luis@gmail.com",
            number: "88997876890"
        },
        {
            nome: "Luís Eduardo",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "eduardo.luis@gmail.com",
            number: "88997876890"
        },
        {
            nome: "Luís Eduardo",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "eduardo.luis@gmail.com",
            number: "88997876890"
        },
        
    ]
    return (
        <Container>
            <EmployeesContentContainer>
                <EmployeesHeader>
                    <EmployeesHeaderTitle>
                        Funcionários
                    </EmployeesHeaderTitle>
                    <EmployeesHeaderAdd>
                        + Adicionar funcionários
                    </EmployeesHeaderAdd>
                </EmployeesHeader>

                <EmployeesContent>
                    <EmployeesStatus>
                        <EmployeesTotalContainer>
                            <EmployeesTotalTitle>Total de Funcionários</EmployeesTotalTitle>
                            <EmployeesTotal>16</EmployeesTotal>
                        </EmployeesTotalContainer>

                        <EmployeesSearchContainer>
                            <EmployeesSearchInputContainer>
                                <SearchIcon>
                                    <FaSearch />
                                </SearchIcon>
                                <EmployeesSearchInput placeholder="Buscar funcionários..." />
                            </EmployeesSearchInputContainer>
                        </EmployeesSearchContainer>
                    </EmployeesStatus>

                    <EmployeesContainer>

                        {employees.map((item) => (
                            <EmployeeCard 
                                key={item.nome}
                                nome={item.nome}
                                role={item.role}
                                empresa={item.empresa}
                                hired={item.hired}
                                email={item.email}
                                number={item.number}
                            />
                        ))}

                    </EmployeesContainer>

                </EmployeesContent>

            </EmployeesContentContainer>
        </Container>
    );
}