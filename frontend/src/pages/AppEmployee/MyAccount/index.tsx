import { useContext } from "react";
import { UserHeaderDetail } from "./components/user-header-detail";
import MyAccountInfo from "./MyAccountInfo";
import { Container, MyAccountContentContainer } from "./styles";
import { AuthContext } from "../../../contexts/AuthContext";
import { Navigate } from "react-router";
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
    const { user } = useContext(AuthContext);
        
    if(!user) {
        return <Navigate to={"/"} replace />
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