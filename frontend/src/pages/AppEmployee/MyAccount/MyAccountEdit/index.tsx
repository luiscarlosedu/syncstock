import { EmployeeProps } from "..";
import { UserHeaderDetail } from "../components/user-header-detail";
import { MyAccountContentContainer } from "../styles";
import { Container, EditContent, EditInput, EditInputContainer, EditLabel, EditSubmit, } from "./styles";

export default function MyAccountEdit() {
    const funcionario: EmployeeProps = {
        name: 'Luís Eduardo',
        email: 'eduardo.luis032@gmail.com',
        enterpriseName: 'SyncStock',
        employed: true,
        type: 'employee',
        image: "https://avatars.githubusercontent.com/u/157180909?v=4"
    }

    return (
        <>
            <Container>
                <MyAccountContentContainer>
                    <UserHeaderDetail
                        name={funcionario.name}
                        image={funcionario.image}
                    />

                    <EditContent>
                        <EditInputContainer>
                            <EditLabel htmlFor="iname">Nome do funcionário</EditLabel>
                            <EditInput 
                                placeholder="Antônio Araújo"
                                id="iname"
                                name="name"
                                type="text"
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