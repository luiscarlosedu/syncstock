import { 
    Container,
    ProductContentContainer,
    ProductsTitleAddContainer,
    ProductsAdd,
    ProductsTitle, 
    ProductContent,
    ProductTotalSearchContainer,
    ProductTotalContainer,
    ProductTotalTitle,
    ProductTotal,
    ProductSearchContainer,
    ProductSearchInput,
    ProductSearchInputContainer,
    SearchIcon
} from "./styles";

import { FaSearch } from "react-icons/fa";

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

                <ProductContent>
                    <ProductTotalSearchContainer>
                        <ProductTotalContainer>
                            <ProductTotalTitle>Total de Produtos</ProductTotalTitle>
                            <ProductTotal>10</ProductTotal>
                        </ProductTotalContainer>

                        <ProductSearchContainer>
                            <ProductSearchInputContainer>
                                <SearchIcon><FaSearch  /></SearchIcon>
                                <ProductSearchInput />
                            </ProductSearchInputContainer>
                        </ProductSearchContainer>

                    </ProductTotalSearchContainer>
                </ProductContent>
            </ProductContentContainer>
        </Container>
    );
}