import { AboutBackgroundEnterprise, AboutContentContainer, /* AboutTitle, AboutTitleContainer, */ Container } from "./styles";

export default function AboutEnterprise() {
    return (
        <Container>
            <AboutContentContainer>
                {/* <AboutTitleContainer>
                    <AboutTitle>Sobre</AboutTitle>
                </AboutTitleContainer> */}
                <AboutBackgroundEnterprise />
            </AboutContentContainer>
        </Container>
    );
}