import { FiUpload } from "react-icons/fi";
import { Container, ProductContentContainer, ProductsTitle, ProductsTitleAddContainer } from "../styles";
import { FormInput, FormInputContainer, FormInputLabel, FormInputLabelText, FormSelect, FormSubmitBtn, FormTextArea, NewFileBtn, NewFileBtnIcon, NewFileField, NewFileInput, NewFileInputChildren, NewForm, NewFormContainer, PaddingStyle, SelectOption } from "./styles";

export default function NewProductEnterprise() {
    const categories = [
        {
            id: '1',
            name: "carros"
        }
    ]

    return (
        <Container>
            <ProductContentContainer>
                <ProductsTitleAddContainer>
                    <ProductsTitle>Adicionar Produtos</ProductsTitle>
                </ProductsTitleAddContainer>

                <NewFileField>
                    <NewFileBtn>
                        <NewFileBtnIcon>
                            <FiUpload size={30} />
                        </NewFileBtnIcon>
                        <NewFileInput>
                            <NewFileInputChildren type="file" />
                        </NewFileInput>
                    </NewFileBtn>

                    {/* demais coisas */}
                </NewFileField>

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