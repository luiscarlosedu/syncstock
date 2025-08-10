import { Text } from "react-native";
import { Container } from "./styles";
import { EnterpriseLayout } from "../../../components/layouts/enterprise-layout";

export default function ProductsEnterprise() {
    return (
        <EnterpriseLayout>
            <Container>
                <Text>Página Products Enterprise</Text>
            </Container>
        </EnterpriseLayout>
    );
}