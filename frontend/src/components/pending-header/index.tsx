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
import { Navigate, useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function PendingHeader() {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);

    if(!user) {
        return <Navigate to={"/"} replace />
    }

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
                <MyEnterpriseImage  
                    src={
                        user?.foto === undefined
                        ? `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nome)}&background=202020&color=fff`
                        : user?.foto
                    }
                />
            </MyEnterprise>
        </Container>
    );
}