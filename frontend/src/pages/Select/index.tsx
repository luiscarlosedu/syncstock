import { 
    Container,
    SelectContent,
    Title,
    SubTitle,
    SelectContentText,
    SelectContentHeader,
    SelectHeaderTitle,
    HeaderLogo,
    SelectHeaderImage,
    SelectButton,
    SelectButtonArea,
    SelectContentTextContainer,
    SelectContentFooter,
    SelectFooterText
} from "./styles";

import LogoImage from '../../assets/syncstock-no.png';

export default function Select() {
    return (
        <Container>
            <SelectContent>
                <SelectContentHeader>
                    <HeaderLogo>
                        <SelectHeaderImage src={LogoImage} alt="logo syncstock" />
                        <SelectHeaderTitle>
                            SyncStock
                        </SelectHeaderTitle>
                    </HeaderLogo>
                </SelectContentHeader>
                <SelectContentText>
                    <SelectContentTextContainer>
                        <Title>Bem vindo ao SyncStock!</Title>
                        <SubTitle>Gerencie seu estoque com nossa plataforma.</SubTitle>
                    </SelectContentTextContainer>
                    <SelectButtonArea>
                        <p>Escolha uma maneira de acessar:</p>
                        <SelectButton>
                            Entrar como <strong>Empresa</strong>
                        </SelectButton>
                        <SelectButton>
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