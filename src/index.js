import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { AuthProvider } from "./contexts/auth";
import { CheckoutProvider } from "./contexts/checkout";
import Routes from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <CheckoutProvider>
        <NavigationContainer>
          <StatusBar backgroundColor={"transparent"} />
          <Routes />
        </NavigationContainer>
      </CheckoutProvider>
    </AuthProvider>
  );
};

export default App;
