import { FaEllipsisH, FaEnvelope, FaPhone, FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { 
    ContactInfo, EmployeeCardContainer, EmployeeData, EmployeeInfo, EmployeeInfoData, 
    EmployeeInfoDataName, EmployeeName, EmployeePhoto, EmployeeRole, OptionsButton, 
    OptionsMenu, OptionItem
} from "./styles";

interface EmployeeProps {
    id: string;
    nome: string;
    photo: string;
    role: string;
    empresa: string;
    hired: string;
    email: string;
    number: string;
    openMenu: string | null;
    setOpenMenu: (id: string | null) => void;
}

export function EmployeeCard({ 
    id, nome, photo, role, empresa, hired, email, number, openMenu, setOpenMenu 
}: EmployeeProps) {
    const isOpen = openMenu === id;

    function toggleMenu(e: React.MouseEvent) {
        e.stopPropagation();
        setOpenMenu(isOpen ? null : id);
    }

    return (
        <EmployeeCardContainer>
            <OptionsButton onClick={toggleMenu}>
                <FaEllipsisH />
            </OptionsButton>

            {isOpen && (
                <OptionsMenu>
                    <OptionItem onClick={() => alert("Ver detalhes de " + nome)}>
                        <FaEye /> Ver Detalhes
                    </OptionItem>
                    <OptionItem onClick={() => alert("Editando " + nome)}>
                        <FaEdit /> Editar
                    </OptionItem>
                    <OptionItem onClick={() => alert("Removendo " + nome)} style={{ color: "red" }}>
                        <FaTrash /> Remover
                    </OptionItem>
                </OptionsMenu>
            )}

            <EmployeePhoto src={photo} />
            <EmployeeName>{nome}</EmployeeName>
            <EmployeeRole>{role}</EmployeeRole>
            <EmployeeInfo>
                <EmployeeInfoData>
                    <EmployeeInfoDataName>Empresa</EmployeeInfoDataName>
                    <EmployeeData>{empresa}</EmployeeData>
                </EmployeeInfoData>
                <EmployeeInfoData>
                    <EmployeeInfoDataName>Hired Date</EmployeeInfoDataName>
                    <EmployeeData>{hired}</EmployeeData>
                </EmployeeInfoData>
            </EmployeeInfo>
            <ContactInfo>
                <FaEnvelope /> {email}
            </ContactInfo>
            <ContactInfo>
                <FaPhone /> {number}
            </ContactInfo>
        </EmployeeCardContainer>
    );
}

/*

import { FaEllipsisH, FaEnvelope, FaPhone, FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { 
    ContactInfo, EmployeeCardContainer, EmployeeData, EmployeeInfo, EmployeeInfoData, 
    EmployeeInfoDataName, EmployeeName, EmployeePhoto, EmployeeRole, OptionsButton, 
    OptionsMenu, OptionItem
} from "./styles";

interface EmployeeProps {
    id: string;
    nome: string;
    role: string;
    empresa: string;
    hired: string;
    email: string;
    number: string;
    openMenu: string | null;
    setOpenMenu: (id: string | null) => void;
}

export function EmployeeCard({ id, nome, role, empresa, hired, email, number, openMenu, setOpenMenu }: EmployeeProps) {
    const isOpen = openMenu === id;

    const toggleMenu = (e: React.MouseEvent) => {
        e.stopPropagation(); // Evita que o clique chegue até o `Container` e feche o menu
        setOpenMenu(isOpen ? null : id);
    };

    return (
        <EmployeeCardContainer onClick={(e) => e.stopPropagation()}>
            <OptionsButton onClick={toggleMenu}>
                <FaEllipsisH />
            </OptionsButton>

            {isOpen && (
                <OptionsMenu>
                    <OptionItem onClick={() => alert("Ver detalhes de " + nome)}>
                        <FaEye /> Ver Detalhes
                    </OptionItem>
                    <OptionItem onClick={() => alert("Editando " + nome)}>
                        <FaEdit /> Editar
                    </OptionItem>
                    <OptionItem onClick={() => alert("Removendo " + nome)} style={{ color: "red" }}>
                        <FaTrash /> Remover
                    </OptionItem>
                </OptionsMenu>
            )}

            <EmployeePhoto src={"https://github.com/luiscarlosedu.png"} />
            <EmployeeName>{nome}</EmployeeName>
            <EmployeeRole>{role}</EmployeeRole>
            <EmployeeInfo>
                <EmployeeInfoData>
                    <EmployeeInfoDataName>Empresa</EmployeeInfoDataName>
                    <EmployeeData>{empresa}</EmployeeData>
                </EmployeeInfoData>
                <EmployeeInfoData>
                    <EmployeeInfoDataName>Hired Date</EmployeeInfoDataName>
                    <EmployeeData>{hired}</EmployeeData>
                </EmployeeInfoData>
            </EmployeeInfo>
            <ContactInfo>
                <FaEnvelope /> {email}
            </ContactInfo>
            <ContactInfo>
                <FaPhone /> {number}
            </ContactInfo>
        </EmployeeCardContainer>
    );
}

*/