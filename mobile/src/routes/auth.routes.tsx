import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Select from "../pages/Select";
import RegisterEnterprise from "../pages/AuthEnterprise/RegisterEnterprise";
import LoginEnterprise from "../pages/AuthEnterprise/LoginEnterprise";

export type AuthRoutesList = {
    Select: undefined;
    LoginEnterprise: undefined; 
    RegisterEnterprise: undefined; 
    LoginEmployee: undefined; 
    RegisterEmployee: undefined; 
};

const AuthStack = createNativeStackNavigator<AuthRoutesList>();

export default function AuthRoutes() {
    return (
        <AuthStack.Navigator>
            <AuthStack.Screen 
                name="Select"
                component={Select}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen 
                name="LoginEnterprise"
                component={LoginEnterprise}
                options={{
                    headerShown: false,
                }}
            />

            <AuthStack.Screen 
                name="RegisterEnterprise"
                component={RegisterEnterprise}
                options={{
                    headerShown: false,
                }}
            />
        </AuthStack.Navigator>
    );
}