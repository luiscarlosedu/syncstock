import { useState, useContext, useEffect, useRef } from "react";
import { Container, TabButton, MoreMenu } from "./styles";
import { useNavigate, useLocation } from "react-router";
import { AuthContext } from "../../contexts/AuthContext";

import { FaHome, FaUsers, FaEllipsisH, FaQuestion } from "react-icons/fa";
import { MdCategory, MdLogout, MdOutlineHomeWork } from "react-icons/md";
import { IoMdPricetag } from "react-icons/io";
import { TbMessage2Question } from "react-icons/tb";

interface SideBarProps {
    type: "enterprise" | "employee";
}

export function Tabs({ type }: SideBarProps) {
    const navigate = useNavigate();
    const location = useLocation();
    const { signOut } = useContext(AuthContext);
    const [showMoreMenu, setShowMoreMenu] = useState(false);

    const moreRef = useRef<HTMLDivElement>(null);

    const tabs = [
        {
            icon: <FaHome />,
            enterprise_path: "/empresa/home",
            employee_path: "/funcionario/home",
        },
        {
            icon: <IoMdPricetag />,
            enterprise_path: "/empresa/produtos",
            employee_path: "/funcionario/produtos",
        },
        {
            icon: <MdCategory />,
            enterprise_path: "/empresa/categorias",
            employee_path: "/funcionario/categorias",
        },
        {
            icon: <FaUsers />,
            enterprise_path: "/empresa/funcionarios",
            employee_path: "/funcionario/empresa",
        },
    ];

    const handleNavigate = (path: string) => {
        navigate(path);
        setShowMoreMenu(false);
    };

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                moreRef.current &&
                !moreRef.current.contains(event.target as Node)
            ) {
                setShowMoreMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <Container>
            {tabs.map((tab, index) => {
                const path =
                    type === "enterprise"
                        ? tab.enterprise_path
                        : tab.employee_path;
                const isActive = location.pathname === path;
                const icon =
                    type === "employee" && path === "/funcionario/empresa" ? (
                        <MdOutlineHomeWork />
                    ) : (
                        tab.icon
                    );

                return (
                    <TabButton
                        key={index}
                        onClick={() => handleNavigate(path)}
                        active={isActive}
                    >
                        {icon}
                    </TabButton>
                );
            })}

            <div ref={moreRef} style={{ position: "relative" }}>
                <TabButton onClick={() => setShowMoreMenu((prev) => !prev)}>
                    <FaEllipsisH />
                </TabButton>

                {showMoreMenu && (
                    <MoreMenu>
                        <button
                            onClick={() =>
                                handleNavigate(
                                    type === "enterprise"
                                        ? "/empresa/sobre"
                                        : "/funcionario/sobre"
                                )
                            }
                        >
                            <FaQuestion /> Sobre
                        </button>
                        <button
                            onClick={() =>
                                handleNavigate(
                                    type === "enterprise"
                                        ? "/empresa/faq"
                                        : "/funcionario/faq"
                                )
                            }
                        >
                            <TbMessage2Question /> FAQ
                        </button>
                        <button
                            onClick={async () => {
                                await signOut();
                                navigate("/");
                            }}
                        >
                            <MdLogout /> Sair
                        </button>
                    </MoreMenu>
                )}
            </div>
        </Container>
    );
}
