import React, { createContext, useState, useContext, useEffect, useRef } from "react";
import { Alert } from "react-native";
import api from "../services/api";
import { getToken, logout } from "../services/auth";
import * as Notifications from "expo-notifications";

const AuthContext = createContext({});

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

export const AuthProvider = ({ children }) => {
  const initialRoute = useRef("Intro");

  const [user, setUser] = useState({});
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storagedUser = await getToken();

      if (storagedUser) verifyUser();
      setTimeout(() => setLoading(false), 1500);
      registerForPushNotificationsAsync();
    }
    //logout();
    loadStorage();
  }, []);

  async function registerForPushNotificationsAsync() {
    let token;

    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;

    if (Platform.OS === "android") {
      Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    api
      .post("notificacao-push/criar", { token })
      .then(res => {
        console.log(`Token enviado com sucesso: ${JSON.stringify(res.data)}`);
      })
      .catch(error => {
        console.log(`Erro ao enviar token: ${e}`);
      });
  }

  const verifyUser = navigation => {
    api
      .get("/usuario/me")
      .then(({ data }) => {
        setUser(data.message);
        if (data.status === "Token is Expired") {
          logout().then(() => {
            initialRoute.current = "Sign";
            Alert.alert("Aviso", "Seu token expirou, faça login novamente");
          });
        } else if (!data.message.date_activation) {
          navigation ? navigation.replace("ConfirmEmail") : (initialRoute.current = "ConfirmEmail");
        } else if (!data.message.address) {
          navigation ? navigation.replace("GetLocation") : (initialRoute.current = "GetLocation");
        } else
          api.get(`/questionario/listar`).then(res => {
            if (res.data.length > 0) setAuth(true);
            else
              navigation
                ? navigation.replace("Preferences", { user: data })
                : (initialRoute.current = "Preferences");
          });
      })
      .catch(e => console.log("me", e));
  };

  const updateUser = (update, navigation) => {
    api
      .put(`/usuario/atualizar`, update)
      .then(({ data }) => {
        if (data.message === "Usuario Atualizado") verifyUser(navigation);
      })
      .catch(e => console.log("updateUser", e));
  };

  const logoutAccount = async () => {
    await logout();
    setUser(null);
    setAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        auth,
        setAuth,
        initialRoute: initialRoute.current,
        loading,
        user,
        logoutAccount,
        updateUser,
        verifyUser,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
