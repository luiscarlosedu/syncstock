import { PendingHeader } from "../../../components/pending-header";
import { Container, MyAccountContentContainer } from "./styles";
import { UserHeaderPending } from "./components/user-header-pending";

export interface EmployeeProps {
    name: string;
    type: "employee" | "enterprise"
    employed: boolean;
    image: string;
}

export default function MyAccountPending() {

    const funcionario: EmployeeProps = {
        name: 'Victor Shaoles',
        employed: true,
        type: 'employee',
        image: "https://github.com/victorrxyv.png"
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
                </MyAccountContentContainer>
            </Container>
        </>
    );
}