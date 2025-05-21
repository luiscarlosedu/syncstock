import { useLocation, useNavigate } from "react-router";
import { UserBtn, UserBtnArea, UserHeaderDetailContainer, UserImage, UserInfo, UserTitleName } from "./styles";
interface HeaderProps {
    name: string;
    image: string;
}

export function UserHeaderDetail({
    name, image
}: HeaderProps) {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <UserHeaderDetailContainer>
            <UserImage src={image} />
            <UserInfo>
                <UserTitleName>
                    {name}
                </UserTitleName>

                {location.pathname === '/funcionario/detalhes' && (
                    <UserBtnArea>
                        <UserBtn
                            onClick={() => navigate('/funcionario/detalhes/editar')}
                        >
                            Editar
                        </UserBtn>
                        <UserBtn
                            onClick={() => navigate('/funcionario/detalhes/configurar')}
                        >
                            Configurar
                        </UserBtn>
                    </UserBtnArea>
                )}

                {location.pathname === '/funcionario/detalhes/editar' && (
                    <UserBtnArea>
                        <UserBtn
                            onClick={() => navigate('/funcionario/detalhes')}
                        >
                            Detalhes
                        </UserBtn>
                            <UserBtn
                            onClick={() => navigate('/funcionario/detalhes/configurar')}
                        >
                            Configurar
                        </UserBtn>
                    </UserBtnArea>
                )}

                {location.pathname === '/funcionario/detalhes/configurar' && (
                    <UserBtnArea>
                        <UserBtn
                            onClick={() => navigate('/funcionario/detalhes')}
                        >
                            Detalhes
                        </UserBtn>
                            <UserBtn
                            onClick={() => navigate('/funcionario/detalhes/editar')}
                        >
                            Editar
                        </UserBtn>
                    </UserBtnArea>
                )}
                
            </UserInfo>
        </UserHeaderDetailContainer>
    )
}