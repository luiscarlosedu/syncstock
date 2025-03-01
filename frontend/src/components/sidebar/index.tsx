import { Container } from "./styles";

interface SideBarProps {
    type: "enterprise" | "employee";
}

export function SideBar({ type }: SideBarProps) {
    return (
        <Container>
            {type === 'enterprise' ? (
                <p>Sidebar enterprise</p>
            ): (
                <p>Sidebar employee</p>
            )}
        </Container>
    );
};