import { useNavigate } from "react-router";
import { AboutBackgroundEnterprise, AboutContent, AboutContentContainer, AboutContentText, AboutFooter, AboutIconLink, AboutLeftContent, AboutLeftContentDescription, AboutLeftContentTitle, AboutLeftIconsArea, AboutOverlay, AboutSection, AboutSyncStock, AboutSyncStockLeft, AboutSyncStockRight, AboutTecnologiesTitle, AboutTecnologiesType, Container, DevLinks, DevLinksArea, OverlayButton, SyncStockLogo } from "./styles";

import { getByTecnology } from "./tecnlogies";

import SyncStockImage from '../../../assets/syncstock-no.png';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { TecnologiesCard } from "../../../components/tecnologies-card";

export default function AboutEmployee() {
    const navigate = useNavigate();

    return (
        <Container>
            <AboutContentContainer>
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
                                    onClick={() => navigate('/funcionario/home')}
                                >
                                    Utilizar a plataforma &rarr;
                                </OverlayButton>
                            </AboutOverlay>
                        </AboutSyncStockRight>
                    </AboutSyncStock>

                    <AboutContent>
                        <AboutContentText>
                            O <strong>SyncStock</strong> é uma plataforma de gerenciamento de estoque desenvolvida para otimizar o controle e a organização de produtos. Com uma interface simples e intuitiva, permite que empresas de todos os portes acompanhem suas entradas e saídas de forma prática e segura.
                        </AboutContentText>
                        <AboutContentText>
                            Atualmente, o <strong>SyncStock</strong> está em fase de desenvolvimento Full-Stack, utilizando tecnologias modernas no front-end e back-end para garantir uma solução robusta, ágil e eficiente.
                        </AboutContentText>
                    </AboutContent>

                    <AboutContent>
                        <AboutTecnologiesTitle>
                            Tecnologias usadas
                        </AboutTecnologiesTitle>
                        
                        <AboutTecnologiesType>Frontend</AboutTecnologiesType>
                        {getByTecnology("frontend").map((item) => (
                            <TecnologiesCard 
                                name={item.name}
                                Icon={item.icon}
                            />
                        ))}

                        <AboutTecnologiesType>Backend</AboutTecnologiesType>
                        {getByTecnology("backend").map((item) => (
                            <TecnologiesCard 
                                name={item.name}
                                Icon={item.icon}
                            />
                        ))}

                        <AboutTecnologiesType>Mobile</AboutTecnologiesType>
                        {getByTecnology("mobile").map((item) => (
                            <TecnologiesCard 
                                name={item.name}
                                Icon={item.icon}
                            />
                        ))}
                    </AboutContent>
                </AboutSection>
                <AboutFooter>
                    <p>Desenvolvido por <strong><a href="https://github.com/luiscarlosedu" target="_blank">Luís Eduardo</a></strong></p>

                    <DevLinksArea>
                        <DevLinks>
                            <a href="https://instagram.com/https.luisedu77" target="_blank"><FaInstagram size={20} /></a>
                        </DevLinks>
                        <DevLinks>
                            <a href="https://github.com/luiscarlosedu" target="_blank"><FaGithub size={20} /></a>
                        </DevLinks>
                        <DevLinks>
                            <a href="https://linkedin.com/in/luiscarlosedu/" target="_blank"><FaLinkedin size={20} /></a>
                        </DevLinks>
                    </DevLinksArea>
                </AboutFooter>
            </AboutContentContainer>
        </Container>
    );
}