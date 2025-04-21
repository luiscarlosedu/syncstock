import { ChangeInfo, ChangeInfoItem, Container, MyStoreContentContainer, MyStoreHead, MyStoryHeadInfo, StoreImage, StoryBtn, StoryBtnArea, StoryTitleName } from "./styles";

import Image from '../../../assets/syncstock-white.png';

export default function MyStoreEnterprise() {
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
                    <ChangeInfoItem>Informações</ChangeInfoItem>
                    <ChangeInfoItem>Status</ChangeInfoItem>
                    <ChangeInfoItem>Funcionários</ChangeInfoItem>
                </ChangeInfo>
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