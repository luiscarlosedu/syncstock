import { useNavigate, useLocation } from "react-router";
import { MyStoreHead, MyStoryHeadInfo, StoreImage, StoryBtn, StoryBtnArea, StoryTitleName } from "./styles";

import Image from '../../assets/syncstock-white.png';

export function MyStoreHeader() {
    const navigate = useNavigate();
    const location = useLocation();

    // if(location.pathname)

    return (
        <>
            <MyStoreHead>
                <StoreImage src={Image} />
                <MyStoryHeadInfo>
                    <StoryTitleName>
                        SyncStock
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