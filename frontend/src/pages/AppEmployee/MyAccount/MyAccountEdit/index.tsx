import { useContext, useState } from "react";
import { UserHeaderDetail } from "../components/user-header-detail";
import { MyAccountContentContainer } from "../styles";
import { Container, EditContent, EditInput, EditInputContainer, EditLabel, EditSubmit, } from "./styles";
import { AuthContext } from "../../../../contexts/AuthContext";
import { Navigate } from "react-router";

export default function MyAccountEdit() {
    const { user } = useContext(AuthContext);

    const [nameUser, setNameUser] = useState(user?.nome);

    if (!user) {
        return <Navigate to={"/"} replace />
    }


    return (
        <>
            <Container>
                <MyAccountContentContainer>
                    <UserHeaderDetail 
                        name={user.nome}
                        image={
                            user?.foto 
                            ? `http://localhost:3333/files/${user.foto}`
                            : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nome)}&background=202020&color=fff`
                        }
                    />

                    <EditContent>
                        <EditInputContainer>
                            <EditLabel htmlFor="iname">Nome do funcionário</EditLabel>
                            <EditInput 
                                placeholder="Antônio Araújo"
                                id="iname"
                                name="name"
                                type="text"
                                value={nameUser}
                                onChange={(e) => setNameUser(e.target.value)}
                            />
                        </EditInputContainer>
                        <EditSubmit>
                            Atualizar
                        </EditSubmit>

                    </EditContent>
                </MyAccountContentContainer>
            </Container>
        </>
    );
}