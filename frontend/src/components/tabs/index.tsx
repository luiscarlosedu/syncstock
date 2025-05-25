import { Container, TabButton } from "./styles";
import { useNavigate, useLocation } from "react-router";
import { FaHome, FaProductHunt, FaFonticons } from "react-icons/fa";

export function Tabs() {
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        { icon: <FaHome />, path: "/empresa/home" },
        { icon: <FaProductHunt />, path: "/empresa/produtos" },
        { icon: <FaFonticons />, path: "/empresa/funcionarios" },
        { icon: <FaFonticons />, path: "/empresa/funcionarios" },
        { icon: <FaFonticons />, path: "/empresa/funcionarios" },
    ];

    return (
        <Container>
            {tabs.map((tab, index) => (
                <TabButton
                    key={index}
                    onClick={() => navigate(tab.path)}
                    active={location.pathname === tab.path}
                >
                    {tab.icon}
                </TabButton>
            ))}
        </Container>
    );
}
