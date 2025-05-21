import { UserHeaderDetail } from "./components/user-header-detail";
import MyAccountInfo from "./MyAccountInfo";
import { Container, MyAccountContentContainer } from "./styles";
// import { UserHeaderPending } from "./components/user-header-pending";
// import MyAccountPendinginfo from "./MyAccountPendingInfo";
// import { Navigate } from "react-router";

export interface EmployeeProps {
    name: string;
    email: string;
    enterpriseName: string;
    type: "employee" | "enterprise";
    employed: boolean;
    image: string;
}

export default function MyAccount() {
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

                    <MyAccountInfo 
                        name={funcionario.name}
                        email={funcionario.email}
                        enterpriseName={funcionario.enterpriseName}
                        
                    />
                </MyAccountContentContainer>
            </Container>
        </>
    );
}