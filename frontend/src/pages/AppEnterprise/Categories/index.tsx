import { Navigate, useNavigate } from "react-router";
import { 
    Container,
    CategoryContentContainer,
    CategoryTitleAddContainer,
    CategoryTitle,
    CategoryAdd,
    CategoryList,
    CategoryListHeader,
    CategoryItem,
    NoCategoriesContainer,
    NoCategoriesIcon,
    NoCategoriesTitle,
    NoCategoriesText,
    CategoryTotalSearchContainer,
    CategoryTotalContainer,
    CategoryTotalTitle,
    CategoryTotal,
    CategorySearchContainer,
    CategorySearchInputContainer,
    SearchIcon,
    CategorySearchInput
} from "./styles";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import api from "../../../services/api";
import { FaSearch } from "react-icons/fa";

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
                    >
                        + Criar categoria
                    </CategoryAdd>
                </CategoryTitleAddContainer>
        
                <CategoryTotalSearchContainer>
                    <CategoryTotalContainer>
                        <CategoryTotalTitle>Total de Categorias</CategoryTotalTitle>
                        <CategoryTotal>{categories.length}</CategoryTotal>
                    </CategoryTotalContainer>

                    <CategorySearchContainer>
                        <CategorySearchInputContainer>
                            <SearchIcon>
                                <FaSearch />
                            </SearchIcon>
                            <CategorySearchInput placeholder="Buscar produtos..." />
                        </CategorySearchInputContainer>
                    </CategorySearchContainer>
                </CategoryTotalSearchContainer>

                {categories.length === 0 ? (
                    <NoCategoriesContainer>
                        <NoCategoriesIcon>📂</NoCategoriesIcon>
                        <NoCategoriesTitle>Você ainda não possui categorias</NoCategoriesTitle>
                        <NoCategoriesText>
                            Comece organizando seu estoque criando sua primeira categoria.
                        </NoCategoriesText>
                        <CategoryAdd onClick={() => navigate('/empresa/categorias/criar')}>
                            + Criar agora
                        </CategoryAdd>
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
};