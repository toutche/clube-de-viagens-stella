import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from "../pages/Dashboard"
import Wallet from "../pages/Wallet"
import Checkout from "../pages/Checkout"

const AuthStack = createNativeStackNavigator()

const AuthRoutes = () => {
    return (
        <AuthStack.Navigator screenOptions={screenOptions} initialRouteName={'Dashboard'}>
            <AuthStack.Screen name="Dashboard" component={Dashboard} />
            <AuthStack.Screen name="Checkout" component={Checkout} />
            <AuthStack.Screen name="Wallet" component={Wallet} />
        </AuthStack.Navigator>
    )
}

const screenOptions = {
    headerShown: false
}

export default AuthRoutes