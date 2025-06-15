import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
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
import { useNavigate } from "react-router";

export default function RegisterEmployee() {
    const { signUpEmployee, signInEmployee } = useContext(AuthContext);
    const navigate = useNavigate();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [file, setFile] = useState<File | undefined>(undefined);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();

        try {
            await signUpEmployee(nome, email, senha, file);
            alert("Funcionário cadastrado com sucesso!");
            await signInEmployee(email, senha);
            navigate("/funcionario/pendente");
            setNome("");
            setEmail("");
            setSenha("");
            setFile(undefined);
            setImagePreview(null);
        } catch (err) {
            console.error(err);
            alert("Erro ao cadastrar empresa.");
        }
    }

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile));
        };
    }

    return (
        <Container>
            <RegisterContainer>
                <AuthHeader />
                <RegisterContent>
                    <RegisterContentText>
                        <RegisterTitle>Cadastrar uma Funcionário</RegisterTitle>
                        <RegisterSubTitle>Crie sua conta de funcionário agora!</RegisterSubTitle>
                    </RegisterContentText>

                    <RegisterForm
                        onSubmit={handleRegister}
                    >
                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="inome">Nome</RegisterLabel>
                            <Input 
                                placeholder="Digite seu nome"
                                type="text"
                                name="nome"
                                required
                                id="inome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}/>
                        </RegisterInputContainer>
                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="iemail">Email</RegisterLabel>
                            <Input 
                                placeholder="testeteste@gmail.com"
                                type="email"
                                name="email"
                                required
                                id="iemail"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
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
                                value={senha}
                                onChange={e => setSenha(e.target.value)}
                            />
                        </RegisterInputContainer>

                        <FormFileArea>
                            {!imagePreview && (
                                <FormImgInputContainer>
                                    <FormImgInputTitle>Adicionar imagem do funcionário</FormImgInputTitle>
                                    <FiUpload color="#121212" />
                                    <FormImgInput
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </FormImgInputContainer>
                            )}
                            {imagePreview && (
                                <FormImgContainer className="form-img-container">
                                    <FormImgDelete
                                        onClick={() => {
                                            setFile(undefined);
                                            setImagePreview(null);
                                        }}
                                    >
                                        <FiTrash size={22} color="#FFF" />
                                    </FormImgDelete>
                                    <FormImg
                                        src={imagePreview}
                                        alt="Imagem da empresa"
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