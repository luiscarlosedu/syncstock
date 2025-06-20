import { useNavigate } from "react-router";
import { 
    Container, 
    HomeContentContainer, 
    HomePhoto, 
    HomeSubTitle, 
    HomeTitle,
    HomeContent,
    EnterpriseInfoContainer,
    EnterpriseCard,
    EnterpriseLogo,
    EnterpriseDetails,
    EnterpriseLabel,
    EnterpriseTotal,
    EmployeeCard,
    EmployeeIcon,
    StockSummary,
    StockCard,
    QuickActions,
    ActionButton,
    EnterpriseDetailsText
} from "./styles";

import { EmployeeLengthWarn } from "../../../components/employee-length-warn";
import Image from '../../../assets/enterprise-stock.jpg';
import Logo from '../../../assets/SyncStock.png';
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function HomeEnterprise() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const length: number = 0;
    
    return (
        <Container>
            <HomeContentContainer>
                {length === 0 && <EmployeeLengthWarn/>}
                
                <HomeTitle>Olá, Empresa!</HomeTitle>
                <HomeSubTitle>Gerencie seu estoque com nossa plataforma.</HomeSubTitle>
                
                <HomePhoto src={Image} />

                <HomeContent>
                    <EnterpriseInfoContainer>

                        <EnterpriseCard>
                            <EnterpriseLogo src={Logo} alt="Logo da Empresa" />
                            <EnterpriseDetails>
                                <EnterpriseDetailsText>
                                    SyncStock
                                </EnterpriseDetailsText>
                            </EnterpriseDetails>
                        </EnterpriseCard>

                        <EmployeeCard>
                            <EmployeeIcon>👥</EmployeeIcon>
                            <EnterpriseDetails>
                                <EnterpriseLabel>Funcionários Cadastrados</EnterpriseLabel>
                                <EnterpriseTotal>35</EnterpriseTotal>
                            </EnterpriseDetails>
                        </EmployeeCard>
                    </EnterpriseInfoContainer>

                </HomeContent>

                <StockSummary>
                    <StockCard>📦 Produtos: <span>120</span></StockCard>
                    <StockCard>📂 Categorias:  <span>10</span></StockCard>
                </StockSummary>

                <QuickActions>
                    <ActionButton
                        onClick={() => navigate('/empresa/produtos/adicionar')}
                    >➕ Adicionar Produto</ActionButton>
                    <ActionButton
                        onClick={() => navigate('/empresa/funcionarios/adicionar')}
                    >👥 Cadastrar Funcionário</ActionButton>
                    <ActionButton
                        onClick={() => navigate('/empresa/categorias')}
                    >📂 Gerenciar Categorias</ActionButton>
                </QuickActions>

            </HomeContentContainer>
        </Container>
    );
}
