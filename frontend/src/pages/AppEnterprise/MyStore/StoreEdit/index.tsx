import { MyStoreHeader } from "../../../../components/my-store-header";
import { Container, StoreEditContentContainer } from "./styles";

export default function StoreEdit() {
    return (
        <Container>
            <StoreEditContentContainer>
                <MyStoreHeader />

            </StoreEditContentContainer>
        </Container>
    );
}