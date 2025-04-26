import { MyStoreHeader } from "../../../../components/my-store-header";
import { Container, StoreEditContent, StoreEditContentContainer, StoreEditInput, StoreEditInputContainer, StoreEditLabel, StoreEditSubmit, StoreEditTwoInputsContainer } from "./styles";

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

                    <StoreEditInputContainer>
                        <StoreEditLabel htmlFor="iaddress">Endereço</StoreEditLabel>
                        <StoreEditInput 
                            placeholder="Rua Oldilson Aguiar Tomás de Aquino"
                            id="iaddress"
                            name="address"
                            type="text"
                        />
                    </StoreEditInputContainer>

                    <StoreEditTwoInputsContainer>
                        <StoreEditInputContainer>
                            <StoreEditLabel htmlFor="iphone">Telefone</StoreEditLabel>
                            <StoreEditInput
                                placeholder="88997876900"
                                id="iphone"
                                name="phone"
                                type="number"
                            />
                        </StoreEditInputContainer>

                        <StoreEditInputContainer>
                            <StoreEditLabel htmlFor="icnpj">CNPJ</StoreEditLabel>
                            <StoreEditInput
                                placeholder="12.345.678/0001-99"
                                id="icnpj"
                                name="cnpj"
                                type="number"
                            />
                        </StoreEditInputContainer>
                    </StoreEditTwoInputsContainer>
                    
                    <StoreEditSubmit>
                        Atualizar
                    </StoreEditSubmit>
                </StoreEditContent>

            </StoreEditContentContainer>
        </Container>
    );
}

/*
CNPJ:
12.345.678/0001-99

Email:
synstock@gmail.com

Telefone:
(88)997876890

Endereço:
Av. das Empresas, 123 - SP

Desde:
01/01/2024
*/