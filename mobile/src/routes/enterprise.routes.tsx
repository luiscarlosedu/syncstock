import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeEnterprise from "../pages/AppEnterprise/Home";
import CategoriesEnterprise from "../pages/AppEnterprise/Categories";

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
                    backgroundColor: '#FFFFFF',
                    borderTopWidth: 1,
                },
            }}
        >
            <Tab.Screen 
                name="HomeEnterprise"
                component={HomeEnterprise}
                options={{
                    headerShown: false
                }}
            />

            <Tab.Screen 
                name="CategoriesEnterprise"
                component={CategoriesEnterprise}
                options={{
                    headerShown: false
                }}
            />
        </Tab.Navigator>
    );
}