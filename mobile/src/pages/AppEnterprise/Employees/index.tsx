import { Text } from "react-native";
import { Container } from "./styles";
import { EnterpriseLayout } from "../../../components/layouts/enterprise-layout";

export default function EmployeesEnterprise() {
    return (
        <EnterpriseLayout>
            <Container>
                <Text>Página Employees Enterprise</Text>
            </Container>
        </EnterpriseLayout>
    );
}