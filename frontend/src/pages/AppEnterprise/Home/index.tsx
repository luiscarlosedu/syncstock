import { Navigate, useNavigate } from "react-router";
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
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import api from "../../../services/api";
import { Loading } from "../../../components/loading";

interface EnterpriseProps {
    nome: string;
    email: string;
    cnpj: string;
    foto: string;
    telefone: string;
    endereco: string;
    createdAt: string
    employeesCount: number;
    productsCount: number;
    categoriesCount: number;
}

export default function HomeEnterprise() {
    const { user } = useContext(AuthContext);
    const [enterpriseData, setEnterpriseData] = useState<EnterpriseProps>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    
    const navigate = useNavigate();

    useEffect(() => {
        loadStorage();
    }, []);

    if (!user) {
        return <Navigate to={"/"} />
    };

    async function loadStorage() {
        setIsLoading(true);
        try {
            const response = await api.get("/enterprise/detail");
            setEnterpriseData(response.data);
        } catch (err) {
            console.log("[ERRO] ", err);
        } finally {
            setIsLoading(false);
        };
    };

    if (isLoading) {
        return (
            <Container>
                <Loading message="Carregando informações..." />
            </Container>
        );
    }
    
    return (
        <Container>
            <HomeContentContainer>
                {enterpriseData?.employeesCount === 0 && <EmployeeLengthWarn/>}
                
                <HomeTitle>Olá, Empresa!</HomeTitle>
                <HomeSubTitle>Gerencie seu estoque com nossa plataforma.</HomeSubTitle>
                
                <HomePhoto src={Image} />

                <HomeContent>
                    <EnterpriseInfoContainer>

                        <EnterpriseCard>
                            <EnterpriseLogo 
                                src={
                                    enterpriseData?.foto
                                    ? `${import.meta.env.VITE_API_URL}/files/${enterpriseData.foto}`
                                    : `https://ui-avatars.com/api/?name=${enterpriseData?.nome}&background=202020&color=fff`
                                } 
                                alt="Logo da Empresa" />
                            <EnterpriseDetails>
                                <EnterpriseDetailsText>
                                    {enterpriseData?.nome}
                                </EnterpriseDetailsText>
                            </EnterpriseDetails>
                        </EnterpriseCard>

                        <EmployeeCard>
                            <EmployeeIcon>👥</EmployeeIcon>
                            <EnterpriseDetails>
                                <EnterpriseLabel>Funcionários Cadastrados</EnterpriseLabel>
                                <EnterpriseTotal>{enterpriseData?.employeesCount}</EnterpriseTotal>
                            </EnterpriseDetails>
                        </EmployeeCard>
                    </EnterpriseInfoContainer>

                </HomeContent>

                <StockSummary>
                    <StockCard>📦 Produtos: <span>{enterpriseData?.productsCount}</span></StockCard>
                    <StockCard>📂 Categorias:  <span>{enterpriseData?.categoriesCount}</span></StockCard>
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
