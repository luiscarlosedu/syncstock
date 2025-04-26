import { MyStoreHeader } from "../../../../components/my-store-header";
import { Container, StoreConfigContentContainer } from "./styles";

export default function StoreConfig() {
    return (
        <Container>
            <StoreConfigContentContainer>
                <MyStoreHeader />

            </StoreConfigContentContainer>
        </Container>
    );
}