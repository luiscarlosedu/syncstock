import { Outlet, useNavigate } from "react-router";
import { ImageAuth } from "./components/ImageAuth";

import { Container } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthContext";

export function AuthLayout() {
    const { signed, user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (signed && user) {
        if (user.tipo === 'empresa') {
            navigate("/empresa/home")
        } else {
            navigate("/funcionario/home")
        }
    }

    return (
        <Container>
            <Outlet />
            <ImageAuth />
        </Container>
    );
}