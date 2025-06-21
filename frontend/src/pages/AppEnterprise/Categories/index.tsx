import { Navigate, useNavigate } from "react-router";
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
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import api from "../../../services/api";

interface CategoryProps {
    id: string;
    nome: string;
    produtosCount: number;
};

export default function CategoriesEnterprise() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [categories, setCategories] = useState<CategoryProps[]>([]);

    useEffect(() => {
        async function loadCategories() {
            try {
                const response = await api.get("/categories", {
                    params: {
                        enterprise_id: user?.id,
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

    if (!user) {
        return <Navigate to={"/"} replace />
    };

    

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

                    {categories.map((category) => (
                        <CategoryItem key={category.id}>
                            <span>{category.nome}</span>
                            <span>{category.produtosCount}</span>
                        </CategoryItem>
                    ))}
                </CategoryList>
            </CategoryContentContainer>
        </Container>
    );
}
