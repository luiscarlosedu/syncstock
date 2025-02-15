import { 
    Container,
    SelectContent,
    Title,
    SubTitle
} from "./styles";

export default function Select() {
    return (
        <Container>
            <SelectContent>
                <Title>Bem vindo ao SyncStock!</Title>
                <SubTitle>Gerencie seu estoque com nossa plataforma.</SubTitle>
            </SelectContent>
        </Container>
    );
};