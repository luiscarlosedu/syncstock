import { FiTrash, FiUpload } from "react-icons/fi";
import { Container, ProductContentContainer, ProductsTitle, ProductsTitleAddContainer } from "../styles";
import { FormFileArea, FormImg, FormImgContainer, FormImgDelete, FormImgInput, FormImgInputContainer, FormImgInputTitle, FormInput, FormInputContainer, FormInputLabel, FormInputLabelText, FormSelect, FormSubmitBtn, FormTextArea, NewForm, NewFormContainer, PaddingStyle, SelectOption } from "./styles";

export default function NewProductEnterprise() {
    const categories = [
        {
            id: '1',
            name: "carros"
        }
    ]

    const imagePreview = true;

    return (
        <Container>
            <ProductContentContainer>
                <ProductsTitleAddContainer>
                    <ProductsTitle>Adicionar Produtos</ProductsTitle>
                </ProductsTitleAddContainer>

                <NewFormContainer>
                    <NewForm>
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
                            />
                        </FormInputContainer>

                        <FormInputContainer>
                            <FormInputLabel htmlFor="select">
                                <FormInputLabelText>Categoria</FormInputLabelText>
                            </FormInputLabel>
                            <FormSelect
                                required
                                id="select"
                                // onChange={(e) => setSelect(e.target.value)}
                            >
                                <SelectOption value="">Selecione uma categoria</SelectOption>

                                {categories.map((category) => (
                                <SelectOption key={category.id} value={category.id}>
                                    {category.name}
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
                                // onChange={handleOnChangeFile}
                                />
                            </FormImgInputContainer>
                            )}
                            {imagePreview && (
                            <FormImgContainer className="form-img-container">
                                <FormImgDelete
                                className="form-img-delete"
                                // onClick={() => {
                                // setFile(null);
                                // setImagePreview(null);
                                // }}
                                >
                                <FiTrash size={22} color="#FFF" />
                                </FormImgDelete>
                                <FormImg
                                src={"https://images.pexels.com/photos/5716001/pexels-photo-5716001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
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