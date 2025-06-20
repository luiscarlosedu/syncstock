import { Navigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { MyStoreHead, MyStoryHeadInfo, StoreImage, StoryTitleName } from "../../../../../components/my-store-header/styles";
import { EnterpriseData } from "../..";

interface Props {
    data: EnterpriseData;
}

export function MyEnterpriseHeader({data}: Props) {
    const { user } = useContext(AuthContext);

    if(!user) {
        return <Navigate to={"/"} replace />
    };

    return (
        <>
            <MyStoreHead>
                <StoreImage src={
                    data?.foto
                        ? `${import.meta.env.VITE_API_URL}/files/${data.foto}`
                        : `https://ui-avatars.com/api/?name=${encodeURIComponent(data.nome)}&background=202020&color=fff`
                } />
                <MyStoryHeadInfo>
                    <StoryTitleName>
                        {data.nome}
                    </StoryTitleName>
                    
                </MyStoryHeadInfo>
            </MyStoreHead>
        </>
    );
}