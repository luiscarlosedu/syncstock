import { FaUsers } from "react-icons/fa";
import { Container, StatusCard, StatusCardContent, StatusCardIcon, StatusTitle, StatusValue } from "./styles";
import { IoMdPricetag } from "react-icons/io";

export function EnterpriseStatus() {
    return (
        <Container>
            <StatusCard>
                <StatusCardIcon>
                    <FaUsers size={30} />
                </StatusCardIcon>
                <StatusCardContent>
                    <StatusValue>8</StatusValue>
                    <StatusTitle>Funcionários</StatusTitle>
                </StatusCardContent>
            </StatusCard>

            <StatusCard>
                <StatusCardIcon>
                    <IoMdPricetag size={30} />
                </StatusCardIcon>
                <StatusCardContent>
                    <StatusValue>140</StatusValue>
                    <StatusTitle>Produtos</StatusTitle>
                </StatusCardContent>                
            </StatusCard>
        </Container>
    );
}