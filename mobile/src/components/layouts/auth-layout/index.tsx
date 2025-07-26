import { ReactNode } from "react";
import { Container, BackgroundImage, Content } from "./styles";
import { AuthHeader } from "../../auth-header";
const backgroundImage = require("../../../assets/enterprise1.jpg");

interface AuthLayoutProps {
    children: ReactNode;
}

export function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <Container
            showsVerticalScrollIndicator={false}
        > 
            <BackgroundImage source={backgroundImage} resizeMode="cover" />
            <Content>
              {children}
            </Content>
        </Container>
    );
}
