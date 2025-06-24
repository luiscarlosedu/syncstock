import { useState } from "react";
import {
    Overlay,
    Content,
    Header,
    Title,
    CloseButton,
    Form,
    Label,
    Input,
    Actions,
    Button,
    Type,
    TypeButton,
} from "./styles";
import api from "../../services/api";

interface UpdateModalProps {
    isOpen: boolean;
    onClose: () => void;
    productId: string;
    onUpdate: () => void;
}

export function UpdateProductModal({ isOpen, onClose, productId, onUpdate }: UpdateModalProps) {
    const [quantity, setQuantity] = useState<number>(0);
    const [updateType, setUpdateType] = useState<"entrada" | "saida" | null>(null);

    if (!isOpen) return null;

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        if (!updateType || quantity <= 0) {
            alert("Preencha todos os campos corretamente.");
            return;
        }

        try {
            await api.put(`/product/${productId}/quantity`, {
                quantidade: quantity,
                tipo: updateType,
            });

            setQuantity(0);
            setUpdateType(null);
            onUpdate();
            onClose();      
        } catch (err) {
            console.error("[ERRO AO ATUALIZAR PRODUTO]", err);
            alert("Erro ao atualizar produto.");
        }
    }

    return (
        <Overlay onClick={onClose}>
            <Content onClick={(e) => e.stopPropagation()}>
                <Header>
                    <Title>Atualizar Estoque</Title>
                    <CloseButton onClick={onClose}>×</CloseButton>
                </Header>

                <Form
                    onSubmit={handleSubmit}
                >
                    <Label>Tipo de atualização</Label>
                    <Type>
                        <TypeButton
                            type="button"
                            btnType="entrada"
                            selected={updateType === "entrada"}
                            onClick={() => setUpdateType("entrada")}
                        >
                            Entrada
                        </TypeButton>
                        <TypeButton
                            type="button"
                            btnType="saida"
                            selected={updateType === "saida"}
                            onClick={() => setUpdateType("saida")}
                        >
                            Saída
                        </TypeButton>
                    </Type>

                    <Label>Novo estoque</Label>
                    <Input
                        type="number"
                        min={1}
                        value={quantity}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                        required
                    />
                    <Actions>
                        <Button type="button" secondary onClick={onClose}>
                            Cancelar
                        </Button>
                        <Button type="submit">Salvar</Button>
                    </Actions>
                </Form>
            </Content>
        </Overlay>
    );
};