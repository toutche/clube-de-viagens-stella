import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Preferences from "../pages/Preferences"
import Sign from "../pages/Sign"

const AppStack = createStackNavigator()

const AuthRoutes = () => (
    <AppStack.Navigator screenOptions={screenOptions}>
        <AppStack.Screen name="Sign" component={Sign} />
        <AppStack.Screen name="Preferences" component={Preferences} />
    </AppStack.Navigator>
)

const screenOptions = {
    headerShown: false
}

export default AuthRoutes