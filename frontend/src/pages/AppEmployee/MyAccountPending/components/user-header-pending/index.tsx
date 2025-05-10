import { useLocation, useNavigate } from "react-router";
import { UserBtn, UserBtnArea, UserHeaderPendingContainer, UserImage, UserPendingInfo, UserTitleName } from "./styles";
interface HeaderProps {
    name: string;
    image: string;
}

export function UserHeaderPending({
    name, image
}: HeaderProps) {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <UserHeaderPendingContainer>
            <UserImage src={image} />
            <UserPendingInfo>
                <UserTitleName>
                    {name}
                </UserTitleName>

                {location.pathname === '/funcionario/pendente/detalhes' && (
                    <UserBtnArea>
                        <UserBtn
                            onClick={() => navigate('/funcionario/pendente/detalhes/editar')}
                        >
                            Editar
                        </UserBtn>
                        <UserBtn
                            onClick={() => navigate('/funcionario/pendente/detalhes/configurar')}
                        >
                            Configurar
                        </UserBtn>
                    </UserBtnArea>
                )}

                {location.pathname === '/funcionario/pendente/detalhes/editar' && (
                    <UserBtnArea>
                        <UserBtn
                            onClick={() => navigate('/funcionario/pendente/detalhes')}
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

                {location.pathname === '/funcionario/pendente/detalhes/configurar' && (
                    <UserBtnArea>
                        <UserBtn
                            onClick={() => navigate('/funcionario/pendente/detalhes')}
                        >
                            Detalhes
                        </UserBtn>
                            <UserBtn
                            onClick={() => navigate('/funcionario/pendente/detalhes/editar')}
                        >
                            Editar
                        </UserBtn>
                    </UserBtnArea>
                )}
                
            </UserPendingInfo>
        </UserHeaderPendingContainer>
    )
}