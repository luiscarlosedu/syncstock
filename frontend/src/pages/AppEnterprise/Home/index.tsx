import { 
    Container, 
    HomePhoto, 
    HomeTitle,
} from "./styles";

import { EmployeeLengthWarn } from "../../../components/EmployeeLengthWarn";
import Image from '../../../assets/home-image.jpg';

export default function HomeEnterprise() {
    const length: number = 1;
    return (
        <Container>
            {length === 0 && <EmployeeLengthWarn/>}

            <HomeTitle>Olá, Empresa!</HomeTitle>

            <HomePhoto src={Image} />
            
        </Container>
    );
}