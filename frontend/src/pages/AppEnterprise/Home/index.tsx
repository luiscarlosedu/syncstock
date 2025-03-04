import { 
    Container, 
    HomeTitle,
} from "./styles";

import { EmployeeLengthWarn } from "../../../components/EmployeeLengthWarn";

export default function HomeEnterprise() {
    const length = 0;
    return (
        <Container>
            {length === 0 && <EmployeeLengthWarn/>}

            <HomeTitle>Olá, Empresa!</HomeTitle>
            
        </Container>
    );
}