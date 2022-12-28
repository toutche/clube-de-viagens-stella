import React, { useEffect, useRef, useState } from "react";
import { NavigationContainer, useNavigationContainerRef } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import * as Font from "expo-font";
import * as Notifications from 'expo-notifications';
import * as SplashScreen from "expo-splash-screen";

import { AuthProvider } from "./contexts/auth";
import { CheckoutProvider } from "./contexts/checkout";
import Routes from "./routes";
import { FilterProvider } from "./contexts/filter";
import Calendar from "./components/Calendar";
import linking from "./utils/linking";

const App = () => {
  const routeNameRef = useRef();
  const navigationRef = useNavigationContainerRef();
  const [appIsReady, setAppIsReady] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

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

  useEffect(() => {

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      //console.log("Notification", notification)
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      let data = (response && response.notification.request.content.data) ? response.notification.request.content.data : null;
      //console.log("Listner", data);

      if (data != null) {
        let type = (data.type) ? data.type : null;
        switch (type) {
          case "package":
            navigationRef.navigate({
              na: "DetailsPackages",
              params: { id: data.id }
            });
            break;
          case "alert":
            navigationRef.navigate("Alert");
            break;
        }
      }
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <AuthProvider>
      <FilterProvider>
        <CheckoutProvider>
          <NavigationContainer
            linking={linking}
            onReady={() => {
              routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name;
            }}
          >
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
