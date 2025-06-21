import { Navigate, useNavigate } from "react-router";
import { ActionButton, Container, EmployeeCard, EmployeeInfoContainer, EmployeesCard, EmployeesIcon, EmployeesLabel, EmployeesTotal, EnterpriseDetails, EnterpriseDetailsText, EnterpriseLogo, HomeContent, HomeContentContainer, HomePhoto, HomeSubTitle, HomeTitle, QuickActions, StockCard, StockSummary } from "./styles";

import Image from '../../../assets/home-employee.jpg';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import api from "../../../services/api";

interface EnterpriseData {
    nome: string;
    foto: string;
    employeesCount: number;
    productsCount: number;
    categoriesCount: number;
}

export default function HomeEmployee() {
    const { user } = useContext(AuthContext);
    const [enterpriseData, setEnterpriseData] = useState<EnterpriseData | null>();
    const navigate = useNavigate();

    useEffect(() => {
        async function loadStorage() {
            try {
                const response = await api.get("/employee/enterprise", {
                    params: {
                        enterprise_id: user?.enterprise_id,
                    }
                });

                const { nome, foto, funcionarios, productsCount, categoriesCount } = response.data;
                const employeesCount = funcionarios.length;

                setEnterpriseData({
                    nome, foto, employeesCount, productsCount, categoriesCount
                });
            } catch (err) {
                console.log("[ERRO]", err);
            }
        };

        if (user?.enterprise_id) {
            loadStorage();
        }
    }, [user]);

    if (!user) {
        return <Navigate to={"/"} replace />
    };

    return (
        <Container>
            <HomeContentContainer>

                <HomeTitle>Olá, Funcionário!</HomeTitle>
                <HomeSubTitle>Gerencie o estoque da sua empresa com nossa plataforma.</HomeSubTitle>

                <HomePhoto src={Image} />

                <HomeContent>
                    <EmployeeInfoContainer>
                        <EmployeeCard>
                            <EnterpriseLogo 
                                src={
                                    user?.foto 
                                    ? `${import.meta.env.VITE_API_URL}/files/${user.foto}`
                                    : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nome)}&background=202020&color=fff`
                                } 
                            alt="Logo da Empresa" />
                            <EnterpriseDetails>
                                <EnterpriseDetailsText>
                                    {user.nome}
                                </EnterpriseDetailsText>
                            </EnterpriseDetails>
                        </EmployeeCard>

                        {enterpriseData && (
                            <EmployeesCard>
                                <EnterpriseLogo 
                                    src={
                                        enterpriseData.foto
                                        ? `${import.meta.env.VITE_API_URL}/files/${enterpriseData.foto}`
                                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(enterpriseData.nome)}&background=202020&color=fff`
                                    } 
                                />
                                <EnterpriseDetails>
                                    <EmployeesLabel>Empresa Vinculada</EmployeesLabel>
                                    <EnterpriseDetailsText>{enterpriseData.nome}</EnterpriseDetailsText>
                                </EnterpriseDetails>
                            </EmployeesCard>
                        )}

                        <EmployeesCard>
                            <EmployeesIcon>👥</EmployeesIcon>
                            <EnterpriseDetails>
                                <EmployeesLabel>Funcionários Cadastrados</EmployeesLabel>
                                <EmployeesTotal>{enterpriseData?.employeesCount}</EmployeesTotal>
                            </EnterpriseDetails>
                        </EmployeesCard>
                    </EmployeeInfoContainer>
                </HomeContent>

                <StockSummary>
                    <StockCard>📦 Produtos: <span>{enterpriseData?.productsCount}</span></StockCard>
                    <StockCard>📂 Categorias: <span>{enterpriseData?.categoriesCount}</span></StockCard>
                </StockSummary>

                <QuickActions>
                    <ActionButton
                        onClick={() => navigate('/funcionario/produtos')}
                    >➕ Movimentar Produtos</ActionButton>
                    <ActionButton
                        onClick={() => navigate('/funcionario/categorias')}
                    >🏷️ Visualizar Categorias</ActionButton>
                    <ActionButton
                        onClick={() => navigate('/funcionario/empresa')}
                    >👥 Detalhes da Empresa</ActionButton>
                    <ActionButton
                        onClick={() => navigate('/funcionario/faq')}
                    >📂 Tutorial para Funcionário</ActionButton>
                </QuickActions>

            </HomeContentContainer>
        </Container>
    );
}