import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { AuthProvider } from "./contexts/auth";
import { CheckoutProvider } from "./contexts/checkout";
import Routes from "./routes";
import { FilterProvider } from "./contexts/filter";
import Calendar from "./components/Calendar";
import * as Analytics from "expo-firebase-analytics";

const App = () => {
  const routeNameRef = useRef();
  const navigationRef = useNavigationContainerRef();
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();

        await Font.loadAsync({
          Montserrat: require("../assets/fonts/Montserrat/Montserrat-Regular.otf"),

          "Montserrat-Bold": {
            uri: require("../assets/fonts/Montserrat/Montserrat-Bold.otf"),
            display: Font.FontDisplay.FALLBACK,
          },
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      }
    })();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <AuthProvider>
      <FilterProvider>
        <CheckoutProvider>
          <NavigationContainer
            ref={navigationRef}
            onReady={() => {
              routeNameRef.current = navigationRef?.getCurrentRoute()?.name;
            }}
            onStateChange={async () => {
              const previousRouteName = routeNameRef.current;
              const currentRouteName = navigationRef.getCurrentRoute().name;

              if (previousRouteName !== currentRouteName) {
                // The line below uses the expo-firebase-analytics tracker
                // https://docs.expo.io/versions/latest/sdk/firebase-analytics/
                // Change this line to use another Mobile analytics SDK
                await Analytics.logEvent("screen_view", {
                  currentScreen: currentRouteName,
                });
              }

              // Save the current route name for later comparison
              routeNameRef.current = currentRouteName;
            }}>
            <Calendar />
            <StatusBar backgroundColor={"transparent"} />
            <Routes />
          </NavigationContainer>
        </CheckoutProvider>
      </FilterProvider>
    </AuthProvider>
  );
};

export default App;
