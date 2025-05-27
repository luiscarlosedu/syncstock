import { Outlet, useLocation } from "react-router";
import { Container, UseLayoutPage, BottomTabsWrapper } from "./styles";
import { Header } from "../../header";
import { SideBar } from "../../sidebar";
import { useEffect, useState } from "react";
import { Tabs } from "../../tabs"; // importe corretamente o caminho

export function UseLayout() {
    const location = useLocation();
    const [typeUser, setTypeUser] = useState<"employee" | "enterprise">("employee");

    useEffect(() => {
        if (location.pathname.startsWith("/funcionario")) {
            setTypeUser("employee");
        } else if (location.pathname.startsWith("/empresa")) {
            setTypeUser("enterprise");
        }
    }, [location.pathname]);

    return (
        <Container>
            <Header type={typeUser} />

            <UseLayoutPage>
                <SideBar type={typeUser} />
                <Outlet />
            </UseLayoutPage>

            <BottomTabsWrapper>
                <Tabs type={typeUser} />
            </BottomTabsWrapper>
        </Container>
    );
}
