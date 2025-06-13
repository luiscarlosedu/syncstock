import { Navigate } from "react-router";
import { PendingHeader } from "../../../../components/pending-header";
import { UserHeaderPending } from "../components/user-header-pending";
import { MyAccountContentContainer } from "../styles";
import { Container, PendingEditContent, PendingEditInput, PendingEditInputContainer, PendingEditLabel, PendingEditSubmit } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthContext";

export default function MyAccountPendingEdit() {
    const { user } = useContext(AuthContext);

    if (!user) {
        return <Navigate to='/' />
    }

    if (user?.employed) {
        return <Navigate to={'/funcionario/home'} replace />;
    }

    return (
        <>
            <PendingHeader />
            <Container>
                <MyAccountContentContainer>
                    <UserHeaderPending
                        name={user?.nome}
                        image={
                            user?.foto === undefined
                            ? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nome)}&background=202020&color=fff`
                            : user?.foto
                        }
                    />

                    <PendingEditContent>
                        <PendingEditInputContainer>
                            <PendingEditLabel htmlFor="iname">Nome do funcionário</PendingEditLabel>
                            <PendingEditInput 
                                placeholder="Antônio Araújo"
                                id="iname"
                                name="name"
                                type="text"
                            />
                        </PendingEditInputContainer>
                        <PendingEditSubmit>
                            Atualizar
                        </PendingEditSubmit>

                    </PendingEditContent>
                </MyAccountContentContainer>
            </Container>
        </>
    );
}

/*

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
*/