import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Select from "../pages/Select";

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
        </AuthStack.Navigator>
    );
}