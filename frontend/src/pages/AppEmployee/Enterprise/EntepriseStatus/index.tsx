import { FaUsers } from "react-icons/fa";
import { Container, StatusCard, StatusCardContent, StatusCardIcon, StatusTitle, StatusValue } from "./styles";
import { IoMdPricetag } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { EnterpriseData } from "..";

interface Props {
    data: EnterpriseData
}

export function EnterpriseStatus({data}: Props) {
    return (
        <Container>
            <StatusCard>
                <StatusCardIcon>
                    <FaUsers size={25} />
                </StatusCardIcon>
                <StatusCardContent>
                    <StatusValue>{data.funcionarios.length}</StatusValue>
                    <StatusTitle>Funcionários</StatusTitle>
                </StatusCardContent>
            </StatusCard>

            <StatusCard>
                <StatusCardIcon>
                    <IoMdPricetag size={25} />
                </StatusCardIcon>
                <StatusCardContent>
                    <StatusValue>{data.productsCount}</StatusValue>
                    <StatusTitle>Produtos</StatusTitle>
                </StatusCardContent>                
            </StatusCard>

            <StatusCard>
                <StatusCardIcon>
                    <MdCategory size={25} />
                </StatusCardIcon>
                <StatusCardContent>
                    <StatusValue>{data.categoriesCount}</StatusValue>
                    <StatusTitle>Categorias</StatusTitle>
                </StatusCardContent>                
            </StatusCard>
        </Container>
    );
}