import { PendingHeader } from "../../../components/pending-header";
import { Container, MyAccountContentContainer } from "./styles";
import { UserHeaderPending } from "./components/user-header-pending";
import MyAccountPendinginfo from "./MyAccountPendingInfo";
import { Navigate } from "react-router";

export interface EmployeeProps {
    name: string;
    type: "employee" | "enterprise"
    employed: boolean;
    image: string;
}

export default function MyAccountPending() {
    const funcionario: EmployeeProps = {
        name: 'Luís Eduardo',
        employed: true,
        type: 'employee',
        image: "https://avatars.githubusercontent.com/u/157180909?v=4"
    }

    if (funcionario.employed === true) {
        return <Navigate to={'/funcionario/home'} replace />;
    }
        
    return (
        <>
            <PendingHeader/>
            <Container>
                <MyAccountContentContainer>
                    <UserHeaderPending 
                        name={funcionario.name}
                        image={funcionario.image}
                    />

                    <MyAccountPendinginfo />
                </MyAccountContentContainer>
            </Container>
        </>
    );
}