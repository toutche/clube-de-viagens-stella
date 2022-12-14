import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { useAuth } from "../contexts/auth";

import Intro from "../pages/Intro";
import Sign from "../pages/Sign";
import SignIn from "../pages/Sign/SignIn";
import SignUp from "../pages/Sign/SignUp";
import Preferences from "../pages/Preferences";
import RecoverPassword from "../pages/Sign/RecoverPassword";
import TermsConditions from "../pages/TermsConditions";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import ConfirmEmail from "../pages/Sign/ConfirmEmail";
import GetLocation from "../pages/Sign/GetLocation";
import VideoScreen from "../pages/VideoScreen";

const AppStack = createNativeStackNavigator();

const AuthRoutes = () => {
  const { initialRoute } = useAuth();

  function getActiveRouteName(navigationState) {
    if (!navigationState) return null;
    const route = navigationState.routes[navigationState.index];
    // Parse the nested navigators
    if (route.routes) return getActiveRouteName(route);
    return route.routeName;
  }

  return (
    <>
      <AppStack.Navigator
        onNavigationStateChange={(prevState, currentState) => {
          console.log(prevState, currentState);
        }}
        screenOptions={screenOptions}
        initialRouteName={initialRoute}>
        <AppStack.Screen name='Intro' component={Intro} />
        <AppStack.Screen name='Sign' component={Sign} />
        <AppStack.Screen name='SignIn' component={SignIn} />
        <AppStack.Screen name='SignUp' component={SignUp} />
        <AppStack.Screen name='RecoverPassword' component={RecoverPassword} />
        <AppStack.Screen name='ConfirmEmail' component={ConfirmEmail} />
        <AppStack.Screen name='TermsConditions' component={TermsConditions} />
        <AppStack.Screen name='PrivacyPolicy' component={PrivacyPolicy} />
        <AppStack.Screen name='GetLocation' component={GetLocation} />
        <AppStack.Screen name='Preferences' component={Preferences} />
        <AppStack.Screen name='VideoScreen' component={VideoScreen} />
      </AppStack.Navigator>
    </>
  );
};

const screenOptions = {
  headerShown: false,
};

export default AuthRoutes;
