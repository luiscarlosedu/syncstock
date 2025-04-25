import { useNavigate } from "react-router";
import { MyStoreHead, MyStoryHeadInfo, StoreImage, StoryBtn, StoryBtnArea, StoryTitleName } from "./styles";

import Image from '../../assets/syncstock-white.png';

export function MyStoreHeader() {
    const navigate = useNavigate();
    return (
        <>
            <MyStoreHead>
                <StoreImage src={Image} />
                <MyStoryHeadInfo>
                    <StoryTitleName>
                        SyncStock
                    </StoryTitleName>
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
                </MyStoryHeadInfo>
            </MyStoreHead>
        </>
    );
}