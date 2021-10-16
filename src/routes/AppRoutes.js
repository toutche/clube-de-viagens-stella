import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { TouchableOpacity, Text } from "react-native"

import Dashboard from "../pages/Dashboard"

import { useAuth } from "../contexts/auth"

const AuthStack = createStackNavigator()

const AuthRoutes = () => {
    const { signOut } = useAuth()

    return (
        <AuthStack.Navigator>
            <AuthStack.Screen name="Dashboard" component={Dashboard} />
        </AuthStack.Navigator>
    )
}

export default AuthRoutes