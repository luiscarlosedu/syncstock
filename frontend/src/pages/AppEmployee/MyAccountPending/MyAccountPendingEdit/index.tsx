import { EmployeeProps } from "..";
import { PendingHeader } from "../../../../components/pending-header";
import { UserHeaderPending } from "../components/user-header-pending";
import { MyAccountContentContainer } from "../styles";
import { Container } from "./styles";

export default function MyAccountPendingEdit() {
    const funcionario: EmployeeProps = {
        name: 'Luís Eduardo',
        employed: false,
        type: 'employee',
        image: "https://avatars.githubusercontent.com/u/157180909?v=4"
    }
    return (
        <>
            <PendingHeader />
            <Container>
                <MyAccountContentContainer>
                    <UserHeaderPending
                        name={funcionario.name}
                        image={funcionario.image}
                    />
                    
                </MyAccountContentContainer>
            </Container>
        </>
    );
}