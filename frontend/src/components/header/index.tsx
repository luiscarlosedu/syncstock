import { 
    Container,
    HeaderLogo,
    HeaderLogoImage,  
    HeaderLogoTitle,
    MyEnterprise,
    MyEnterpriseText,
    MyEnterpriseImage,
    MyContainer
} from "./styles";

import ImageLogo from '../../assets/syncstock-white.png';
import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

interface HeaderProps {
    type: 'enterprise' | 'employee';
}

export function Header({ type }: HeaderProps) {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    if (!user) {
        return;
    }

    return (
        <Container>
            <HeaderLogo>
                <HeaderLogoImage src={ImageLogo} />
                <HeaderLogoTitle
                    onClick={() => navigate(type === 'enterprise' ? "/empresa/home" : "/funcionario/home")}
                >
                    SyncStock
                </HeaderLogoTitle>
            </HeaderLogo>

            {type === 'enterprise' ? (
                <MyEnterprise
                    onClick={() => navigate("/empresa/detalhes")}
                >
                    <MyEnterpriseText>
                        Empresa
                    </MyEnterpriseText>
                    <MyEnterpriseImage 
                        src={
                            user.foto 
                                ? `http://localhost:3333/files/${user.foto}` 
                                : `https://ui-avatars.com/api/?name=${user.nome}&background=202020&color=fff`
                            } 
                        alt="Logo da empresa" 
                    />
                </MyEnterprise>
            ): (
                <MyEnterprise
                    onClick={() => navigate("/funcionario/detalhes")}
                >
                    <MyContainer>
                        <MyEnterpriseText>
                            Usuário
                        </MyEnterpriseText>
                    </MyContainer>
                    <MyEnterpriseImage 
                        src={
                            user.foto 
                                ? `${import.meta.env.VITE_API_URL}/files/${user.foto}`
                                : `https://ui-avatars.com/api/?name=${user.nome}&background=202020&color=fff`
                            } 
                        alt="Logo da empresa" 
                    />
                </MyEnterprise>
            )}
        </Container>
    );
}