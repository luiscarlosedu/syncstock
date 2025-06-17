import { useContext } from "react";
import { Container, InfoItem, InfoItemName, InfoItemValue } from "./styles";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Navigate } from "react-router";

export function EnterpriseInfo() {
    const { user } = useContext(AuthContext);

    if(!user) {
        return <Navigate to={"/"} replace />
    }

    function formattedDate(user_createdAt: string) {
        const createdDate = new Date(user_createdAt);
        const formatted = createdDate.toLocaleDateString("pt-BR");
        return formatted;
    }

    console.log(user.cnpj);
    
    return (
        <Container>
            <InfoItem>
                <InfoItemName>CNPJ:</InfoItemName>
                <InfoItemValue>{user?.cnpj}</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Email:</InfoItemName>
                <InfoItemValue>{user.email}</InfoItemValue>
            </InfoItem>

            <InfoItem>
                <InfoItemName>Telefone:</InfoItemName>
                <InfoItemValue>(88)997876890 - editar</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Endereço:</InfoItemName>
                <InfoItemValue>Av. das Empresas, 123 - SP - editar</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Desde:</InfoItemName>
                <InfoItemValue>{formattedDate(user.createdAt)}</InfoItemValue>
            </InfoItem>

            
        </Container>
    );
}