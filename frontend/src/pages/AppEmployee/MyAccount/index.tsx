import { useContext } from "react";
import { UserHeaderDetail } from "./components/user-header-detail";
import MyAccountInfo from "./MyAccountInfo";
import { Container, MyAccountContentContainer } from "./styles";
import { AuthContext } from "../../../contexts/AuthContext";
import { Navigate } from "react-router";

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
    };

    return (
        <>
            <Container>
                <MyAccountContentContainer>
                    <UserHeaderDetail 
                        name={user.nome}
                        image={
                            user?.foto 
                            ? `${import.meta.env.VITE_API_URL}/files/${user.foto}`
                            : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nome)}&background=202020&color=fff`
                        }
                    />

                    <MyAccountInfo 
                        name={user.nome}
                        email={user.email}
                        created_at={user.createdAt}
                        enterpriseName={
                            user.enterprise_nome
                            ? user.enterprise_nome
                            : "Nenhuma"
                        }
                    />
                </MyAccountContentContainer>
            </Container>
        </>
    );
}