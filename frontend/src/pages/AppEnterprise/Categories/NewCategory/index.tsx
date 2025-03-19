import { useNavigate } from "react-router";
import { CategoryContentContainer, CategoryTitle, CategoryTitleAddContainer, Container } from "../styles";
import { CreateCategoryBox, CreateCategoryBtn, CreateCategoryContent, CreateCategoryInput, CreateCategoryTitle } from "./styles";

export default function NewCategoryEnterprise() {
    const navigate = useNavigate();
    return (
        <Container>
            <CategoryContentContainer>
                <CategoryTitleAddContainer>
                    <CategoryTitle>Criar Categorias</CategoryTitle>
                </CategoryTitleAddContainer>
                
                <CreateCategoryBox
                >
                    <CreateCategoryContent>
                        <CreateCategoryTitle>
                            Nova Categoria
                        </CreateCategoryTitle>
                        <CreateCategoryInput
                            type="text"
                            placeholder="Digite o nome da categoria"
                        />
                    </CreateCategoryContent>
                    <CreateCategoryBtn 
                        // type="submit" 
                        onClick={() => navigate('/empresa/categorias')}
                    >
                        Adicionar
                    </CreateCategoryBtn>
                </CreateCategoryBox>

            </CategoryContentContainer>
        </Container>
    );
}