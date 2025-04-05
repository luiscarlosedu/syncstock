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
                                        href="https://youtube.com"
                                    >
                                        <FaGithub />
                                    </AboutIconLink>
                                    <AboutIconLink 
                                        href="https://youtube.com"
                                    >
                                        <FaInstagram />
                                    </AboutIconLink>
                                    <AboutIconLink 
                                        href="https://youtube.com"
                                    >
                                        <FaLinkedin />
                                    </AboutIconLink>
                                    <AboutIconLink 
                                        href="https://youtube.com"
                                    >
                                        <MdEmail size={24}  />
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