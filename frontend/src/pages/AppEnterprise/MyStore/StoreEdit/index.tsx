import { MyStoreHeader } from "../../../../components/my-store-header";
import { Container, StoreEditContent, StoreEditContentContainer, StoreEditInput, StoreEditInputContainer, StoreEditLabel } from "./styles";

export default function StoreEdit() {
    return (
        <Container>
            <StoreEditContentContainer>
                <MyStoreHeader />

                <StoreEditContent>
                    <StoreEditInputContainer>
                        <StoreEditLabel htmlFor="iname">Nome da empresa</StoreEditLabel>
                        <StoreEditInput 
                            placeholder="Nome da Empresa"
                            id="iname"
                            name="name"
                        />
                    </StoreEditInputContainer>
                </StoreEditContent>

            </StoreEditContentContainer>
        </Container>
    );
}