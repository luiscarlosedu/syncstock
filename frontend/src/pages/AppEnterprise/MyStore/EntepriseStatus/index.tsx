import { FaUsers } from "react-icons/fa";
import { Container, StatusCard, StatusCardContent, StatusCardIcon, StatusTitle, StatusValue } from "./styles";
import { IoMdPricetag } from "react-icons/io";
import { MdCategory } from "react-icons/md";
import { useEffect, useState } from "react";
import api from "../../../../services/api";
import { LoadingAccount } from "../../../../components/loading-account";

export function EnterpriseStatus() {
    const [employeesTotal, setEmployeesTotal] = useState(0);
    const [productsTotal, setProductsTotal] = useState(0);
    const [categoriesTotal, setCategoriesTotal] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadStorage();
    }, []);

    async function loadStorage() {
        setLoading(true);
        try {
            const response = await api.get("/enterprise/status");
            const { employeesTotal, productsTotal, categoriesTotal } = response.data;

            setEmployeesTotal(employeesTotal);
            setProductsTotal(productsTotal);
            setCategoriesTotal(categoriesTotal);
        } catch (err) {
            console.log("[ERRO] ", err);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <LoadingAccount />
    }

    return (
        <Container>
            <StatusCard>
                <StatusCardIcon>
                    <FaUsers size={25} />
                </StatusCardIcon>
                <StatusCardContent>
                    <StatusValue>{employeesTotal}</StatusValue>
                    <StatusTitle>Funcionários</StatusTitle>
                </StatusCardContent>
            </StatusCard>

            <StatusCard>
                <StatusCardIcon>
                    <IoMdPricetag size={25} />
                </StatusCardIcon>
                <StatusCardContent>
                    <StatusValue>{productsTotal}</StatusValue>
                    <StatusTitle>Produtos</StatusTitle>
                </StatusCardContent>                
            </StatusCard>

            <StatusCard>
                <StatusCardIcon>
                    <MdCategory size={25} />
                </StatusCardIcon>
                <StatusCardContent>
                    <StatusValue>{categoriesTotal}</StatusValue>
                    <StatusTitle>Categorias</StatusTitle>
                </StatusCardContent>                
            </StatusCard>
        </Container>
    );
}