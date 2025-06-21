import { useNavigate } from "react-router";
import { CategoryContentContainer, CategoryTitle, CategoryTitleAddContainer, Container, Spinner } from "../styles";
import { CreateCategoryBox, CreateCategoryBtn, CreateCategoryContent, CreateCategoryInput, CreateCategoryTitle } from "./styles";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import api from "../../../../services/api";

export default function NewCategoryEnterprise() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [category, setCategory] = useState<string>("");

    async function postCategory(e: FormEvent) {
        e.preventDefault();
        
        if (!category.trim()) {
            alert("");
            return;
        }

        try {
            setLoading(true);

            const formattedCategoryName = formatCategoryName(category);

            await api.post("/category", {
                nome: formattedCategoryName,
                empresa_id: user?.id,
            });

            navigate("/empresa/categorias");
        } catch (err) {
            console.log("[ERRO], Erro ao cadastrar categoria!", err);
            alert("Erro ao criar categoria.");
        } finally {
            setLoading(false);
        };
    };

    function formatCategoryName(name: string): string {
        return name
            .trim()
            .toLowerCase()
            .split(" ")
            .filter(word => word.length > 0)
            .map(word => word[0].toUpperCase() + word.slice(1))
            .join(" ");
    };

    return (
        <Container>
            <CategoryContentContainer>
                <CategoryTitleAddContainer>
                    <CategoryTitle>Criar Categorias</CategoryTitle>
                </CategoryTitleAddContainer>
                
                <CreateCategoryBox
                    onSubmit={postCategory}
                >
                    <CreateCategoryContent>
                        <CreateCategoryTitle>
                            Nova Categoria
                        </CreateCategoryTitle>
                        <CreateCategoryInput
                            type="text"
                            placeholder="Digite o nome da categoria"
                            required
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                        />
                    </CreateCategoryContent>
                    <CreateCategoryBtn 
                        type="submit" 
                    >
                        {loading ? <Spinner /> : "Adicionar"}
                    </CreateCategoryBtn>
                </CreateCategoryBox>

            </CategoryContentContainer>
        </Container>
    );
}