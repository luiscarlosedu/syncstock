import { AboutBackgroundEnterprise, AboutContentContainer, AboutIconLink, AboutLeftContent, AboutLeftContentDescription, AboutLeftContentTitle, AboutLeftIconsArea, AboutSection, AboutSyncStock, AboutSyncStockLeft, AboutSyncStockRight, /* AboutTitle, AboutTitleContainer, */ Container, SyncStockLogo } from "./styles";

import SyncStockImage from '../../../assets/syncstock-no.png';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function AboutEnterprise() {
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
                                <AboutLeftContentDescription>I develop some stuff here</AboutLeftContentDescription>
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
                            envie para mim um convite
                        </AboutSyncStockRight>
                    </AboutSyncStock>
                </AboutSection>
            </AboutContentContainer>
        </Container>
    );
}