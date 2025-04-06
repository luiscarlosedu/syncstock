import { useNavigate } from "react-router";
import { AboutBackgroundEnterprise, AboutContentContainer, AboutIconLink, AboutLeftContent, AboutLeftContentDescription, AboutLeftContentTitle, AboutLeftIconsArea, AboutOverlay, AboutSection, AboutSyncStock, AboutSyncStockLeft, AboutSyncStockRight, /* AboutTitle, AboutTitleContainer, */ Container, OverlayButton, SyncStockLogo } from "./styles";

import SyncStockImage from '../../../assets/syncstock-no.png';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function AboutEnterprise() {
    const navigate = useNavigate();
    return (
        <Container>
            <AboutContentContainer>
                {/* <AboutTitleContainer>
                    <AboutTitle>Sobre</AboutTitle>
                </AboutTitleContainer> */}
                <AboutBackgroundEnterprise />

                <AboutSection>
                    <AboutSyncStock>
                        <AboutSyncStockLeft>
                            <SyncStockLogo src={SyncStockImage} />
                            <AboutLeftContent>
                                <AboutLeftContentTitle>
                                    SyncStock
                                </AboutLeftContentTitle>
                                <AboutLeftContentDescription>Sistema de Gerenciamento de Estoque</AboutLeftContentDescription>
                                <AboutLeftIconsArea>
                                    <AboutIconLink 
                                        href="https://www.github.com/luiscarlosedu"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaGithub />
                                    </AboutIconLink>
                                    <AboutIconLink
                                        href="https://www.instagram.com/https.luisedu77"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram />
                                    </AboutIconLink>
                                    <AboutIconLink 
                                        href="https://www.linkedin.com/in/luiscarlosedu/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <FaLinkedin />
                                    </AboutIconLink>
                                </AboutLeftIconsArea>
                            </AboutLeftContent>
                        </AboutSyncStockLeft>
                        <AboutSyncStockRight>
                            <AboutOverlay>
                                <OverlayButton
                                    onClick={() => navigate('/empresa/home')}
                                >
                                    Utilizar a plataforma &rarr;
                                </OverlayButton>
                            </AboutOverlay>
                        </AboutSyncStockRight>
                    </AboutSyncStock>
                </AboutSection>
            </AboutContentContainer>
        </Container>
    );
}