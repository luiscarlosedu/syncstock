import { FiTrash, FiUpload } from "react-icons/fi";
import { Container, ProductContentContainer, ProductsTitle, ProductsTitleAddContainer } from "../styles";
import { FormFileArea, FormImg, FormImgContainer, FormImgDelete, FormImgInput, FormImgInputContainer, FormImgInputTitle, FormInput, FormInputContainer, FormInputLabel, FormInputLabelText, FormSelect, FormSubmitBtn, FormTextArea, NewForm, NewFormContainer, PaddingStyle, SelectOption } from "./styles";
import { FormEvent, useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router";
import api from "../../../../services/api";

interface CategoryProps {
    id: string;
    nome: string;
    produtosCount: number;
};

export default function NewProductEnterprise() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const [categoriesData, setCategoriesData] = useState<CategoryProps[]>([]);

    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    useEffect(() => {
        async function loadCategories() {
            try {
                const response = await api.get("/categories", {
                    params: {
                        enterprise_id: user?.id,
                    },
                });
                setCategoriesData(response.data);
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

    async function postProduct(e: FormEvent) {
        e.preventDefault();

        if (!nome || !preco || !quantidade || !categoria) {
            alert("[ERRO] Preencha todos os campos!");
            return;
        };

        /*nome, descricao, preco, foto, quantidade, category_id, enterprise_id*/

        try {
            const formData = new FormData();
            
            formData.append("nome", nome);
            formData.append("preco", String(preco));
            formData.append("quantidade", String(quantidade));
            formData.append("category_id", categoria);
            formData.append("descricao", descricao);
            formData.append("enterprise_id", user?.id ?? "");

            if (file) {
                formData.append("file", file);
            };

            await api.post("/product", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            alert("Produto cadastrado com sucesso!");
            navigate("/empresa/produtos");
        } catch (err) {
            console.log(err);
            alert("[ERRO] Erro ao criar produto!");
        }
    };

    function handleOnChangeFile(e: React.ChangeEvent<HTMLInputElement>) {
        if (e.target.files && e.target.files.length > 0) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile));
        }
    }

    return (
        <Container>
            <ProductContentContainer>
                <ProductsTitleAddContainer>
                    <ProductsTitle>Adicionar Produtos</ProductsTitle>
                </ProductsTitleAddContainer>

                <NewFormContainer>
                    <NewForm
                        onSubmit={postProduct}
                    >
                        <FormInputContainer>
                            <FormInputLabel
                                htmlFor="nome"
                            >
                                <FormInputLabelText>Nome</FormInputLabelText>
                            </FormInputLabel>
                            <FormInput 
                                required
                                id="nome"
                                type="text"
                                placeholder="Digite o nome do produto"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                            />
                        </FormInputContainer>

                        <FormInputContainer>
                            <FormInputLabel
                                htmlFor="preco"
                            >
                                <FormInputLabelText>Preço</FormInputLabelText>
                            </FormInputLabel>
                            <FormInput 
                                required
                                type="number"
                                id="preco"
                                placeholder="Digite o preço do produto"
                                value={preco}
                                onChange={(e) => setPreco(Number(e.target.value))}
                            />
                        </FormInputContainer>

                        <FormInputContainer>
                            <FormInputLabel
                                htmlFor="qnt-inicial"
                            >
                                <FormInputLabelText>Quantidade inicial</FormInputLabelText>
                            </FormInputLabel>
                            <FormInput 
                                required
                                type="number"
                                id="qnt-inicial"
                                placeholder="Digite a quantidade inicial do produto"
                                value={quantidade}
                                onChange={(e) => setQuantidade(Number(e.target.value))}
                            />
                        </FormInputContainer>

                        <FormInputContainer>
                            <FormInputLabel htmlFor="select">
                                <FormInputLabelText>Categoria</FormInputLabelText>
                            </FormInputLabel>
                            <FormSelect
                                required
                                id="select"
                                value={categoria}
                                onChange={(e) => setCategoria(e.target.value)}
                            >
                                <SelectOption value="">Selecione uma categoria</SelectOption>

                                {categoriesData.map((category) => (
                                    <SelectOption key={category.id} value={category.id}>
                                        {category.nome}
                                    </SelectOption>
                                ))}
                            </FormSelect>
                        </FormInputContainer>

                        <FormInputContainer>
                            <FormInputLabel htmlFor="textarea">
                                <FormInputLabelText>Descrição</FormInputLabelText>
                            </FormInputLabel>
                            <FormTextArea
                                id="textarea"
                                required
                                placeholder="Digite sobre o produto"
                                value={descricao}
                                onChange={(e) => setDescricao(e.target.value)}
                            />
                        </FormInputContainer>

                        <FormFileArea>
                            {!imagePreview && (
                            <FormImgInputContainer>
                                <FormImgInputTitle>Adicionar imagem do produto</FormImgInputTitle>
                                <FiUpload color="#121212" />
                                <FormImgInput
                                    type="file"
                                    accept="image/*"
                                    onChange={handleOnChangeFile}
                                />
                            </FormImgInputContainer>
                            )}
                            {imagePreview && (
                                <FormImgContainer>
                                    <FormImgDelete
                                        onClick={() => {
                                            setFile(null);
                                            setImagePreview(null);
                                        }}
                                    >
                                        <FiTrash size={22} color="#FFF" />
                                    </FormImgDelete>
                                    <FormImg
                                        src={imagePreview}
                                        alt="Imagem do produto"
                                    />
                                </FormImgContainer>
                            )}
                        </FormFileArea>

                        <FormSubmitBtn
                            type="submit"
                        >
                            Cadastrar
                        </FormSubmitBtn>

                    </NewForm>
                </NewFormContainer>

                <PaddingStyle/>


            </ProductContentContainer>
        </Container>
    );
}