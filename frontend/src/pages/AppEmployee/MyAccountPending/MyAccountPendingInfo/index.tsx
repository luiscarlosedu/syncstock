import { useContext } from "react";
import { Container, InfoItem, InfoItemName, InfoItemValue } from "./styles";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Navigate } from "react-router";

export default function MyAccountPendinginfo() {
    const { user } = useContext(AuthContext);

    if(!user) {
        return <Navigate to={"/"} replace />
    }

    function formattedDate(user_createdAt: string) {
        const createdDate = new Date(user_createdAt);
        const formatted = createdDate.toLocaleDateString("pt-BR");
        return formatted;
    }

    return (
        <Container>
            <InfoItem>
                <InfoItemName>Nome:</InfoItemName>
                <InfoItemValue>{user.nome}</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Email:</InfoItemName>
                <InfoItemValue>{user.email}</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Desde:</InfoItemName>
                <InfoItemValue>{formattedDate(user.createdAt)}</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Empresa:</InfoItemName>
                <InfoItemValue>Nenhuma</InfoItemValue>
            </InfoItem>
        </Container>
    );
}