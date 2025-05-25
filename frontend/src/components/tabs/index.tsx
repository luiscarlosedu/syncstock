import { Container, TabButton } from "./styles";
import { useNavigate, useLocation } from "react-router";

import { FaHome, FaUsers } from "react-icons/fa";
import { MdCategory} from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";

export function Tabs() {
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        { icon: <FaHome />, path: "/empresa/home" },
        { icon: <IoMdPricetag />, path: "/empresa/produtos" },
        { icon: <MdCategory />, path: "/empresa/categorias" },
        { icon: <FaUsers />, path: "/empresa/funcionarios" },
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
