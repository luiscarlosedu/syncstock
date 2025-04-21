import { Container, InfoItem, InfoItemName, InfoItemValue } from "./styles";

export function EnterpriseInfo() {
    return (
        <Container>
            <InfoItem>
                <InfoItemName>CNPJ:</InfoItemName>
                <InfoItemValue>12.345.678/0001-99</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Email:</InfoItemName>
                <InfoItemValue>synstock@gmail.com</InfoItemValue>
            </InfoItem>

            <InfoItem>
                <InfoItemName>Telefone:</InfoItemName>
                <InfoItemValue>(88)997876890</InfoItemValue>
            </InfoItem>
            <InfoItem>0
                <InfoItemName>Endereço:</InfoItemName>
                <InfoItemValue>Av. das Empresas, 123 - SP</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Desde:</InfoItemName>
                <InfoItemValue>01/01/2024</InfoItemValue>
            </InfoItem>

            
        </Container>
    );
}