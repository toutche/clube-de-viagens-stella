import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Dashboard from "../pages/Dashboard"
import Wallet from "../pages/Wallet"
import Checkout from "../pages/Checkout"
import Details from "../pages/Details";
import Contact from "../pages/Contact";
import FinishHidePlan from "../pages/FinishHidePlan";
import PaymentHistory from "../pages/PaymentHistory";
import Scheduling from "../pages/Scheduling";
import ContractedPackages from "../pages/ContractedPackages";
import DetailsPackages from "../pages/DetailsPackages";

const AuthStack = createNativeStackNavigator()

const AuthRoutes = () => {
    return (
        <AuthStack.Navigator screenOptions={screenOptions} initialRouteName={'Scheduling'}>
            <AuthStack.Screen name="Dashboard" component={Dashboard} />
            <AuthStack.Screen name="Details" component={Details} />
            <AuthStack.Screen name="Checkout" component={Checkout} />
            <AuthStack.Screen name="Wallet" component={Wallet} />
            <AuthStack.Screen name="ContractedPackages" component={ContractedPackages} />
            <AuthStack.Screen name="DetailsPackages" component={DetailsPackages} />
            <AuthStack.Screen name="PaymentHistory" component={PaymentHistory} />
            <AuthStack.Screen name="FinishHidePlan" component={FinishHidePlan} />
            <AuthStack.Screen name="Scheduling" component={Scheduling} />
            <AuthStack.Screen name="Contact" component={Contact} />
        </AuthStack.Navigator>
    )
}

const screenOptions = {
    headerShown: false
}

export default AuthRoutes