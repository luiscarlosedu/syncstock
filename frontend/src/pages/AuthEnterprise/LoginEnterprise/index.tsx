import {
    Container,
    LoginContent,
} from "./styles";

import { AuthHeader } from "../../../components/auth-header";

export default function LoginEnterprise() {
    return (
        <Container>
            <LoginContent>
                <AuthHeader />
            </LoginContent>
        </Container>
    );
};