import { 
    Container,
    SideBarEnterprise,
    SideBarEmployee,
    SideBarItem,
    SideBarList,
    SideBarItemLink,
    SideBarFooter
} from "./styles";

import { FaHome, /*FaUsers*/ } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { useLocation } from "react-router";
// import { IoLogOut } from "react-icons/io5";

interface SideBarProps {
    type: "enterprise" | "employee";
}

// Enterprise: home, funcionarios, categorias, products, about, sair
// Employee: home, categorias, products, empresa, about, sair

export function SideBar({ type }: SideBarProps) {
    const location = useLocation();
    return (
        <Container>
            {type === 'enterprise' ? (
                <SideBarEnterprise>
                    <SideBarList>
                        <SideBarItem>
                            <SideBarItemLink 
                                to={'/empresa/home'}
                                isActive={location.pathname === "/empresa/home"}
                            >
                                <FaHome />
                                Home
                            </SideBarItemLink>
                        </SideBarItem>
                        <SideBarItem>
                            <SideBarItemLink 
                                to={'/empresa/categorias'}
                                isActive={location.pathname === "/empresa/categorias"}
                            >
                                <MdCategory />
                                Categorias
                            </SideBarItemLink>
                        </SideBarItem>
                        {/* <SideBarItem>
                            <SideBarItemLink 
                                to={'/empresa/products'}
                                // isActive={location.pathname === "/empresa/home"}
                            >
                                <IoMdPricetag />
                                Produtos
                            </SideBarItemLink>
                        </SideBarItem> */}
                    </SideBarList>
                    <SideBarFooter>
                        <p>Sair</p>
                    </SideBarFooter>
                </SideBarEnterprise>
            ): (
                <SideBarEmployee>
                    <p>Sidebar employee</p>
                </SideBarEmployee>
            )}
        </Container>
    );
};