import { PendingHeader } from "../../../components/pending-header";
import { Container, MyAccountContentContainer } from "./styles";
import { UserHeaderPending } from "./components/user-header-pending";
import MyAccountPendinginfo from "./MyAccountPendingInfo";
// import { Navigate } from "react-router";

export interface EmployeeProps {
    name: string;
    type: "employee" | "enterprise"
    employed: boolean;
    image: string;
}

export default function MyAccountPending() {
        
    return (
        <>
            <PendingHeader/>
            <Container>
                <MyAccountContentContainer>
                    <UserHeaderPending 
                        name={"Eduardo"}
                        image={"https://github.com/luiscarlosedu.png"}
                    />

                    <MyAccountPendinginfo />
                </MyAccountContentContainer>
            </Container>
        </>
    );
}