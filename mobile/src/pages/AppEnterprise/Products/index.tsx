import { useState } from "react";
import { FlatList, TextInput, View } from "react-native";
import { EnterpriseLayout } from "../../../components/layouts/enterprise-layout";
import { Container, ProductContentContainer, ProductsTitle, ProductsTitleAddContainer } from "./styles";

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

    return (
        <EnterpriseLayout>
            <Container>
                <ProductContentContainer>
                    <ProductsTitleAddContainer>
                        <ProductsTitle>Produtos</ProductsTitle>
                    </ProductsTitleAddContainer>

                    
                </ProductContentContainer>
            </Container>
        </EnterpriseLayout>
    );
}