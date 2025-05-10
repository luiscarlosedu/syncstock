import { Container, InfoItem, InfoItemName, InfoItemValue } from "./styles";

export default function MyAccountPendinginfo() {
    return (
        <Container>
            <InfoItem>
                <InfoItemName>Nome:</InfoItemName>
                <InfoItemValue>Luís Eduardo</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Email:</InfoItemName>
                <InfoItemValue>eduardotop@gmail.com</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Desde:</InfoItemName>
                <InfoItemValue>01/01/2024</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Empresa:</InfoItemName>
                <InfoItemValue>Nenhuma</InfoItemValue>
            </InfoItem>
        </Container>
    );
}