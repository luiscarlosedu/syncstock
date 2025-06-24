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
    empresa: string;
    // hired: string;
    email: string;
    // number: string;
    openMenu: string | null;
    setOpenMenu: (id: string | null) => void;
}

export function EmployeeCard({ 
    id, nome, photo, empresa, email, openMenu, setOpenMenu 
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
                <OptionsMenu isOpen={isOpen}>
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
            {/* <EmployeeRole>{role}</EmployeeRole> */}
            <EmployeeInfo>
                <EmployeeInfoData>
                    <EmployeeInfoDataName>Empresa</EmployeeInfoDataName>
                    <EmployeeData>{empresa}</EmployeeData>
                </EmployeeInfoData>
                <EmployeeInfoData>
                    <EmployeeInfoDataName>Hired Date</EmployeeInfoDataName>
                    <EmployeeData>20</EmployeeData>
                </EmployeeInfoData>
            </EmployeeInfo>
            <ContactInfo>
                <FaEnvelope /> {email}
            </ContactInfo>
            <ContactInfo>
                <FaPhone /> 
            </ContactInfo>
        </EmployeeCardContainer>
    );
}