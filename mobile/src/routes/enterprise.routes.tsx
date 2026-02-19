import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeEnterprise from "../pages/AppEnterprise/Home";
import CategoriesEnterprise from "../pages/AppEnterprise/Categories";
import { Entypo, FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
import ProductsEnterprise from "../pages/AppEnterprise/Products";
import EmployeesEnterprise from "../pages/AppEnterprise/Employees";

export type EnterpriseTabRoutesList = {
    HomeEnterprise: undefined;
    CategoriesEnterprise: undefined;
    ProductsEnterprise: undefined;
    EmployeesEnterprise: undefined;
};

const Tab = createBottomTabNavigator<EnterpriseTabRoutesList>();

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
                tabBarActiveTintColor: '#1a1a1a',
                tabBarInactiveTintColor: '#888',
                tabBarIconStyle: {
                    marginTop: 5,
                },
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
                name="ProductsEnterprise"
                component={ProductsEnterprise}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <Ionicons name="pricetag" size={size} color={color} />
                    }
                }}
            />

            <Tab.Screen 
                name="EmployeesEnterprise"
                component={EmployeesEnterprise}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ color, size }) => {
                        return <FontAwesome5 name="users" size={size} color={color} />
                    }
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