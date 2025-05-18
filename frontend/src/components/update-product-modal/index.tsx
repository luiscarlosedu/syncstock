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

interface UpdateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function UpdateProductModal({ isOpen, onClose }: UpdateModalProps) {
  const [quantity, setQuantity] = useState<number>(0);
  const [updateType, setUpdateType] = useState<"entrada" | "saida" | null>(null);

  if (!isOpen) return null;

  return (
    <Overlay onClick={onClose}>
        <Content onClick={(e) => e.stopPropagation()}>
            <Header>
                <Title>Atualizar Estoque</Title>
                <CloseButton onClick={onClose}>×</CloseButton>
            </Header>

            <Form
                onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Nova quantidade:", quantity);
                    onClose();
                    setQuantity(0);
                }}
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
                    min={0}
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
}
