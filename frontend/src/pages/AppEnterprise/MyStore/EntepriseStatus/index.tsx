import { FaUsers } from "react-icons/fa";
import { Container, StatusCard, StatusCardContent, StatusCardIcon, StatusTitle, StatusValue } from "./styles";

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
                
            </StatusCard>
        </Container>
    );
}