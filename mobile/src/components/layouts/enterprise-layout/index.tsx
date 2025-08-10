import { ReactNode } from "react";
import { Container } from "./styles";
import { AppHeader } from "../../app-header";

interface EnterpriseLayoutProps {
    children: ReactNode;
}

export function EnterpriseLayout({ children }: EnterpriseLayoutProps) {
    return (
        <Container>
            <AppHeader />
            {children}
        </Container>
    );
}