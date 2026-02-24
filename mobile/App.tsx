import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";  // 👈 muda aqui
import Routes from "./src/routes";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Routes />
    </NavigationContainer>
  );
}