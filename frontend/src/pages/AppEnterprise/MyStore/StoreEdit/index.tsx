import { useContext, useState } from "react";
import { MyStoreHeader } from "../../../../components/my-store-header";
import { Container, StoreEditContent, StoreEditContentContainer, StoreEditInput, StoreEditInputContainer, StoreEditLabel, StoreEditSubmit, StoreEditTwoInputsContainer } from "./styles";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Navigate } from "react-router";

export default function StoreEdit() {
    const { user } = useContext(AuthContext);
    const [empresaNome, setEmpresaNome] = useState(user?.nome);
    const [empresaEndereco, setEmpresaEndereco] = useState(user?.endereco);
    const [empresaTelefone, setEmpresaTelefone] = useState(user?.telefone);

    if (!user) {
        return <Navigate to={"/"} replace />
    };

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
                            value={empresaNome}
                            onChange={(e) => setEmpresaNome(e.target.value)}
                        />
                    </StoreEditInputContainer>

                    <StoreEditInputContainer>
                        <StoreEditLabel htmlFor="iaddress">Endereço</StoreEditLabel>
                        <StoreEditInput 
                            placeholder="Rua Oldilson Aguiar Tomás de Aquino"
                            id="iaddress"
                            name="address"
                            type="text"
                            value={empresaEndereco}
                            onChange={(e) => setEmpresaEndereco(e.target.value)}
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
                                    value={empresaTelefone}
                                    onChange={(e) => setEmpresaTelefone(e.target.value)}
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