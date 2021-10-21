import React from "react"
import { createStackNavigator } from "@react-navigation/stack"

import Sign from "../pages/Sign"

import Intro from "../pages/Intro"
import SignIn from "../pages/Sign/SignIn"
import SignUp from "../pages/Sign/SignUp"
import Preferences from "../pages/Preferences"
import RecoverPassword from "../pages/Sign/RecoverPassword"
import TermsConditions from "../pages/TermsConditions"
import PrivacyPolicy from "../pages/PrivacyPolicy"
import ConfirmEmail from "../pages/Sign/ConfirmEmail"

const AppStack = createStackNavigator()

const AuthRoutes = () => (
    <AppStack.Navigator screenOptions={screenOptions} initialRouteName={'Intro'}>
        <AppStack.Screen name="Intro" component={Intro} />
        <AppStack.Screen name="Sign" component={Sign} />
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="RecoverPassword" component={RecoverPassword} />
        <AppStack.Screen name="ConfirmEmail" component={ConfirmEmail} />
        <AppStack.Screen name="Preferences" component={Preferences} />
        <AppStack.Screen name="TermsConditions" component={TermsConditions} />
        <AppStack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    </AppStack.Navigator>
)

const screenOptions = {
    headerShown: false
}

export default AuthRoutes