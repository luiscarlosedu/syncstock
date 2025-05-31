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

export function PendingHeader() {
    const navigate = useNavigate();
    return (
        <Container>
            <HeaderLogo>
                <HeaderLogoImage src={ImageLogo} />
                <HeaderLogoTitle
                    onClick={() => navigate("/funcionario/pendente")}
                >
                    SyncStock
                </HeaderLogoTitle>
            </HeaderLogo>
            <MyEnterprise
                onClick={() => navigate("/funcionario/pendente/detalhes")}
            >
                <MyEnterpriseText>
                    My Account
                </MyEnterpriseText>
                <MyEnterpriseImage src="https://github.com/luiscarlosedu.png" alt="Logo da empresa" />
            </MyEnterprise>
        </Container>
    );
}