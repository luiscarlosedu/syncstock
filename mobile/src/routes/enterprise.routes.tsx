import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeEnterprise from "../pages/AppEnterprise/Home";
import CategoriesEnterprise from "../pages/AppEnterprise/Categories";
import { Entypo, MaterialIcons } from "@expo/vector-icons";

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
                        return <Entypo name="home" size={size} color={color} />
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