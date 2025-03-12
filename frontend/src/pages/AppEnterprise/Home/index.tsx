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

import { EmployeeLengthWarn } from "../../../components/EmployeeLengthWarn";
import Image from '../../../assets/enterprise-stock.jpg';
import Logo from '../../../assets/SyncStock.png';

export default function HomeEnterprise() {
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
                                    SyncStock {/* nome da empresa */}
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
                    <StockCard>📦 Produtos: 120</StockCard>
                    <StockCard>📂 Categorias: 10</StockCard>
                    {/* <StockCard>⚠️ Baixo Estoque: 5</StockCard> */}
                </StockSummary>

                <QuickActions>
                    <ActionButton>➕ Adicionar Produto</ActionButton>
                    <ActionButton>👥 Cadastrar Funcionário</ActionButton>
                    <ActionButton>📂 Gerenciar Categorias</ActionButton>
                </QuickActions>

            </HomeContentContainer>
        </Container>
    );
}
