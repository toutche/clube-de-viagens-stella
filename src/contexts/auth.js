import React, { createContext, useState, useContext, useEffect, useRef } from "react";
import { Alert } from "react-native";
import api from "../services/api";
import { getToken, logout, setToken } from "../services/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const initialRoute = useRef("Intro");

  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorage() {
      const storagedUser = await getToken();

      if (storagedUser) verifyUser();
      setTimeout(() => setLoading(false), 1500);
    }
    //logout();
    loadStorage();
  }, []);

  const verifyUser = navigation => {
    api
      .get("/usuario/me")
      .then(({ data }) => {
        if (data.status === "Token is Expired") {
          logout().then(() => {
            initialRoute.current = "Sign";
            Alert.alert("Aviso", "Seu token expirou, faça login novamente");
          });
        } else if (!data.message.address)
          navigation ? navigation.replace("GetLocation") : (initialRoute.current = "GetLocation");
        else
          api.get(`/questionario/listar/${55}`).then(res => {
            //console.log("this", res.data);
            if (res.data.length >= 0) setUser(data.message);
            else
              navigation
                ? navigation.replace("Preferences")
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
    await logout().then(() => {
      setUser(null);
    });
  };

  return (
    <AuthContext.Provider
      value={{
        user,
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
