import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeEnterprise from "../pages/AppEnterprise/Home";
import HomeEmployee from "../pages/AppEmployee/Home";

type TabRoutesList = {
    HomeEmployee: undefined;
    // ProductsEnterprise: undefined;
    // demais rotas
}

const Tab = createBottomTabNavigator<TabRoutesList>();

export default function EmployeeRoutes() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="HomeEmployee"
                component={HomeEmployee}
            />
        </Tab.Navigator>
    );
}