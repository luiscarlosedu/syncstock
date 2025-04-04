import { AboutBackgroundEnterprise, AboutContentContainer, AboutSection, AboutSyncStock, AboutSyncStockLeft, AboutSyncStockRight, /* AboutTitle, AboutTitleContainer, */ Container, SyncStockLogo } from "./styles";

import SyncStockImage from '../../../assets/syncstock-no.png';

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
                        </AboutSyncStockLeft>
                        <AboutSyncStockRight>
                            awd
                        </AboutSyncStockRight>
                    </AboutSyncStock>
                </AboutSection>
            </AboutContentContainer>
        </Container>
    );
}