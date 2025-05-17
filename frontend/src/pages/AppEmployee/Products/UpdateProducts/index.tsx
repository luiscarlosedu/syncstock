import { useNavigate } from "react-router";
import {
    Container,
    UpdateStockContainer,
    TitleContainer,
    Title,
    BackButton,
    Form,
    Label,
    Select,
    Input,
    Button,
} from "./styles";

const products = [
    { name: "(Sample) Coconut Bar Soap" },
    { name: "Shampoo" },
    { name: "Custom handcrafted mug" },
    { name: "Custom Notebook" },
    { name: "Example Hat" },
    { name: "Example Pants" },
];

export default function UpdateProducts() {
    const navigate = useNavigate();

    return (
        <Container>
            <UpdateStockContainer>
                <TitleContainer>
                    <Title>Atualizar Estoque</Title>
                    <BackButton onClick={() => navigate("/funcionario/produtos")}>
                        Voltar
                    </BackButton>
                </TitleContainer>

                <Form>
                    <Label>Produto</Label>
                    <Select>
                        {products.map((product, index) => (
                            <option key={index} value={product.name}>
                                {product.name}
                            </option>
                        ))}
                    </Select>

                    <Label>Novo Estoque</Label>
                    <Input type="number" min={0} placeholder="Digite a nova quantidade" />

                    <Button>Atualizar</Button>
                </Form>
            </UpdateStockContainer>
        </Container>
    );
}
