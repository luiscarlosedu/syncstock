import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { FaSearch } from "react-icons/fa";
import { Container, EmployeesHeader, EmployeesHeaderAdd, EmployeesHeaderTitle, EmployeesContentContainer, EmployeesContent, EmployeesStatus, EmployeesTotalContainer, EmployeesTotalTitle, EmployeesTotal, EmployeesSearchContainer, EmployeesSearchInputContainer, SearchIcon, EmployeesSearchInput, EmployeesContainer } from "./styles";
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

    // const employees = [
    //     {
    //         id: "1",
    //         nome: "Luís Eduardo",
    //         photo: "https://github.com/luiscarlosedu.png",
    //         role: "Desenvolvedor",
    //         empresa: "SyncStock",
    //         hired: "12/94/29",
    //         email: "eduardo.luis@gmail.com",
    //         number: "88997876890"
    //     },
    //     {
    //         id: "2",
    //         nome: "José Felipe",
    //         photo: "https://github.com/wtffelp.png",
    //         role: "Desenvolvedor",
    //         empresa: "SyncStock",
    //         hired: "12/94/29",
    //         email: "goticas@gmail.com",
    //         number: "8899787950"
    //     },
    //     {
    //         id: "3",
    //         nome: "Cleudo Paiva",
    //         photo: "https://github.com/cleudojunior.png",
    //         role: "Desenvolvedor",
    //         empresa: "SyncStock",
    //         hired: "12/94/29",
    //         email: "cleudinha@gmail.com",
    //         number: "88997879990"
    //     },
    //     {
    //         id: "4",
    //         nome: "Nério Stacio",
    //         photo: "https://github.com/NarioMendonca.png",
    //         role: "Desenvolvedor",
    //         empresa: "SyncStock",
    //         hired: "12/94/29",
    //         email: "rogerio@gmail.com",
    //         number: "88967872140"
    //     },
        
    // ]

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

                console.log(employees)
            } catch (err) {
                console.log("[ERRO], Erro ao carregar funcionários!", err);
            }
        }

        if (user) {
            loadEmployees();
        }
    }, [user]);

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
                            <EmployeesTotal>{/*employees.length*/}</EmployeesTotal>
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
                                photo={item.foto}
                                empresa={item.empresa_nome}
                                // hired={item.hired}
                                email={item.email}
                                // number={item.number}
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