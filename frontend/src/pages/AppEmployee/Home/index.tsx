import { useNavigate } from "react-router";
import { ActionButton, Container, EmployeeCard, EmployeeInfoContainer, EmployeesCard, EmployeesIcon, EmployeesLabel, EmployeesTotal, EnterpriseDetails, EnterpriseDetailsText, EnterpriseLogo, HomeContent, HomeContentContainer, HomePhoto, HomeSubTitle, HomeTitle, QuickActions, StockCard, StockSummary } from "./styles";

import Image from '../../../assets/home-employee.jpg';

import Logo from '../../../assets/SyncStock.png';

export default function HomeEmployee() {
    const navigate = useNavigate();

    return (
        <Container>
            <HomeContentContainer>

                <HomeTitle>Olá, Funcionário!</HomeTitle>
                <HomeSubTitle>Gerencie o estoque da sua empresa com nossa plataforma.</HomeSubTitle>

                <HomePhoto src={Image} />

                <HomeContent>
                    <EmployeeInfoContainer>
                        <EmployeeCard>
                            <EnterpriseLogo src={Logo} alt="Logo da Empresa" />
                            <EnterpriseDetails>
                                <EnterpriseDetailsText>
                                    SyncStock
                                </EnterpriseDetailsText>
                            </EnterpriseDetails>
                        </EmployeeCard>

                        <EmployeesCard>
                            <EmployeesIcon>👥</EmployeesIcon>
                            <EnterpriseDetails>
                                <EmployeesLabel>Funcionários Cadastrados</EmployeesLabel>
                                <EmployeesTotal>35</EmployeesTotal>
                            </EnterpriseDetails>
                        </EmployeesCard>
                    </EmployeeInfoContainer>
                </HomeContent>

                <StockSummary>
                    <StockCard>📦 Produtos: <span>120</span></StockCard>
                    <StockCard>📂 Categorias: <span>10</span></StockCard>
                </StockSummary>

                <QuickActions>
                    <ActionButton
                        onClick={() => navigate('/funcionario/produtos/adicionar')}
                    >➕ Adicionar Produto</ActionButton>
                    <ActionButton
                        onClick={() => navigate('/funcionario/funcionarios/adicionar')}
                    >👥 Cadastrar Funcionário</ActionButton>
                    <ActionButton
                        onClick={() => navigate('/funcionario/categorias')}
                    >📂 Gerenciar Categorias</ActionButton>
                </QuickActions>

            </HomeContentContainer>
        </Container>
    );
}