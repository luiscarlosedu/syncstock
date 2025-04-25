import { MyStoreHead, MyStoryHeadInfo, StoreImage, StoryBtn, StoryBtnArea, StoryTitleName } from "./styles";

import Image from '../../assets/syncstock-white.png';

export function MyStoreHeader() {
    return (
        <>
            <MyStoreHead>
                <StoreImage src={Image} />
                <MyStoryHeadInfo>
                    <StoryTitleName>
                        SyncStock
                    </StoryTitleName>
                    <StoryBtnArea>
                        <StoryBtn>Editar</StoryBtn>
                        <StoryBtn>Configurar</StoryBtn>
                    </StoryBtnArea>
                </MyStoryHeadInfo>
            </MyStoreHead>
        </>
    );
}