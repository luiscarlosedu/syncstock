import { FiTrash, FiUpload } from "react-icons/fi";
import { AuthHeader } from "../../../components/auth-header";
import {
    Container,
    RegisterContainer,
    RegisterContent,
    RegisterContentText,
    RegisterTitle,
    RegisterSubTitle,
    RegisterForm,
    RegisterInputContainer,
    RegisterLabel,
    Input,
    RegisterFormSubmit,
    FormFileArea,
    FormImgInputContainer,
    FormImgInputTitle,
    FormImgInput,
    FormImgContainer,
    FormImgDelete,
    FormImg
} from "./styles";

import SyncImage from '../../../assets/SyncStock.png'

export default function RegisterEnterprise() {
    const imagePreview = false;

    return (
        <Container>
            <RegisterContainer>
                <AuthHeader />
                <RegisterContent>
                    <RegisterContentText>
                        <RegisterTitle>Cadastrar uma Empresa</RegisterTitle>
                        <RegisterSubTitle>Crie uma conta para sua empresa agora!</RegisterSubTitle>
                    </RegisterContentText>

                    <RegisterForm>
                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="inome">Nome</RegisterLabel>
                            <Input 
                                placeholder="Digite o nome da empresa"
                                type="text"
                                name="nome"
                                required
                                id="inome"
                            />
                        </RegisterInputContainer>
                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="iemail">Email</RegisterLabel>
                            <Input 
                                placeholder="testeteste@gmail.com"
                                type="email"
                                name="email"
                                required
                                id="iemail"
                            />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="icnpj">CNPJ</RegisterLabel>
                            <Input 
                                placeholder="12.345.678/0001-90"
                                type="text"
                                required
                                id="icnpj"
                                name="cnpj"
                                maxLength={18}
                                minLength={14}
                            />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="isenha">Senha</RegisterLabel>
                            <Input 
                                placeholder="***************"
                                type="password"
                                required
                                name="senha"
                                id="isenha"
                            />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="isenha">Endereço</RegisterLabel>
                            <Input 
                                placeholder="Ex: São Paulo - SP - Brasil"
                                type="password"
                                required
                                name="endereco"
                                id="iendereco"
                            />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="isenha">Número de telefone</RegisterLabel>
                            <Input 
                                placeholder="Ex: 099999999999"
                                type="text"
                                required
                                name="numero"
                                id="inumero"
                            />
                        </RegisterInputContainer>

                        <FormFileArea>
                            {!imagePreview && (
                                <FormImgInputContainer>
                                    <FormImgInputTitle>Adicionar imagem da empresa</FormImgInputTitle>
                                    <FiUpload color="#121212" />
                                    <FormImgInput
                                        type="file"
                                        accept="image/*"
                                        required
                                    // onChange={handleOnChangeFile}
                                    />
                                </FormImgInputContainer>
                            )}
                            {imagePreview && (
                                <FormImgContainer className="form-img-container">
                                    <FormImgDelete
                                    // onClick={() => {
                                    // setFile(null);
                                    // setImagePreview(null);
                                    // }}
                                    >
                                        <FiTrash size={22} color="#FFF" />
                                    </FormImgDelete>
                                    <FormImg
                                        src={SyncImage}
                                        alt="Imagem do produto"
                                    />
                                </FormImgContainer>
                            )}
                        </FormFileArea>

                        <RegisterFormSubmit 
                            type="submit"
                        >
                            Cadastrar
                        </RegisterFormSubmit>

                    </RegisterForm>
                </RegisterContent>
            </RegisterContainer>
        </Container>
    );
}