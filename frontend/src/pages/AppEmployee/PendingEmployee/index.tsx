import { Container, ImageArea, PendingEmployeeContentContainer } from "./styles";
import { Header } from "../../../components/header";
import { Navigate } from "react-router";

import PendingEmployeeImage from '../../../assets/pendent-employee.jpg';

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

            <PendingEmployeeContentContainer>
                <ImageArea src={PendingEmployeeImage} />
            </PendingEmployeeContentContainer>
        </Container>
    );
}