import { useNavigate, useLocation, Navigate } from "react-router";
import { MyStoreHead, MyStoryHeadInfo, StoreImage, StoryBtn, StoryBtnArea, StoryTitleName } from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export function MyStoreHeader() {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    if(!user) {
        return <Navigate to={"/"} replace />
    };

    return (
        <>
            <MyStoreHead>
                <StoreImage src={
                    user?.foto
                        ? `${import.meta.env.VITE_API_URL}/files/${user.foto}`
                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(user.nome)}&background=202020&color=fff`
                } />
                <MyStoryHeadInfo>
                    <StoryTitleName>
                        {user.nome}
                    </StoryTitleName>

                    {location.pathname === '/empresa/detalhes' && (
                        <StoryBtnArea>
                            <StoryBtn
                                onClick={() => navigate('/empresa/detalhes/editar')}
                            >
                                Editar
                            </StoryBtn>
                                <StoryBtn
                                onClick={() => navigate('/empresa/detalhes/configurar')}
                            >
                                Configurar
                            </StoryBtn>
                        </StoryBtnArea>
                    )}

                    {location.pathname === '/empresa/detalhes/editar' && (
                        <StoryBtnArea>
                            <StoryBtn
                                onClick={() => navigate('/empresa/detalhes')}
                            >
                                Detalhes
                            </StoryBtn>
                                <StoryBtn
                                onClick={() => navigate('/empresa/detalhes/configurar')}
                            >
                                Configurar
                            </StoryBtn>
                        </StoryBtnArea>
                    )}

                    {location.pathname === '/empresa/detalhes/configurar' && (
                        <StoryBtnArea>
                            <StoryBtn
                                onClick={() => navigate('/empresa/detalhes')}
                            >
                                Detalhes
                            </StoryBtn>
                                <StoryBtn
                                onClick={() => navigate('/empresa/detalhes/editar')}
                            >
                                Editar
                            </StoryBtn>
                        </StoryBtnArea>
                    )}
                    
                </MyStoryHeadInfo>
            </MyStoreHead>
        </>
    );
}