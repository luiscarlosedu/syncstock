import { useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { EnterpriseLayout } from "../../../components/layouts/enterprise-layout";
import { Container, NoProductsContainer, NoProductsIcon, NoProductsText, NoProductsTitle, ProductContentContainer, ProductsTitle, ProductsTitleAddContainer, SearchInput, SearchWrapper, SummaryBar, SummaryBarText, SummaryCount } from "./styles";
import Ionicons from "@expo/vector-icons/Ionicons";

const FIXED_PRODUCTS = [
    {
        id: "1",
        nome: "Parafuso Sextavado M8",
        quantidade: "150",
        categoria_nome: "Fixadores",
        foto: "",
    },
    {
        id: "2",
        nome: "Chave de Fenda Phillips",
        quantidade: "40",
        categoria_nome: "Ferramentas",
        foto: "",
    },
    {
        id: "3",
        nome: "Luva de Segurança",
        quantidade: "80",
        categoria_nome: "EPIs",
        foto: "",
    },
    {
        id: "4",
        nome: "Tinta Spray Preta 400ml",
        quantidade: "25",
        categoria_nome: "Acabamentos",
        foto: "",
    },
];

export default function ProductsEnterprise() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = FIXED_PRODUCTS.filter((product) =>
        product.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <EnterpriseLayout>
            <Container>
                <ProductContentContainer>
                    <ProductsTitleAddContainer>
                        <ProductsTitle>Produtos</ProductsTitle>
                    </ProductsTitleAddContainer>

                    <SearchWrapper>
                        <Ionicons name="search" size={20} color="#888" />
                        <SearchInput 
                            placeholder="Buscar produtos..."
                            placeholderTextColor="#888"
                            value={searchTerm}
                            onChangeText={setSearchTerm}
                        />
                    </SearchWrapper>

                    <SummaryBar>
                        <SummaryBarText>
                            Total Produtos: <SummaryCount>{FIXED_PRODUCTS.length}</SummaryCount> 
                        </SummaryBarText>
                    </SummaryBar>

                    {FIXED_PRODUCTS.length === 0 ? (
                        <NoProductsContainer>
                            <NoProductsIcon>📦</NoProductsIcon>
                            <NoProductsTitle>Nenhum produto cadastrado</NoProductsTitle>
                            <NoProductsText>Comece adicionando seu primeiro produto.</NoProductsText>
                        </NoProductsContainer>
                    ) : filteredProducts.length === 0 ? (
                        <NoProductsContainer>
                            <Ionicons name="search" size={30} color="#888" />
                            <NoProductsTitle>Nenhum produto encontrado</NoProductsTitle>
                            <NoProductsText>Tente buscar por outro nome.</NoProductsText>
                        </NoProductsContainer>
                    ) : (
                        <View>
                            <NoProductsText>Oi</NoProductsText>
                        </View>
                    )}

                </ProductContentContainer>
            </Container>
        </EnterpriseLayout>
    );
};