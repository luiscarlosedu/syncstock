import { Outlet } from "react-router";
import { Container, UseLayoutPage } from "./styles";
import { Header } from "../../header";
import { SideBar } from "../../sidebar";

export function UseLayout() {
    const typeUser = "enterprise";

    return (
        <Container>
            <Header type={typeUser} />
            <UseLayoutPage>
                <SideBar type={typeUser} />
                <Outlet />
            </UseLayoutPage>
        </Container>
    );
}