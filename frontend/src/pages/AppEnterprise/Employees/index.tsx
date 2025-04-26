import { useState } from "react";
import { useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import { Container, EmployeesHeader, EmployeesHeaderAdd, EmployeesHeaderTitle, EmployeesContentContainer, EmployeesContent, EmployeesStatus, EmployeesTotalContainer, EmployeesTotalTitle, EmployeesTotal, EmployeesSearchContainer, EmployeesSearchInputContainer, SearchIcon, EmployeesSearchInput, EmployeesContainer } from "./styles";
import { EmployeeCard } from "../../../components/employee-card";

export default function EmployeesEnterprise() {
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const employees = [
        {
            id: "1",
            nome: "Luís Eduardo",
            photo: "https://github.com/luiscarlosedu.png",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "eduardo.luis@gmail.com",
            number: "88997876890"
        },
        {
            id: "2",
            nome: "José Felipe",
            photo: "https://github.com/wtffelp.png",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "goticas@gmail.com",
            number: "8899787950"
        },
        {
            id: "3",
            nome: "Cleudo Paiva",
            photo: "https://github.com/cleudojunior.png",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "cleudinha@gmail.com",
            number: "88997879990"
        },
        {
            id: "4",
            nome: "Nério Stacio",
            photo: "https://github.com/NarioMendonca.png",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "rogerio@gmail.com",
            number: "88967872140"
        },
        
    ]
    return (
        <Container
            onClick={() => setOpenMenu(null)}
        >
            <EmployeesContentContainer>
                <EmployeesHeader>
                    <EmployeesHeaderTitle>
                        Funcionários
                    </EmployeesHeaderTitle>
                    <EmployeesHeaderAdd
                        onClick={() => navigate('/empresa/funcionarios/adicionar')}
                    >
                        + Adicionar funcionários
                    </EmployeesHeaderAdd>
                </EmployeesHeader>

                <EmployeesContent>
                    <EmployeesStatus>
                        <EmployeesTotalContainer>
                            <EmployeesTotalTitle>Total de Funcionários</EmployeesTotalTitle>
                            <EmployeesTotal>{employees.length}</EmployeesTotal>
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
                                id={item.id}
                                key={item.nome}
                                nome={item.nome}
                                photo={item.photo}
                                role={item.role}
                                empresa={item.empresa}
                                hired={item.hired}
                                email={item.email}
                                number={item.number}
                                openMenu={openMenu}
                                setOpenMenu={setOpenMenu}
                            />
                        ))}

                    </EmployeesContainer>

                </EmployeesContent>

            </EmployeesContentContainer>
        </Container>
    );
}