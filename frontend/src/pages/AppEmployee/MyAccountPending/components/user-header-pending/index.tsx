import { useLocation, useNavigate } from "react-router";
import { UserBtn, UserBtnArea, UserHeaderPendingContainer, UserImage, UserPendingInfo, UserTitleName } from "./styles";

import { EmployeeProps } from "../..";

export function UserHeaderPending({
    name, image
}: EmployeeProps) {
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

                {location.pathname === '/empresa/detalhes/editar' && (
                    <UserBtnArea>
                        <UserBtn
                            onClick={() => navigate('/empresa/detalhes')}
                        >
                            Detalhes
                        </UserBtn>
                            <UserBtn
                            onClick={() => navigate('/empresa/detalhes/configurar')}
                        >
                            Configurar
                        </UserBtn>
                    </UserBtnArea>
                )}

                {location.pathname === '/empresa/detalhes/configurar' && (
                    <UserBtnArea>
                        <UserBtn
                            onClick={() => navigate('/empresa/detalhes')}
                        >
                            Detalhes
                        </UserBtn>
                            <UserBtn
                            onClick={() => navigate('/empresa/detalhes/editar')}
                        >
                            Editar
                        </UserBtn>
                    </UserBtnArea>
                )}
                
            </UserPendingInfo>
        </UserHeaderPendingContainer>
    )
}