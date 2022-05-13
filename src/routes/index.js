import React, { useEffect } from "react";

import AuthRoutes from "./AuthRoutes";
import AppRoutes from "./AppRoutes";

import { useAuth } from "../contexts/auth";
import { Image, LogBox, View } from "react-native";
import Copyright from "../components/Copyright";
import ShareModal from "../components/ShareModal";

const Routes = () => {
  const { auth, user, loading } = useAuth();

  useEffect(() => {
    LogBox.ignoreLogs(["VirtualizedLists should never be nested"]);
  }, []);

  if (loading)
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#e10015",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: 20,
        }}>
        <Image
          fadeDuration={500}
          source={require("../../assets/splash.jpg")}
          resizeMode={"contain"}
          style={{
            flex: 0.99,
          }}
        />
        <Copyright
          display={1}
          containerStyle={{
            position: "absolute",
            bottom: 0,
          }}
        />
      </View>
    );

  return auth && user?.email_verified_at ?
    <>
      <ShareModal />
      <AppRoutes />
    </>
    : <AuthRoutes />;
};

export default Routes;
