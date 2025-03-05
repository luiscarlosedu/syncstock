import { 
    Container, 
    HomeContent, 
    HomePhoto, 
    HomeSubTitle, 
    HomeTitle,
} from "./styles";

import { EmployeeLengthWarn } from "../../../components/EmployeeLengthWarn";
import Image from '../../../assets/enterprise-stock.jpg';

export default function HomeEnterprise() {
    const length: number = 0;
    return (
        <Container>
            <HomeContent>
                {length === 0 && <EmployeeLengthWarn/>}
                <HomeTitle>Olá, Empresa!</HomeTitle>
                <HomeSubTitle>Gerencie seu estoque com nossa plataforma.</HomeSubTitle>
                <HomePhoto src={Image} />


            </HomeContent>
            
        </Container>
    );
}