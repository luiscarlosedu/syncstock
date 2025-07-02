import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import { Container, EmployeesHeader, EmployeesHeaderAdd, EmployeesHeaderTitle, EmployeesContentContainer, EmployeesContent, EmployeesStatus, EmployeesTotalContainer, EmployeesTotalTitle, EmployeesTotal, EmployeesSearchContainer, EmployeesSearchInputContainer, SearchIcon, EmployeesSearchInput, EmployeesContainer, NoEmployeesContainer, NoEmployeesIcon, NoEmployeesTitle, NoEmployeesText } from "./styles";
import { EmployeeCard } from "../../../components/employee-card";
import { AuthContext } from "../../../contexts/AuthContext";
import api from "../../../services/api";

interface EmployeeProps {
    id: string;
    nome: string;
    email: string;
    foto: string;
    createdAt: string;
    empresa_nome: string;
};

interface EmployeeResponse {
    id: string;
    nome: string;
    email: string;
    foto: string;
    createdAt: string;
    empresa: {
        nome: string;
    };
};

export default function EmployeesEnterprise() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [employees, setEmployees] = useState<EmployeeProps[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredEmployees = employees.filter(employee => 
        employee.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    useEffect(() => {
        async function loadEmployees() {
            try {
                const response = await api.get("/enterprise/employees");

                const employeesData = response.data.map((employee: EmployeeResponse) => ({
                    id: employee.id,
                    nome: employee.nome,
                    email: employee.email,
                    foto: employee.foto,
                    createdAt: employee.createdAt,
                    empresa_nome: employee.empresa.nome,
                }));

                setEmployees(employeesData);
            } catch (err) {
                console.log("[ERRO], Erro ao carregar funcionários!", err);
            }
        }

        if (user) {
            loadEmployees();
        }
    }, [user, employees]);

    if (!user) {
        return <Navigate to={"/"} replace />
    }

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
                                <EmployeesSearchInput 
                                    placeholder="Buscar funcionários..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                />
                            </EmployeesSearchInputContainer>
                        </EmployeesSearchContainer>
                    </EmployeesStatus>

                    <EmployeesContainer>

                        {employees.length === 0 ? (
                            <NoEmployeesContainer>
                                <NoEmployeesIcon>👥</NoEmployeesIcon>
                                <NoEmployeesTitle>Você ainda não possui funcionários</NoEmployeesTitle>
                                <NoEmployeesText>
                                    Comece organizando sua equipe adicionando seus primeiros colaboradores.
                                </NoEmployeesText>
                                <EmployeesHeaderAdd onClick={() => navigate('/empresa/funcionarios/adicionar')}>
                                    + Adicionar agora
                                </EmployeesHeaderAdd>
                            </NoEmployeesContainer>
                        ): filteredEmployees.length === 0 ? (
                            <NoEmployeesContainer>
                                <NoEmployeesIcon>🔍</NoEmployeesIcon>
                                <NoEmployeesTitle>Nenhum funcionário encontrado</NoEmployeesTitle>
                                <NoEmployeesText>
                                    Tente buscar por outro nome ou limpe o campo de pesquisa.
                                </NoEmployeesText>
                            </NoEmployeesContainer>
                        ): (
                            filteredEmployees.map((item) => (
                                <EmployeeCard 
                                    id={item.id}
                                    key={item.nome}
                                    nome={item.nome}
                                    photo={item.foto}
                                    empresa={item.empresa_nome}
                                    created_at={item.createdAt}
                                    email={item.email}
                                    // number={item.number}
                                    openMenu={openMenu}
                                    setOpenMenu={setOpenMenu}
                                />
                            ))
                        )}
                    </EmployeesContainer>

                </EmployeesContent>

            </EmployeesContentContainer>
        </Container>
    );
}