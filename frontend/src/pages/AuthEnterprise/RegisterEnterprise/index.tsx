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

import { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function RegisterEnterprise() {
    const { signUpEnterprise, signInEnterprise } = useContext(AuthContext);

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [senha, setSenha] = useState("");
    const [endereco, setEndereco] = useState("");
    const [telefone, setTelefone] = useState("");
    const [file, setFile] = useState<File | null>(null);
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setImagePreview(URL.createObjectURL(selectedFile));
        }
    }

    async function handleRegister(e: React.FormEvent) {
        e.preventDefault();

        if (!file) {
            alert("Selecione uma imagem!");
            return;
        }

        try {
            await signUpEnterprise(nome, cnpj, email, senha, endereco, telefone, file);
            alert("Empresa cadastrada com sucesso!");
            await signInEnterprise(email, cnpj, senha);
            setNome("");
            setEmail("");
            setCnpj("");
            setSenha("");
            setEndereco("");
            setTelefone("");
            setFile(null);
            setImagePreview(null);
        } catch (err) {
            console.error(err);
            alert("Erro ao cadastrar empresa.");
        }
    }

    return (
        <Container>
            <RegisterContainer>
                <AuthHeader />
                <RegisterContent>
                    <RegisterContentText>
                        <RegisterTitle>Cadastrar uma Empresa</RegisterTitle>
                        <RegisterSubTitle>Crie uma conta para sua empresa agora!</RegisterSubTitle>
                    </RegisterContentText>

                    <RegisterForm onSubmit={handleRegister}>
                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="inome">Nome</RegisterLabel>
                            <Input 
                                placeholder="Digite o nome da empresa"
                                type="text"
                                name="nome"
                                required
                                id="inome"
                                value={nome}
                                onChange={e => setNome(e.target.value)}
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
                                value={email}
                                onChange={e => setEmail(e.target.value)}
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
                                value={cnpj}
                                onChange={e => setCnpj(e.target.value)}
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

                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="iendereco">Endereço</RegisterLabel>
                            <Input 
                                placeholder="Ex: São Paulo - SP - Brasil"
                                type="text"
                                required
                                name="endereco"
                                id="iendereco"
                                value={endereco}
                                onChange={e => setEndereco(e.target.value)}
                            />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel htmlFor="inumero">Número de telefone</RegisterLabel>
                            <Input 
                                placeholder="Ex: 099999999999"
                                type="text"
                                required
                                name="numero"
                                id="inumero"
                                value={telefone}
                                onChange={e => setTelefone(e.target.value)}
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
                                        onChange={handleFileChange}
                                    />
                                </FormImgInputContainer>
                            )}
                            {imagePreview && (
                                <FormImgContainer className="form-img-container">
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
                                        alt="Imagem da empresa"
                                    />
                                </FormImgContainer>
                            )}
                        </FormFileArea>

                        <RegisterFormSubmit type="submit">
                            Cadastrar
                        </RegisterFormSubmit>

                    </RegisterForm>
                </RegisterContent>
            </RegisterContainer>
        </Container>
    );
}
