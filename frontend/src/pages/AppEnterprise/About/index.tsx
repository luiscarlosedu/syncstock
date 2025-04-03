import { AboutBackgroundEnterprise, AboutContentContainer, /* AboutTitle, AboutTitleContainer, */ Container } from "./styles";

import BackgroundImage from '../../../assets/enterprise-about.jpg';

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