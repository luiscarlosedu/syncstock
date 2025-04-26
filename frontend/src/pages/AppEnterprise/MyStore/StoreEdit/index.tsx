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
                            placeholder="Chico parafusos"
                            id="iname"
                            name="name"
                            type="text"
                        />
                    </StoreEditInputContainer>
                    
                </StoreEditContent>

            </StoreEditContentContainer>
        </Container>
    );
}