import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Container, EmployeesHeader, EmployeesHeaderAdd, EmployeesHeaderTitle, EmployeesContentContainer, EmployeesContent, EmployeesStatus, EmployeesTotalContainer, EmployeesTotalTitle, EmployeesTotal, EmployeesSearchContainer, EmployeesSearchInputContainer, SearchIcon, EmployeesSearchInput, EmployeesContainer } from "./styles";
import { EmployeeCard } from "../../../components/employee-card";

export default function EmployeesEnterprise() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const employees = [
        {
            id: "1",
            nome: "Luís Eduardo",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "eduardo.luis@gmail.com",
            number: "88997876890"
        },
        {
            id: "2",
            nome: "Luís Eduardo",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "eduardo.luis@gmail.com",
            number: "88997876890"
        },
        {
            id: "3",
            nome: "Luís Eduardo",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "eduardo.luis@gmail.com",
            number: "88997876890"
        },
        {
            id: "4",
            nome: "Luís Eduardo",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "eduardo.luis@gmail.com",
            number: "88997876890"
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
                                id={item.id}
                                key={item.nome}
                                nome={item.nome}
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

/*

import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { 
    Container, EmployeesHeader, EmployeesHeaderAdd, EmployeesHeaderTitle, EmployeesContentContainer, 
    EmployeesContent, EmployeesStatus, EmployeesTotalContainer, EmployeesTotalTitle, EmployeesTotal, 
    EmployeesSearchContainer, EmployeesSearchInputContainer, SearchIcon, EmployeesSearchInput, EmployeesContainer 
} from "./styles";
import { EmployeeCard } from "../../../components/employee-card";

export default function EmployeesEnterprise() {
    const [openMenu, setOpenMenu] = useState<string | null>(null);

    const employees = [
        {
            id: "1",
            nome: "Luís Eduardo",
            role: "Desenvolvedor",
            empresa: "SyncStock",
            hired: "12/94/29",
            email: "eduardo.luis@gmail.com",
            number: "88997876890"
        },
        {
            id: "2",
            nome: "José Felipe",
            role: "Gerente",
            empresa: "SyncStock",
            hired: "15/06/2023",
            email: "jose.felipe@gmail.com",
            number: "88991234567"
        }
    ];

    return (
        <Container onClick={() => setOpenMenu(null)}> 
            <EmployeesContentContainer>
                <EmployeesHeader>
                    <EmployeesHeaderTitle>Funcionários</EmployeesHeaderTitle>
                    <EmployeesHeaderAdd>+ Adicionar funcionários</EmployeesHeaderAdd>
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
                                key={item.id}
                                id={item.id}
                                nome={item.nome}
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

*/