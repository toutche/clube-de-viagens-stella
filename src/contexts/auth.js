import React, { createContext, useState, useEffect, useContext } from "react"
import { Alert } from "react-native";
import api from "../services/api";
import { getToken, logout, setToken } from "../services/auth";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(true)
    const [user, setUser] = useState({})
    const [initialRoute, setRoute] = useState('Intro')
    const [loading, setLoading] = useState(true)
    const [loadingApi, setLoadingApi] = useState(false)

    useEffect(() => {
        async function loadStorage() {
            const storagedUser = await getToken()
            if (storagedUser)
                verifyUser()
            setTimeout(() => setLoading(false), 1500)
        }
        loadStorage()
    }, [])

    const verifyUser = (navigation) => {
        api.get("/usuario/me").then(({ data }) => {
            if (data.status === "Token is Expired")
                logout().then(() => {
                    setRoute('Sign')
                    alert('Seu token expirou, faça login novamente')
                }).catch((e) => console.log(e))
            //else if (!data.message[0].address)
            //navigation ? navigation.replace('GetLocation') : setRoute('GetLocation')
            else
                api.get("/questionario/listar").then(({ data }) => {
                    if (data.length > 0)
                        setAuth(true)
                    else
                        navigation ? navigation.replace('Preferences') : setRoute('Preferences')
                })

            setTimeout(() => {
                if (data.status !== "Token is Expired")
                    setUser(data.message[0])
                setLoadingApi(false)
            }, 100)
        }).catch(e => console.log('me', e))
    }

    const signIn = async ({ email, password }, navigation) => {
        if (!loadingApi) {
            setLoadingApi(true)
            api.post("/login", { email, password }).then(res => {
                setToken(res.data.access_token).then(() => {
                    verifyUser(navigation)
                }).catch(e => console.log('setToken', e))
            }).catch(e => {
                alert('Email ou senha inválidos')
                console.log('SignIn', e)
                setLoadingApi(false)
            })
        }
    }

    const signUp = async ({ name, email, password, phone_number, image }, navigation) => {
        if (!loadingApi) {
            setLoadingApi(true)

            const { data } = await api.post('/cadastrar', {
                name,
                last_name: name,
                email,
                password,
                password_confirmation: password,
                phone_number,
                gender: 'm',
                accept_terms: 'Y',
                accept_privacy: 'Y',
                image
            })

            if (data.success) navigation.navigate('ConfirmEmail')
            else if (data.error) Alert.alert('Aviso', `Aconteceu um erro, tente novamente mais tarde  ${data.error.email}`)
            else Alert.alert('Erro', 'Tente novamente mais tarde')
            setLoadingApi(false)
        }
    }

    const activeAccount = (token, navigation) => {
        if (!loadingApi) {
            api.post("/ativa-conta", { token }).then(({ data }) => {
                if (data.message === "Conta ativada com sucesso.") {
                    alert('Sua conta foi ativada com sucesso!')
                    navigation.replace('SignIn')
                }
                else
                    alert(data.message)
            }).catch((error) => {
                console.log('activeAccount', error)
            })
        }
    }


    const updateUser = (update, navigation) => {
        if (!loadingApi) {
            setLoadingApi(true)
            api.put(`/usuario/atualizar`, update).then(({ data }) => {
                console.log(data, update)
                if (data.message === 'Usuario Atualizado')
                    verifyUser(navigation)
                else
                    setLoadingApi(false)
            }).catch((error) => {
                setLoadingApi(false)
                console.log('updateUser', error)
            })
        }
    }



    const questionary = async (questions, activities, navigation) => {
        if (!loadingApi) {
            setLoadingApi(true)

            const question = await api.post("/questionario/criar", {
                question_1: questions[0] || null,
                question_2: questions[1] || null,
                question_3: questions[2] || null,
                question_4: questions[3] || null,
                question_5: questions[4] || null,
            })

            let id = activities.filter(i => i.check === true)
            id = id.map((item) => item.id)
            const activity = await api.post("/interesses/criar", {
                id
            })

            if (activity.success && question.success)
                setAuth(true)

            setTimeout(() => setLoadingApi(false), 100)
        }
    }

    return (
        <AuthContext.Provider value={{
            auth,
            user,
            initialRoute,
            loading,
            loadingApi,
            user,
            signIn,
            signUp,
            activeAccount,
            updateUser,
            questionary
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}