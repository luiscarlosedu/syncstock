import { useNavigate } from "react-router";
import { 
    Container,
    CategoryContentContainer,
    CategoryTitleAddContainer,
    CategoryTitle,
    CategoryAdd,
    CategoryList,
    CategoryListHeader,
    CategoryItem
} from "./styles";

export default function CategoriesEnterprise() {
    const navigate = useNavigate();

    const categories = [
        { title: "Eletrônicos", products: 12 },
        { title: "Roupas", products: 8 },
        { title: "Alimentos", products: 15 },
    ];

    return (
        <Container>
            <CategoryContentContainer>
                <CategoryTitleAddContainer>
                    <CategoryTitle>Categorias</CategoryTitle>
                    <CategoryAdd
                        onClick={() => navigate('/empresa/categorias/criar')}
                    >+ Criar categoria</CategoryAdd>
                </CategoryTitleAddContainer>

                <CategoryList>
                    <CategoryListHeader>
                        <span>Nome</span>
                        <span>Produtos</span>
                    </CategoryListHeader>

                    {categories.map((category, index) => (
                        <CategoryItem key={index}>
                            <span>{category.title}</span>
                            <span>{category.products}</span>
                        </CategoryItem>
                    ))}
                </CategoryList>
            </CategoryContentContainer>
        </Container>
    );
}
