import { Text } from "react-native";
import { Container } from "./styles";
import { EnterpriseLayout } from "../../../components/layouts/enterprise-layout";

export default function MyStoreEnterprise() {
    return (
        <EnterpriseLayout>
            <Container>
                <Text>Página MyStore Enterprise</Text>
            </Container>
        </EnterpriseLayout>
    );
}