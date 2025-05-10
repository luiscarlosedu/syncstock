import { PendingHeader } from "../../../components/pending-header";
import { Container, MyAccountContentContainer } from "./styles";
import { UserHeaderPending } from "./components/user-header-pending";
import MyAccountPendinginfo from "./MyAccountPendingInfo";

export interface EmployeeProps {
    name: string;
    type: "employee" | "enterprise"
    employed: boolean;
    image: string;
}

export default function MyAccountPending() {

    const funcionario: EmployeeProps = {
        name: 'Luís Eduardo',
        employed: false,
        type: 'employee',
        image: "https://avatars.githubusercontent.com/u/157180909?v=4"
    }
        
    return (
        <>
            <PendingHeader/>
            <Container>
                <MyAccountContentContainer>
                    <UserHeaderPending 
                        name={funcionario.name}
                        employed={funcionario.employed}
                        type={funcionario.type}
                        image={funcionario.image}
                    />

                    <MyAccountPendinginfo />
                </MyAccountContentContainer>
            </Container>
        </>
    );
}