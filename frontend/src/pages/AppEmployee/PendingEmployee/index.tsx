import { Container, ImageArea, PendingEmployeeContentContainer, Title, Description, BackButton } from "./styles";
import { Navigate, useNavigate } from "react-router";

import PendingEmployeeImage from '../../../assets/pendent-employee.jpg';
import { PendingHeader } from "../../../components/pending-header";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export default function PendingEmployee() {
    const { user, signOut } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        return <Navigate to={"/"} replace />
    }

    async function logOut() {
        await signOut();
    }

    return (
        <>
            <PendingHeader />
            <Container>
                <ImageArea src={PendingEmployeeImage} />

                <PendingEmployeeContentContainer>
                    <Title>Olá, {user.nome}</Title>
                    <Description>
                        Seu e-mail ainda <strong>não está vinculado a nenhuma empresa</strong>. 
                        Assim que for aprovado, você irá acessar sua conta normalmente. Enquanto você não está cadastrado em uma empresa, você pode editar sua conta!
                    </Description>

                    <BackButton onClick={() => navigate("/funcionario/pendente/detalhes")}>
                        Editar sua conta
                    </BackButton>
                    <BackButton onClick={logOut}>
                        Sair da sua conta
                    </BackButton>
                </PendingEmployeeContentContainer>
            </Container>
        </>
    );
}
