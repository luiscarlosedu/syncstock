import { Container } from "./styles";
import { Header } from "../../../components/header";
import { Navigate } from "react-router";

export default function PendingEmployee() {
    const funcionario = {
        employed: false
    }

    if (funcionario.employed === true) {
        return <Navigate to={'/funcionario/home'} replace />
    }

    return (
        <Container>
            <Header type="employee" />
        </Container>
    );
}