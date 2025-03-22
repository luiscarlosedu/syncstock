import { FiUpload } from "react-icons/fi";
import { Container, ProductContentContainer, ProductsTitle, ProductsTitleAddContainer } from "../styles";
import { FormInput, FormInputContainer, FormInputLabel, FormInputLabelText, NewFileBtn, NewFileBtnIcon, NewFileField, NewFileInput, NewFileInputChildren, NewForm, NewFormContainer } from "./styles";

export default function NewProductEnterprise() {
    return (
        <Container>
            <ProductContentContainer>
                <ProductsTitleAddContainer>
                    <ProductsTitle>Adicionar Produtos</ProductsTitle>
                </ProductsTitleAddContainer>

                <NewFileField>
                    <NewFileBtn>
                        <NewFileBtnIcon>
                            <FiUpload size={30} />
                        </NewFileBtnIcon>
                        <NewFileInput>
                            <NewFileInputChildren type="file" />
                        </NewFileInput>
                    </NewFileBtn>

                    {/* demais coisas */}
                </NewFileField>

                <NewFormContainer>
                    <NewForm>
                        <FormInputContainer>
                            <FormInputLabel>
                                <FormInputLabelText>Nome</FormInputLabelText>
                            </FormInputLabel>
                            <FormInput 
    
                            />
                        </FormInputContainer>
                    </NewForm>
                </NewFormContainer>


            </ProductContentContainer>
        </Container>
    );
}

/*

<div className='new-file-field'>
                    <button className="new-file-btn">
                        <div className='new-file-btn-icon'>
                            <FiUpload className='new-file-btn-icon-children' size={ 30 } color='#FFF' />
                        </div>
                        <div className="new-file-btn-input">
                            <input
                            type="file"
                            accept='image/*'
                            onChange={handleFile}
                            />
                        </div>
                    </button>
                    {itemImage.map((item) => (
                        <div
                        key={item.uid}
                        className='new-file-item-image-container'
                        >
                            <button
                            className='new-file-item-image-delete'
                            onClick={() => handleDelete(item)}
                            >
                                <FaTrash />
                            </button>
                            <img
                            className='new-file-item-image'
                            src={item.previewUrl}
                            alt={item.name}
                            />
                        </div>
                    ))}
                </div>


                

*/

/*
    .new-file-field {
    width: 100%;
    background-color: #202020;
    border-radius: 8px;
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
}

.new-file-btn {
    width: 192px;
    height: 128px;
    border: 2px solid grey;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #404040;
    border: none;
    outline: none;
}

.new-file-btn-icon {
    position: absolute;
    cursor: pointer;
}

.new-file-btn-icon-children {
    cursor: pointer;
}

.new-file-btn-input {
    cursor: pointer;
}

.new-file-btn-input input {
    opacity: 0;
    cursor: pointer;
}

/*IMAGENS DA SEÇÃO NEW FILE*/

// .new-file-item-image-container {
//     width: 100%;
//     height: 128px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     position: relative;
// }

// .new-file-item-image {
//     width: 100%;
//     height: 128px;
//     border-radius: 5px;
//     object-fit: cover;
//     object-position: center;
// }

// .new-file-item-image-delete {
//     position: absolute;
//     cursor: pointer;
//     top: 0;
//     right: 0;
//     padding: 8px;
//     background-color: rgba(0, 0, 0, 0.784);
//     border-radius: 0px 8px 0px 0px;
//     border: none;
//     color: white;
//     outline: none;
//     transition: .3s;
// }

// .new-file-item-image-delete:hover {
//     background-color: #FF3131;
// }

// */