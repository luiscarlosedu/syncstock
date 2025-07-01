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
    CategorySearchContainer,
    CategorySearchInputContainer,
    SearchIcon,
    CategorySearchInput,
    CategoryTotalSearchContainer,
    CategoryTotalContainer,
    CategoryTotalTitle,
    CategoryTotal,
    CategoryAdd,
} from "./styles";
import { useContext, useEffect, useState } from "react";
import api from "../../../services/api";
import { AuthContext } from "../../../contexts/AuthContext";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

interface CategoryProps {
    id: string;
    nome: string;
    produtosCount: number;
};

export default function CategoriesEmployee() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [categories, setCategories] = useState<CategoryProps[]>([]);
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCategories = categories.filter(category =>
        category.nome.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
                            <CategorySearchInput 
                                placeholder="Buscar produtos..." 
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
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
                ) : filteredCategories.length === 0 ? (
                    <NoCategoriesContainer>
                        <NoCategoriesIcon>🔍</NoCategoriesIcon>
                        <NoCategoriesTitle>Nenhuma categoria encontrada</NoCategoriesTitle>
                        <NoCategoriesText>
                            Tente usar outro nome ou limpe a busca para ver todas as categorias disponíveis.
                        </NoCategoriesText>
                    </NoCategoriesContainer>
                ) : (
                    <CategoryList>
                        <CategoryListHeader>
                            <span>Nome</span>
                            <span>Produtos</span>
                        </CategoryListHeader>

                        {filteredCategories.map((category) => (
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
