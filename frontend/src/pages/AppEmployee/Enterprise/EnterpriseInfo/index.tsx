import { EnterpriseData } from "..";
import { Container, InfoItem, InfoItemName, InfoItemValue } from "./styles";

interface Props {
    data: EnterpriseData;
}

export function EnterpriseInfo({data}: Props) {
    return (
        <Container>
            <InfoItem>
                <InfoItemName>Nome:</InfoItemName>
                <InfoItemValue>{data.nome}</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Email:</InfoItemName>
                <InfoItemValue>{data.email}</InfoItemValue>
            </InfoItem>

            <InfoItem>
                <InfoItemName>Telefone:</InfoItemName>
                <InfoItemValue>{data.telefone}</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Endereço:</InfoItemName>
                <InfoItemValue>{data.endereco}</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Desde:</InfoItemName>
                <InfoItemValue>{data.createdAt}</InfoItemValue>
            </InfoItem>

            
        </Container>
    );
}