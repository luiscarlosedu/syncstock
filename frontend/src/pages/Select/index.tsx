import { useNavigate } from "react-router";

import { 
    Container,
    SelectContent,
    Title,
    SubTitle,
    SelectContentText,
    SelectButton,
    SelectButtonArea,
    SelectContentTextContainer,
    SelectContentFooter,
    SelectFooterText,
    SelectLabel,
} from "./styles";

import { AuthHeader } from "../../components/auth-header";

import api from "../../services/api";
import { useEffect } from "react";

export default function Select() {
    const navigate = useNavigate();

    function loadHelloWorld() {
        api.get("/")
        .then((response) => {
            console.log(response.data); // Mostra a resposta da API
        })
        .catch((err) => {
            alert("Erro ao conectar com o servidor."); // Mostra uma mensagem de erro
            console.error(err);
        });
    }

    useEffect(() => {
        loadHelloWorld();
    }, []);

    return (
        <Container>
            <SelectContent>
                <AuthHeader />
                <SelectContentText>
                    <SelectContentTextContainer>
                        <Title>Bem vindo ao SyncStock!</Title>
                        <SubTitle>Gerencie seu estoque com nossa plataforma.</SubTitle>
                    </SelectContentTextContainer>
                    <SelectButtonArea>
                        <SelectLabel>
                            Escolha uma maneira de acessar:
                        </SelectLabel>
                        <SelectButton onClick={() => navigate('/login/empresa')}>
                            Entrar como <strong>Empresa</strong>
                        </SelectButton>
                        <SelectButton onClick={() => navigate('/login/funcionario')}>
                            Entrar como <strong>Funcionário</strong>
                        </SelectButton>
                    </SelectButtonArea>
                </SelectContentText>
                <SelectContentFooter>
                    <SelectFooterText>
                        Projeto FullStack com backend, frontend e mobile. O sistema permite que os administradores cadastrem suas empresas, gerenciem funcionários e acompanhem movimentações de estoque em tempo real.
                    </SelectFooterText>
                </SelectContentFooter>
            </SelectContent>
        </Container>
    );
};