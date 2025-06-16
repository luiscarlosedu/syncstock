import { Container, InfoItem, InfoItemName, InfoItemValue } from "./styles";

interface InfoProps {
    name: string;
    email: string;
    created_at: string;
    enterpriseName: string;
}

export default function MyAccountInfo({
    name, email, created_at, enterpriseName
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
                <InfoItemValue>{created_at}</InfoItemValue>
            </InfoItem>
            <InfoItem>
                <InfoItemName>Empresa:</InfoItemName>
                <InfoItemValue>{enterpriseName}</InfoItemValue>
            </InfoItem>
        </Container>
    );
}