import { Container, InfoItem, InfoItemName, InfoItemValue } from "./styles";

interface InfoProps {
    name: string;
    email: string;
    // enterpriseName: string;
}

export default function MyAccountInfo({
    name, email, /*enterpriseName*/
}: InfoProps) {
    return (
        <Container>
            <InfoItem>
                <InfoItemName>Nome:</InfoItemName>
                <InfoItemValue>{name}</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Email:</InfoItemName>
                <InfoItemValue>{email}</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Desde:</InfoItemName>
                <InfoItemValue>01/01/2024</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Empresa:</InfoItemName>
                <InfoItemValue>{/*{enterpriseName}*/} SyncStock</InfoItemValue>
            </InfoItem>
        </Container>
    );
}