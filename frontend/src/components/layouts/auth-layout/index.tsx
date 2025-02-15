import { Outlet } from "react-router";
import { ImageAuth } from "./components/ImageAuth";

import { Container } from "./styles";

export function AuthLayout() {
    return (
        <Container>
            <Outlet />
            <ImageAuth />
        </Container>
    );
}