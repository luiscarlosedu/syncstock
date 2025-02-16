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

export default function Select() {
    const navigate = useNavigate();

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