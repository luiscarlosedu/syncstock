import { useState } from "react";
import { MyStoreHeader } from "../../../../components/my-store-header";
import { Container, StoreEditContent, StoreEditContentContainer, StoreEditInput, StoreEditInputContainer, StoreEditLabel, StoreEditSubmit, StoreEditTwoInputsContainer } from "./styles";

export default function StoreEdit() {
    const [empresa, setEmpresa] = useState({
        nome: 'Empresa Exemplo Ltda',
        cnpj: '00.000.000/0001-00',
        // email: 'contato@empresa.com',
        // senha: '',
        endereco: 'Rua Exemplo, 123 - Centro',
        telefone: '8899999-9999',
    });

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
                            value={empresa.nome}
                            onChange={(e) => setEmpresa({...empresa, nome: e.target.value})}
                        />
                    </StoreEditInputContainer>

                    <StoreEditInputContainer>
                        <StoreEditLabel htmlFor="iaddress">Endereço</StoreEditLabel>
                        <StoreEditInput 
                            placeholder="Rua Oldilson Aguiar Tomás de Aquino"
                            id="iaddress"
                            name="address"
                            type="text"
                            value={empresa.endereco}
                            onChange={(e) => setEmpresa({...empresa, endereco: e.target.value})}
                        />
                    </StoreEditInputContainer>

                    <StoreEditTwoInputsContainer>
                        <StoreEditInputContainer>
                            <StoreEditLabel htmlFor="iphone">Telefone</StoreEditLabel>
                                <StoreEditInput
                                    placeholder="88997876900"
                                    id="iphone"
                                    name="phone"
                                    type="tel"
                                    value={empresa.telefone}
                                    onChange={(e) => setEmpresa({...empresa, telefone: e.target.value})}
                                />
                        </StoreEditInputContainer>

                        <StoreEditInputContainer>
                            <StoreEditLabel htmlFor="icnpj">CNPJ</StoreEditLabel>
                                <StoreEditInput
                                    placeholder="12.345.678/0001-99"
                                    id="icnpj"
                                    name="cnpj"
                                    type="text"
                                    value={empresa.cnpj}
                                    onChange={(e) => setEmpresa({...empresa, cnpj: e.target.value})}
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