import { Text } from "react-native";
import { Container } from "./styles";
import { EnterpriseLayout } from "../../../components/layouts/enterprise-layout";

export default function HomeEnterprise() {
    return (
        <EnterpriseLayout>
            <Container>
                <Text>Página Home Enterprise</Text>
            </Container>
        </EnterpriseLayout>
    )
}