import { FaSearch } from "react-icons/fa";
import { Container, EmployeesHeader, EmployeesHeaderAdd, EmployeesHeaderTitle, EmployeesContentContainer, EmployeesContent, EmployeesStatus, EmployeesTotalContainer, EmployeesTotalTitle, EmployeesTotal, EmployeesSearchContainer, EmployeesSearchInputContainer, SearchIcon, EmployeesSearchInput } from "./styles";

export default function EmployeesEnterprise() {
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
                </EmployeesContent>

            </EmployeesContentContainer>
        </Container>
    );
}