import { 
    Container,
    HeaderLogo,
    HeaderLogoImage,  
    HeaderLogoTitle
} from "./styles";

import ImageLogo from '../../assets/syncstock-white.png';

export function Header() {
    return (
        <Container>
            <HeaderLogo>
                <HeaderLogoImage src={ImageLogo} />
                <HeaderLogoTitle>
                    SyncStock
                </HeaderLogoTitle>
            </HeaderLogo>
        </Container>
    );
}