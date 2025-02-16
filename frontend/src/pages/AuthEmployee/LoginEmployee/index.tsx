import {
    Container,
    LoginContent
} from "./styles";

import { AuthHeader } from "../../../components/auth-header";

export default function LoginEmployee() {
    return (
        <Container>
            <LoginContent>
                <AuthHeader />
            </LoginContent>
        </Container>
    );
};