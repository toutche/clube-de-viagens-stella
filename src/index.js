import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";

import { AuthProvider } from "./contexts/auth";
import Routes from "./routes";

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar backgroundColor={"transparent"} />
        <Routes />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
