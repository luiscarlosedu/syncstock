// Select.tsx
import { useNavigation } from "@react-navigation/native";
import { 
  SelectContent,
  Title,
  SubTitle,
  SelectContentText,
  SelectButton,
  SelectButtonArea,
  SelectContentTextContainer,
  SelectContentFooter,
  SelectFooterText,
  SelectLabel,
  SelectButtonText
} from "./styles";
import { Text } from "react-native";
import { AuthLayout } from "../../components/layouts/auth-layout";
import { AuthHeader } from "../../components/auth-header";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AuthRoutesList } from "../../routes/auth.routes";

type NavigationProps = NativeStackNavigationProp<AuthRoutesList, "Select">;

export default function Select() {
  const navigation = useNavigation<NavigationProps>();

  return (
    <AuthLayout>
        <AuthHeader />
        <SelectContent>
            <SelectContentText>
                <SelectContentTextContainer>
                    <Title>Bem vindo ao SyncStock!</Title>
                    <SubTitle>Gerencie seu estoque com nossa plataforma.</SubTitle>
                </SelectContentTextContainer>
                <SelectButtonArea>
                    <SelectLabel>Escolha uma maneira de acessar:</SelectLabel>
                    <SelectButton onPress={() => navigation.navigate("LoginEnterprise")}>
                        <SelectButtonText>Entrar como <Text style={{ fontWeight: 'bold' }}>Empresa</Text></SelectButtonText>
                    </SelectButton>
                    <SelectButton onPress={() => navigation.navigate("LoginEmployee")}>
                        <SelectButtonText>Entrar como <Text style={{ fontWeight: 'bold' }}>Funcionário</Text></SelectButtonText>
                    </SelectButton>
                </SelectButtonArea>
            </SelectContentText>
            <SelectContentFooter>
                <SelectFooterText>
                    Projeto FullStack com backend, frontend e mobile. O sistema permite que os administradores cadastrem suas empresas, gerenciem funcionários e acompanhem movimentações de estoque em tempo real.
                </SelectFooterText>
            </SelectContentFooter>
        </SelectContent>
    </AuthLayout>
  );
}
