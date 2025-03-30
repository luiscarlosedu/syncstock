import { FaEllipsisH, FaEnvelope, FaPhone } from "react-icons/fa";
import { ContactInfo, EmployeeCardContainer, EmployeeData, EmployeeInfo, EmployeeInfoData, EmployeeInfoDataName, EmployeeName, EmployeePhoto, EmployeeRole, OptionsButton } from "./styles";

interface EmployeeProps {
    nome: string;
    role: string;
    empresa: string;
    hired: string;
    email: string;
    number: string;
}

export function EmployeeCard({
    nome, role, empresa, hired, email, number
}: EmployeeProps) {
    return (
        <EmployeeCardContainer>
            <OptionsButton>
                <FaEllipsisH />
            </OptionsButton>
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