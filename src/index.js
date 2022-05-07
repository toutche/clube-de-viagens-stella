import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { AuthProvider } from "./contexts/auth";
import { CheckoutProvider } from "./contexts/checkout";
import Routes from "./routes";
import { FilterProvider } from "./contexts/filter";

const App = () => {
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
          <NavigationContainer>
            <StatusBar backgroundColor={"transparent"} />
            <Routes />
          </NavigationContainer>
        </CheckoutProvider>
      </FilterProvider>
    </AuthProvider>
  );
};

export default App;
