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

interface HeaderProps {
    type: 'enterprise' | 'employee';
}

export function Header({ type }: HeaderProps) {
    return (
        <Container>
            <HeaderLogo>
                <HeaderLogoImage src={ImageLogo} />
                <HeaderLogoTitle>
                    SyncStock
                </HeaderLogoTitle>
            </HeaderLogo>

            {type === 'enterprise' ? (
                <MyEnterprise>
                    <MyEnterpriseText>
                        My Store
                    </MyEnterpriseText>
                    <MyEnterpriseImage src={ImageLogo} alt="" />
                </MyEnterprise>
            ): (
                <MyEnterprise>
                    <MyEnterpriseText>
                        My Account
                    </MyEnterpriseText>
                    <MyEnterpriseImage src={ImageLogo} alt="" />
                </MyEnterprise>
            )}
        </Container>
    );
}