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

export default function RegisterEmployee() {
    const imagePreview = false;

    return (
        <Container>
            <RegisterContainer>
                <AuthHeader />
                <RegisterContent>
                    <RegisterContentText>
                        <RegisterTitle>Cadastrar uma Funcionário</RegisterTitle>
                        <RegisterSubTitle>Crie sua conta de funcionário agora!</RegisterSubTitle>
                    </RegisterContentText>

                    <RegisterForm>
                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="inome">Nome</RegisterLabel>
                            <Input 
                                placeholder="Digite seu nome"
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
                            <RegisterLabel htmlFor="isenha">Senha</RegisterLabel>
                            <Input 
                                placeholder="***************"
                                type="password"
                                required
                                name="senha"
                                id="isenha"
                            />
                        </RegisterInputContainer>

                        <FormFileArea>
                            {!imagePreview && (
                                <FormImgInputContainer>
                                    <FormImgInputTitle>Adicionar foto de perfil (Opcional)</FormImgInputTitle>
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
                                        src={"https://github.com/gustavoguanabara.png"}
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