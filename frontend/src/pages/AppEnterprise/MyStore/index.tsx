import { useState } from "react";
import { ChangeInfo, ChangeInfoItem, Container, MyStoreContentContainer, MyStoreHead, MyStoryHeadInfo, StoreImage, StoryBtn, StoryBtnArea, StoryTitleName } from "./styles";
import Image from '../../../assets/syncstock-white.png';
import { EnterpriseInfo } from "./EnterpriseInfo";
import { EnterpriseStatus } from "./EntepriseStatus";
import { EnterpriseEmployees } from "./EnterpriseEmployees";

export default function MyStoreEnterprise() {
    const [activeTab, setActiveTab] = useState("info");

    return (
        <Container>
            <MyStoreContentContainer>
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

                <ChangeInfo>
                    <ChangeInfoItem
                        className={activeTab === 'info' ? 'active' : ''}
                        onClick={() => setActiveTab('info')}
                    >
                        Informações
                    </ChangeInfoItem>
                    <ChangeInfoItem
                        className={activeTab === 'status' ? 'active' : ''}
                        onClick={() => setActiveTab('status')}
                    >
                        Status
                    </ChangeInfoItem>
                    <ChangeInfoItem
                        className={activeTab === 'employees' ? 'active' : ''}
                        onClick={() => setActiveTab('employees')}
                    >
                        Funcionários
                    </ChangeInfoItem>
                </ChangeInfo>

                {activeTab === 'info' && <EnterpriseInfo/>}
                {activeTab === 'status' && <EnterpriseStatus/>}
                {activeTab === 'employees' && <EnterpriseEmployees/>}
                
            </MyStoreContentContainer>
        </Container>
    );
};

/*
model Empresa {
  id String @id @default(uuid())
  nome String
  cnpj String @unique
  email String @unique
  senha String
  foto String?
  endereco String?
  telefone String?
  createdAt DateTime? @default(now())
  updatedAt DateTime @updatedAt

  @@map("empresas")
  funcionarios Funcionario[] 
  categorias Categoria[]
  produtos Produto[]
}
*/