import { 
    Container,
    CategoryContentContainer,
    CategoryTitleAddContainer,
    CategoryTitle,
    CategoryList,
    CategoryListHeader,
    CategoryItem,
    NoCategoriesContainer,
    NoCategoriesIcon,
    NoCategoriesTitle,
    NoCategoriesText,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import { AuthContext } from "../../../contexts/AuthContext";

interface CategoryProps {
    id: string;
    nome: string;
    produtosCount: number;
};

export default function CategoriesEmployee() {
    const { user } = useContext(AuthContext);
    const [categories, setCategories] = useState<CategoryProps[]>([]);

    useEffect(() => {
        async function loadCategories() {
            try {
                const response = await api.get("/categories", {
                    params: {
                        enterprise_id: user?.enterprise_id,
                    },
                });
                setCategories(response.data);
            } catch (err) {
                console.log("[ERRO] Erro ao buscar categorias: ", err);
            }
        };

        if (user) {
            loadCategories();
        }
    }, [user]);

    return (
        <Container>
            <CategoryContentContainer>
                <CategoryTitleAddContainer>
                    <CategoryTitle>Categorias</CategoryTitle>
                </CategoryTitleAddContainer>

                {categories.length === 0 ? (
                    <NoCategoriesContainer>
                        <NoCategoriesIcon>📂</NoCategoriesIcon>
                        <NoCategoriesTitle>Sua empresa ainda não cadastrou categorias</NoCategoriesTitle>
                        <NoCategoriesText>
                            Aguarde sua empresa cadastrar as categorias.
                        </NoCategoriesText>
                    </NoCategoriesContainer>
                ) : (
                    <CategoryList>
                        <CategoryListHeader>
                            <span>Nome</span>
                            <span>Produtos</span>
                        </CategoryListHeader>

                        {categories.map((category) => (
                            <CategoryItem key={category.id}>
                                <span>{category.nome}</span>
                                <span>{category.produtosCount}</span>
                            </CategoryItem>
                        ))}
                    </CategoryList>
                )}
            </CategoryContentContainer>
        </Container>
    );
}
