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
import { useNavigate } from "react-router";

interface HeaderProps {
    type: 'enterprise' | 'employee';
}

export function Header({ type }: HeaderProps) {
    const navigate = useNavigate();
    return (
        <Container>
            <HeaderLogo>
                <HeaderLogoImage src={ImageLogo} />
                <HeaderLogoTitle
                    onClick={() => navigate(type === 'enterprise' ? "/empresa/home" : "/funcionario")}
                >
                    SyncStock
                </HeaderLogoTitle>
            </HeaderLogo>

            {type === 'enterprise' ? (
                <MyEnterprise
                    onClick={() => navigate("/empresa/detalhes")}
                >
                    <MyEnterpriseText>
                        My Store
                    </MyEnterpriseText>
                    <MyEnterpriseImage src={ImageLogo} alt="Logo da empresa" />
                </MyEnterprise>
            ): (
                <MyEnterprise
                    onClick={() => navigate("/funcionario/detalhes")}
                >
                    <MyEnterpriseText>
                        My Account
                    </MyEnterpriseText>
                    <MyEnterpriseImage src="https://github.com/luiscarlosedu.png" alt="Logo da empresa" />
                </MyEnterprise>
            )}
        </Container>
    );
}