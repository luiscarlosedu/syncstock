import { 
    Container,
    SideBarEnterprise,
    SideBarEmployee,
    SideBarItem,
    SideBarList,
    SideBarItemLink,
    SideBarFooter,
    SideBarContent,
    SideBarRow,
    SideBarFooterButton
} from "./styles";

import { FaHome, FaQuestion, FaUsers } from "react-icons/fa";
import { MdCategory, MdLogout, MdOutlineHomeWork } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { useLocation } from "react-router";
import { TbMessage2Question } from "react-icons/tb";

interface SideBarProps {
    type: "enterprise" | "employee";
}

export function SideBar({ type }: SideBarProps) {
    const location = useLocation();
    return (
        <Container>
            {type === 'enterprise' ? (
                <SideBarEnterprise>
                    <SideBarContent>
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
                            <SideBarItem>
                                <SideBarItemLink
                                    to={'/empresa/produtos'}
                                    isActive={location.pathname === "/empresa/produtos"}
                                >
                                    <IoMdPricetag />
                                    Produtos
                                </SideBarItemLink>
                            </SideBarItem>
                            <SideBarItem>
                                <SideBarItemLink
                                    to={'/empresa/funcionarios'}
                                    isActive={location.pathname === "/empresa/funcionarios"}
                                >
                                    <FaUsers />
                                    Funcionários
                                </SideBarItemLink>
                            </SideBarItem>
                        </SideBarList>
                        
                        <SideBarRow />

                        <SideBarList>
                            <SideBarItem>
                                <SideBarItemLink
                                    to={'/empresa/sobre'}
                                    isActive={location.pathname === "/empresa/sobre"}
                                >
                                    <FaQuestion size={14} />
                                    Sobre
                                </SideBarItemLink>
                            </SideBarItem>
                            <SideBarItem>
                                <SideBarItemLink
                                    to={'/empresa/faq'}
                                    isActive={location.pathname === "/empresa/faq"}
                                >
                                    <TbMessage2Question />
                                    FAQ
                                </SideBarItemLink>
                            </SideBarItem>
                        </SideBarList>

                    </SideBarContent>

                    <SideBarFooter>
                        <SideBarFooterButton>
                            <MdLogout size={16} /> Sair
                        </SideBarFooterButton>
                    </SideBarFooter>
                </SideBarEnterprise>
            ): (
                <SideBarEmployee>
                    <SideBarContent>
                        <SideBarList>
                            <SideBarItem>
                                <SideBarItemLink
                                    to={'/funcionario/home'}
                                    isActive={location.pathname === "/funcionario/home"}
                                >
                                    <FaHome />
                                    Home
                                </SideBarItemLink>
                            </SideBarItem>
                            <SideBarItem>
                                <SideBarItemLink
                                    to={'/funcionario/categorias'}
                                    isActive={location.pathname === "/funcionario/categorias"}
                                >
                                    <MdCategory />
                                    Categorias
                                </SideBarItemLink>
                            </SideBarItem>
                            <SideBarItem>
                                <SideBarItemLink
                                    to={'/funcionario/produtos'}
                                    isActive={location.pathname === "/funcionario/produtos"}
                                >
                                    <IoMdPricetag />
                                    Produtos
                                </SideBarItemLink>
                            </SideBarItem>
                            <SideBarItem>
                                <SideBarItemLink
                                    to={'/funcionario/empresa'}
                                    isActive={location.pathname === "/funcionario/empresa"}
                                >
                                    <MdOutlineHomeWork />
                                    Empresa
                                </SideBarItemLink>
                            </SideBarItem>
                        </SideBarList>
                        
                        <SideBarRow />

                        <SideBarList>
                            <SideBarItem>
                                <SideBarItemLink
                                    to={'/funcionario/sobre'}
                                    isActive={location.pathname === "/funcionario/sobre"}
                                >
                                    <FaQuestion size={14} />
                                    Sobre
                                </SideBarItemLink>
                            </SideBarItem>
                            <SideBarItem>
                                <SideBarItemLink
                                    to={'/funcionario/faq'}
                                    isActive={location.pathname === "/funcionario/faq"}
                                >
                                    <TbMessage2Question />
                                    FAQ
                                </SideBarItemLink>
                            </SideBarItem>
                        </SideBarList>
                    </SideBarContent>

                    <SideBarFooter>
                        <SideBarFooterButton>
                            <MdLogout size={16}/> Sair
                        </SideBarFooterButton>
                    </SideBarFooter>
                </SideBarEmployee>
            )}
        </Container>
    );
};