import { Navigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../../../../../contexts/AuthContext";
import { MyStoreHead, MyStoryHeadInfo, StoreImage, StoryTitleName } from "../../../../../components/my-store-header/styles";

export function MyEnterpriseHeader() {
    const { user } = useContext(AuthContext);

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
                    
                </MyStoryHeadInfo>
            </MyStoreHead>
        </>
    );
}