import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeEnterprise from "../pages/AppEnterprise/Home";
import CategoriesEnterprise from "../pages/AppEnterprise/Categories";
import Feather from '@expo/vector-icons/Feather';
import { MaterialIcons } from "@expo/vector-icons";

type TabRoutesList = {
    HomeEnterprise: undefined;
    CategoriesEnterprise: undefined;
    // ProductsEnterprise: undefined;
    // demais rotas
}

const Tab = createBottomTabNavigator<TabRoutesList>();

export default function EnterpriseRoutes() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    backgroundColor: '#e7e7e7',
                    borderTopWidth: 0,
                },
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen 
                name="HomeEnterprise"
                component={HomeEnterprise}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <Feather name="home" color={color} size={size} />
                    },
                }}
            />

            <Tab.Screen 
                name="CategoriesEnterprise"
                component={CategoriesEnterprise}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <MaterialIcons name="category" color={color} size={size} />
                    },
                }}
            />
        </Tab.Navigator>
    );
}