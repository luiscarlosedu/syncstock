import { ActivityIndicator, Text, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRoutesList } from "../../../routes/auth.routes";
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
    RegisterFooter,
    RegisterFooterText,
    RegisterFooterLink,
    UploadArea,
    UploadButton,
    UploadText,
    DeleteButton,
    PreviewImage
} from "./styles";
import { useState } from "react";

import * as ImagePicker from 'expo-image-picker';
import { Ionicons } from '@expo/vector-icons';

type NavigationProps = NativeStackNavigationProp<AuthRoutesList, "RegisterEmployee">;

export default function RegisterEmployee() {
    const navigation = useNavigation<NavigationProps>();
    const [imageUri, setImageUri] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ["images"],
            allowsEditing: true,
            aspect: [4, 4],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled) {
            setImageUri(result.assets[0].uri);
        };
    }

    return (
        <AuthLayout>
            <Container>
                <AuthHeader />

                <RegisterContent>
                    <RegisterContentText>
                        <RegisterTitle>Cadastrar Funcionário</RegisterTitle>
                        <RegisterSubTitle>Crie sua conta de funcionário agora mesmo!</RegisterSubTitle>
                    </RegisterContentText>

                    <RegisterForm>
                        <RegisterInputContainer>
                            <RegisterLabel>Nome</RegisterLabel>
                            <Input placeholder="Digite seu nome" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Email</RegisterLabel>
                            <Input placeholder="seuemail@gmail.com" keyboardType="email-address" />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Senha</RegisterLabel>
                            <Input placeholder="********" secureTextEntry />
                        </RegisterInputContainer>

                        <RegisterInputContainer>
                            <RegisterLabel>Imagem do Usuário</RegisterLabel>

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
                                        <UploadText>
                                            Selecionar imagem
                                        </UploadText>
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

                    <RegisterFooter>
                        <RegisterFooterText>
                            Já possui conta?{" "}
                            <RegisterFooterLink onPress={() => navigation.navigate("LoginEmployee")}>
                                Entrar
                            </RegisterFooterLink>
                        </RegisterFooterText>
                    </RegisterFooter>
                </RegisterContent>
            </Container>
        </AuthLayout>
    );
}
