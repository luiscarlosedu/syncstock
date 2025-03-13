import { 
    Container,
    CategoryContentContainer,
    CategoryTitleAddContainer,
    CategoryTitle,
    CategoryAdd
} from "./styles";

export default function CategoriesEnterprise() {
    return (
        <Container>
            <CategoryContentContainer>
                <CategoryTitleAddContainer>
                    <CategoryTitle>Categorias</CategoryTitle>
                    <CategoryAdd>Adicionar categoria</CategoryAdd>
                </CategoryTitleAddContainer>
            </CategoryContentContainer>
        </Container>
    )
}