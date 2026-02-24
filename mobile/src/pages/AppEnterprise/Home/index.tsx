import { Text, ScrollView } from "react-native";
import { EnterpriseLayout } from "../../../components/layouts/enterprise-layout";
import {
    Container,
    HomeContentContainer,
    HomeTitle,
    HomeSubTitle,
    HomePhoto,
    HomeContent,
    EnterpriseInfoContainer,
    EnterpriseCard,
    EnterpriseLogo,
    EnterpriseDetails,
    EnterpriseDetailsText,
    EmployeeCard,
    EmployeeIcon,
    EnterpriseLabel,
    EnterpriseTotal,
    StockSummary,
    StockCard,
    StockBold,
    QuickActions,
    ActionButton,
    ActionButtonText,
} from "./styles";

const BANNER = require("../../../assets/enterprise-stock.jpg");

export default function HomeEnterprise() {
    return (
        <EnterpriseLayout>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Container>
                    <HomeContentContainer>
                        <HomeTitle>Olá, Empresa!</HomeTitle>
                        <HomeSubTitle>Gerencie seu estoque com nossa plataforma.</HomeSubTitle>

                        <HomePhoto source={BANNER} resizeMode="cover" />

                        <HomeContent>
                            <EnterpriseInfoContainer>
                                <EnterpriseCard>
                                    <EnterpriseLogo
                                        source={{ uri: "https://ui-avatars.com/api/?name=Empresa+X&background=202020&color=fff" }}
                                    />
                                    <EnterpriseDetails>
                                        <EnterpriseDetailsText>Agimiro</EnterpriseDetailsText>
                                    </EnterpriseDetails>
                                </EnterpriseCard>

                                <EmployeeCard>
                                    <EmployeeIcon>👥</EmployeeIcon>
                                    <EnterpriseDetails>
                                        <EnterpriseLabel>Funcionários Cadastrados</EnterpriseLabel>
                                        <EnterpriseTotal>5</EnterpriseTotal>
                                    </EnterpriseDetails>
                                </EmployeeCard>
                            </EnterpriseInfoContainer>
                        </HomeContent>

                        <StockSummary>
                            <StockCard>
                                <Text>📦 Produtos: <StockBold>32</StockBold></Text>
                            </StockCard>
                            <StockCard>
                                <Text>📂 Categorias: <StockBold>8</StockBold></Text>
                            </StockCard>
                        </StockSummary>

                        <QuickActions>
                            {[
                                "➕ Adicionar Produto",
                                "👥 Cadastrar Funcionário",
                                "📂 Gerenciar Categorias",
                            ].map((label) => (
                                <ActionButton key={label} activeOpacity={0.75}>
                                    <ActionButtonText>{label}</ActionButtonText>
                                </ActionButton>
                            ))}
                        </QuickActions>
                    </HomeContentContainer>
                </Container>
            </ScrollView>
        </EnterpriseLayout>
    );
}