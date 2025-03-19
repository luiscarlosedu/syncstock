import { 
    Container,
    ProductContentContainer,
    ProductsTitleAddContainer,
    ProductsAdd,
    ProductsTitle 
} from "./styles";

export default function ProductsEnterprise() {
    return (
        <Container>
            <ProductContentContainer>
                <ProductsTitleAddContainer>
                    <ProductsTitle>
                        Produtos
                    </ProductsTitle>
                    <ProductsAdd>
                        + Adicionar produto
                    </ProductsAdd>
                </ProductsTitleAddContainer>
            </ProductContentContainer>
        </Container>
    );
}