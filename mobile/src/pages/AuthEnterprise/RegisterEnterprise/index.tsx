import { ActivityIndicator, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRoutesList } from "../../../routes/auth.routes";
import { useState } from "react";
import { AuthLayout } from "../../../components/layouts/auth-layout";
import { AuthHeader } from "../../../components/auth-header";
import {
    Container,
    RegisterContent,
    RegisterContentText,
    RegisterTitle,
    RegisterSubTitle,
    RegisterForm,
    RegisterInputContainer,
    RegisterLabel,
    Input,
    RegisterFormSubmit,
    HorizontalRow,
    Hr,
    HorizontalRowText,
    RegisterFooter,
    RegisterFooterText,
    RegisterFooterLink,
    UploadButton,
    UploadText,
    DeleteButton,
    PreviewImage,
    UploadArea
} from "./styles";

import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from  '@expo/vector-icons';

type NavigationProps = NativeStackNavigationProp<AuthRoutesList, "RegisterEnterprise">;

export default function RegisterEnterprise() {
    const navigation = useNavigation<NavigationProps>();
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const pickImage = async () => {

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        };
    };

    return (
        <AuthLayout>
            <Container>
                <AuthHeader />
                <RegisterContent>
                    <RegisterContentText>
                        <RegisterTitle>Cadastro de Empresa</RegisterTitle>
                        <RegisterSubTitle>Crie uma conta para sua empresa</RegisterSubTitle>
                    </RegisterContentText>

                    <RegisterForm>
                        <RegisterInputContainer>
                            <RegisterLabel>Nome da Empresa</RegisterLabel>
                            <Input placeholder="Nome" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Email</RegisterLabel>
                            <Input placeholder="empresa@email.com" keyboardType="email-address" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>CNPJ</RegisterLabel>
                            <Input placeholder="12.345.678/0001-90" keyboardType="numeric" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Senha</RegisterLabel>
                            <Input placeholder="***************" secureTextEntry />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Endereço</RegisterLabel>
                            <Input placeholder="Rua Exemplo, 123" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Telefone</RegisterLabel>
                            <Input placeholder="(99) 99999-9999" keyboardType="phone-pad" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Imagem da Empresa</RegisterLabel>

                            <UploadArea>
                                {!imageUri ? (
                                    <UploadButton
                                        onPress={pickImage}
                                    >
                                        <Ionicons
                                            name="cloud-upload-outline"
                                            size={22}
                                            color="#121212"
                                        />
                                        <UploadText>Selecionar imagem</UploadText>
                                    </UploadButton>
                                ): (
                                    <>
                                        <DeleteButton
                                            onPress={() => setImageUri(null)}
                                        >
                                            <Ionicons
                                                name="trash"
                                                size={18}
                                                color={"#fff"}
                                            />
                                        </DeleteButton>
                                        <PreviewImage
                                            source={{
                                                uri: imageUri
                                            }}
                                            resizeMode="cover"
                                        />
                                    </>
                                )}
                            </UploadArea>

                        </RegisterInputContainer>

                        <RegisterFormSubmit disabled={loading}>
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text style={{ color: "#fff" }}>Cadastrar</Text>
                            )}
                        </RegisterFormSubmit>
                    </RegisterForm>

                    <HorizontalRow>
                        <Hr />
                        <HorizontalRowText>ou</HorizontalRowText>
                        <Hr />
                    </HorizontalRow>

                    <RegisterFooter>
                        <RegisterFooterText>
                            Já possui uma conta?{" "}
                            <RegisterFooterLink onPress={() => navigation.navigate("LoginEnterprise")}>
                                Entre agora!
                            </RegisterFooterLink>
                        </RegisterFooterText>
                    </RegisterFooter>
                </RegisterContent>
            </Container>
        </AuthLayout>
    );
}