import { Container, ImageArea, PendingEmployeeContentContainer, Title, Description, BackButton } from "./styles";
import { Header } from "../../../components/header";
import { Navigate, useNavigate } from "react-router";

import PendingEmployeeImage from '../../../assets/pendent-employee.jpg';

export default function PendingEmployee() {
    const navigate = useNavigate();
    const funcionario = {
        nome: 'Arnaldo César',
        employed: false
    };

    if (funcionario.employed === true) {
        return <Navigate to={'/funcionario/home'} replace />;
    }

    return (
        <Container>
            <Header type="employee" />

            <ImageArea src={PendingEmployeeImage} />

            <PendingEmployeeContentContainer>
                <Title>Olá, {funcionario.nome}</Title>
                <Description>
                    Seu acesso ainda está <strong>pendente de aprovação</strong> pela empresa.
                    Assim que for aprovado, você receberá uma notificação para acessar sua conta normalmente.
                </Description>

                <BackButton onClick={() => navigate("/")}>
                    Voltar ao Início
                </BackButton>
            </PendingEmployeeContentContainer>
        </Container>
    );
}
