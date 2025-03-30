import { FaEllipsisH, FaEnvelope, FaPhone } from "react-icons/fa";
import { ContactInfo, EmployeeCardContainer, EmployeeData, EmployeeInfo, EmployeeInfoData, EmployeeInfoDataName, EmployeeName, EmployeePhoto, EmployeeRole, OptionsButton } from "./styles";


export function EmployeeCard() {
    return (
        <EmployeeCardContainer>
            <OptionsButton>
                <FaEllipsisH />
            </OptionsButton>
            <EmployeePhoto src={"https://github.com/luiscarlosedu.png"} />
            <EmployeeName>Luís Eduardo</EmployeeName>
            <EmployeeRole>Desenvolvedor</EmployeeRole>
            <EmployeeInfo>
                <EmployeeInfoData>
                    <EmployeeInfoDataName>Empresa</EmployeeInfoDataName>
                    <EmployeeData>SyncStock</EmployeeData>
                </EmployeeInfoData>
                <EmployeeInfoData>
                    <EmployeeInfoDataName>Hired Date</EmployeeInfoDataName>
                    <EmployeeData>7/27/13</EmployeeData>
                </EmployeeInfoData>
            </EmployeeInfo>
            <ContactInfo>
                <FaEnvelope /> eduardo.luis070408@gmail.com
            </ContactInfo>
            <ContactInfo>
                <FaPhone /> 88997876890
            </ContactInfo>
        </EmployeeCardContainer>
    );
}