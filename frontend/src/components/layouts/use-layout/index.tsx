import { Outlet } from "react-router";
import { Container, UseLayoutPage } from "./styles";
import { Header } from "../../header";
import { SideBar } from "../../sidebar";

export function UseLayout() {
    return (
        <Container>
            <Header />
            <UseLayoutPage>
                <SideBar />
                <Outlet />
            </UseLayoutPage>
        </Container>
    );
}