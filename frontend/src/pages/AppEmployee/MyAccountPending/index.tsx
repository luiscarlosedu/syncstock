import { PendingHeader } from "../../../components/pending-header";
import { Container, MyAccountContentContainer } from "./styles";
import { UserHeaderPending } from "./components/user-header-pending";
import MyAccountPendinginfo from "./MyAccountPendingInfo";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";
import { Navigate } from "react-router";
// import { Navigate } from "react-router";

export interface EmployeeProps {
    name: string;
    type: "employee" | "enterprise"
    employed: boolean;
    image: string;
}

export default function MyAccountPending() {
    const { user } = useContext(AuthContext);

    if(!user) {
        return <Navigate to={"/"} replace />
    }

    return (
        <>
            <PendingHeader/>
            <Container>
                <MyAccountContentContainer>
                    <UserHeaderPending
                        name={user?.nome}
                        image={
                            user?.foto
                            ? `${import.meta.env.VITE_API_URL}/files/${user.foto}`
                            : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nome)}&background=202020&color=fff`
                        }
                    />

                    <MyAccountPendinginfo />
                </MyAccountContentContainer>
            </Container>
        </>
    );
}