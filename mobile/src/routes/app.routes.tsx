import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Select from "../pages/Select";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

export type AppRoutesList = {
    Select: undefined;
    LoginEnterprise: undefined; 
    RegisterEnterprise: undefined; 
    LoginEmployee: undefined; 
    RegisterEmployee: undefined; 
};

const AppTabs = createBottomTabNavigator<AppRoutesList>();

export default function AppRoutes() {
    return (
        <AppTabs.Navigator>
            <AppTabs.Screen 
                name="Select"
                component={Select}
            />
        </AppTabs.Navigator>
    );
}