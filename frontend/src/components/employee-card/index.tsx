import { FaEllipsisH, FaEnvelope, FaTrash, FaEdit, FaEye } from "react-icons/fa";
import { 
    ContactInfo, EmployeeCardContainer, EmployeeData, EmployeeInfo, EmployeeInfoData, 
    EmployeeInfoDataName, EmployeeName, EmployeePhoto, OptionsButton, 
    OptionsMenu, OptionItem
} from "./styles";

interface EmployeeProps {
    id: string;
    nome: string;
    photo: string;
    empresa: string;
    created_at: string;
    email: string;
    // number: string;
    openMenu: string | null;
    setOpenMenu: (id: string | null) => void;
}

export function EmployeeCard({ 
    id, nome, photo, empresa, created_at, email, openMenu, setOpenMenu 
}: EmployeeProps) {
    const isOpen = openMenu === id;

    function formattedDate(date: string) {
        return new Date(date).toLocaleDateString("pt-BR");
    }

    function toggleMenu(e: React.MouseEvent) {
        e.stopPropagation();
        setOpenMenu(isOpen ? null : id);
    };

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

            <EmployeePhoto 
                src={
                    photo
                        ? `http://localhost:3333/files/${photo}` 
                        : `https://ui-avatars.com/api/?name=${nome}&background=202020&color=fff`
                } 
            />
            <EmployeeName>{nome}</EmployeeName>
            {/* <EmployeeRole>{role}</EmployeeRole> */}
            <EmployeeInfo>
                <EmployeeInfoData>
                    <EmployeeInfoDataName>Empresa</EmployeeInfoDataName>
                    <EmployeeData>{empresa}</EmployeeData>
                </EmployeeInfoData>
                <EmployeeInfoData>
                    <EmployeeInfoDataName>Criado em:</EmployeeInfoDataName>
                    <EmployeeData>{formattedDate(created_at)}</EmployeeData>
                </EmployeeInfoData>
            </EmployeeInfo>
            <ContactInfo>
                <FaEnvelope /> {email}
            </ContactInfo>
            {/* <ContactInfo>
                <FaPhone /> 
            </ContactInfo> */}
        </EmployeeCardContainer>
    );
}