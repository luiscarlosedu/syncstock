import { Container, TabButton } from "./styles";
import { useNavigate, useLocation } from "react-router";

import { FaHome, FaUsers } from "react-icons/fa";
import { MdCategory, MdOutlineHomeWork} from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";

interface SideBarProps {
    type: "enterprise" | "employee";
}

export function Tabs({ type }: SideBarProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        { icon: <FaHome />, enterprise_path: "/empresa/home", employee_path: "/funcionario/home" },
        { icon: <IoMdPricetag />, enterprise_path: "/empresa/produtos", employee_path: "/funcionario/produtos"  },
        { icon: <MdCategory />, enterprise_path: "/empresa/categorias", employee_path: "/funcionario/categorias" },
        { icon: <FaUsers />, enterprise_path: "/empresa/funcionarios", employee_path: "/funcionario/empresa" },
    ];

    return (
        type === 'enterprise' ? (
            <Container>
                {tabs.map((tab, index) => (
                    <TabButton
                        key={index}
                        onClick={() => navigate(tab.enterprise_path)}
                        active={location.pathname === tab.enterprise_path}
                    >
                        {tab.icon}
                    </TabButton>
                ))}
            </Container>
        ) : (
            <Container>
                {tabs.map((tab, index) => (
                    <TabButton
                        key={index}
                        onClick={() => navigate(tab.employee_path)}
                        active={location.pathname === tab.employee_path}
                    >
                        {tab.employee_path === 'funcionario/empresa' ? <MdOutlineHomeWork/> : tab.icon}
                    </TabButton>
                ))}
            </Container>
        )
    );
}
