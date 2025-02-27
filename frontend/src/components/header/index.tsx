import { 
    Container,
    HeaderLogo,
    HeaderLogoImage,  
    HeaderLogoTitle,
    MyEnterprise,
    MyEnterpriseText,
    MyEnterpriseImage
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

            <MyEnterprise>
                <MyEnterpriseText>
                    My Store
                </MyEnterpriseText>
                <MyEnterpriseImage src={ImageLogo} alt="" />
            </MyEnterprise>
        </Container>
    );
}