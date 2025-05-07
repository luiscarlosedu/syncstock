import { useNavigate } from "react-router";
import { MyStoreHead, MyStoryHeadInfo, StoreImage, StoryBtn, StoryBtnArea, StoryTitleName } from "../../../components/my-store-header/styles";
import { PendingHeader } from "../../../components/pending-header";
import { Container, MyAccountContentContainer } from "./styles";

interface EmployeeProps {
    name: string;
    type: "employee" | "enterprise"
    employed: boolean;
    image: string;
}

export default function MyAccountPending() {
    const navigate = useNavigate();

    const funcionario: EmployeeProps = {
        name: 'Victor Shaoles',
        employed: true,
        type: 'employee',
        image: "https://github.com/victorrxyv.png"
    }
        
    return (
        <>
            <PendingHeader/>
            <Container>
                <MyAccountContentContainer>
                    <MyStoreHead>
                        <StoreImage src={funcionario.image} />
                        <MyStoryHeadInfo>
                            <StoryTitleName>
                                {funcionario.name}
                            </StoryTitleName>
        
                            {location.pathname === '/funcionario/pendente/detalhes' && (
                                <StoryBtnArea>
                                    <StoryBtn
                                        onClick={() => navigate('/funcionario/pendente/detalhes/editar')}
                                    >
                                        Editar
                                    </StoryBtn>
                                        <StoryBtn
                                        onClick={() => navigate('/funcionario/pendente/detalhes/configurar')}
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
                </MyAccountContentContainer>
            </Container>
        </>
    );
}