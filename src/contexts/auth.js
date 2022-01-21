import React, { createContext, useState, useContext, useEffect, useRef } from "react";
import { Alert } from "react-native";
import api from "../services/api";
import { getToken, logout, setToken } from "../services/auth";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const initialRoute = useRef("Intro");

  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState({});

  const [loading, setLoading] = useState(true);
  const [loadingApi, setLoadingApi] = useState(false);

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
        if (data.status === "Token is Expired")
          logout()
            .then(() => {
              initialRoute.current = "Sign";
              Alert.alert("Aviso", "Seu token expirou, faça login novamente");
            })
            .catch(e => console.log(e));
        else if (!data.message.address)
          navigation ? navigation.replace("GetLocation") : (initialRoute.current = "GetLocation");
        else
          api.get("/questionario/listar").then(res => {
            //console.log("this", res.data);
            if (res.data.length >= 0) setAuth(true);
            else
              navigation
                ? navigation.replace("Preferences")
                : (initialRoute.current = "Preferences");
          });

        setUser(data.message);
        setLoadingApi(false);
      })
      .catch(e => console.log("me", e));
  };

  const signIn = ({ email, password }, navigation) => {
    setLoadingApi(true);

    api
      .post("/login", { email, password })
      .then(({ data }) => {
        setToken(data.access_token)
          .then(() => {
            verifyUser(navigation);
          })
          .catch(e => console.log("setToken", e));
      })
      .catch(e => {
        alert("Email ou senha inválidos");
        setLoadingApi(false);
      });
  };

  const signUp = async ({ name, email, password, phone_number, image }, navigation) => {
    setLoadingApi(true);

    const { data } = await api.post("/cadastrar", {
      name,
      last_name: name,
      email,
      password,
      password_confirmation: password,
      phone_number,
      gender: "m",
      accept_terms: "Y",
      accept_privacy: "Y",
      image,
    });

    if (data.success) navigation.navigate("ConfirmEmail");
    else if (data.error) Alert.alert("Aviso", `Aconteceu um erro, tente novamente mais tarde`);
    else Alert.alert("Erro", "Tente novamente mais tarde");

    setLoadingApi(false);
  };

  const activeAccount = (token, navigation) => {
    api
      .post("/ativa-conta", { token })
      .then(({ data }) => {
        if (data.message === "Conta ativada com sucesso.") {
          Alert.alert("Aviso", "Sua conta foi ativada com sucesso!");
          navigation.replace("SignIn");
        } else Alert.alert("Erro", data.message);
      })
      .catch(e => console.log("activeAccount", e));
  };

  const updateUser = (update, navigation) => {
    setLoadingApi(true);
    api
      .put(`/usuario/atualizar`, update)
      .then(({ data }) => {
        console.log(data, update);
        if (data.message === "Usuario Atualizado") verifyUser(navigation);
        else setLoadingApi(false);
      })
      .catch(e => {
        setLoadingApi(false);
        console.log("updateUser", e);
      });
  };

  const questionary = async (questions, activities) => {
    setLoadingApi(true);

    const question = await api.post("/questionario/criar", {
      question_1: questions[0] || null,
      question_2: questions[1] || null,
      question_3: questions[2] || null,
      question_4: questions[3] || null,
      question_5: questions[4] || null,
    });

    let id = activities.filter(i => i.check === true);
    id = id.map(item => item.id);

    const activity = await api.post("/interesses/criar", {
      id,
    });

    if (activity.data && question.data) setAuth(true);
    setLoadingApi(false);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        user,
        initialRoute: initialRoute.current,
        loading,
        loadingApi,
        user,
        signIn,
        signUp,
        activeAccount,
        updateUser,
        questionary,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  return context;
}
