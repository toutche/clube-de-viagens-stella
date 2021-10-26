import React, { createContext, useState, useEffect, useContext } from "react"
import api from "../services/api";
import { getToken, logout, setToken } from "../services/auth";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(false)
    const [user, setUser] = useState({})
    const [initialRoute, setRoute] = useState('Intro')
    const [loading, setLoading] = useState(true)
    const [loadingApi, setLoadingApi] = useState(false)

    useEffect(() => {
        async function loadStorage() {
            const storagedUser = await getToken()
            console.log('token', storagedUser)
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
                    alert('Seu token expirou, faça login novamente')
                }).catch((e) => console.log(e))
            else if (data.message[0].accept_terms !== 'Y')
                navigation ? navigation.replace('TermsConditions') : setRoute('TermsConditions')
            //else if (data.message[0].accept_privacy !== 'Y')
            //  navigation ? navigation.replace('PrivacyPolicy') : setRoute('PrivacyPolicy')
            else if (!data.message[0].address)
                navigation ? navigation.replace('GetLocation') : setRoute('GetLocation')
            else
                api.get("/questionario/listar").then(({ data }) => {
                    if (data.length > 0)
                        setAuth(true)
                    else
                        navigation ? navigation.replace('Preferences') : setRoute('Preferences')
                })

            setTimeout(() => {
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
                console.log(e)
                setLoadingApi(false)
            })
        }
    }

    const signUp = ({ name, email, password, phone_number, image }, navigation) => {
        if (!loadingApi) {
            setLoadingApi(true)
            api.post("/cadastrar", {
                name,
                last_name: name,
                email,
                password,
                password_confirmation: password,
                phone_number,
                gender: "m",
                image
            }).then(({ data }) => {
                console.log('signUp', data.success)
                if (data.success)
                    navigation.replace('ConfirmEmail')
                setTimeout(() => setLoadingApi(false), 100)
            }).catch((error) => {
                setLoadingApi(false)
                console.log('e', error)
            })
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
                console.log('e', error)
            })
        }
    }


    const updateUser = (update, navigation) => {
        api.get("/usuario/me").then(({ data }) => {
            let id = data.message[0].id
            if (!loadingApi) {
                setLoadingApi(true)
                api.put(`/usuario/${id}/atualizar`, update).then(({ data }) => {
                    console.log(data, update)
                    if (data.message === 'Usuario Atualizado')
                        verifyUser(navigation)
                    else
                        setLoadingApi(false)
                }).catch((error) => {
                    setLoadingApi(false)
                    console.log('e', error)
                })
            }
        })
    }

    const questionary = async (questions, activities, navigation) => {
        if (!loadingApi) {
            setLoadingApi(true)
            const question = await api.post("/questionario/criar", {
                question_1: questions[0] || 'Y',
                question_2: questions[1] || 'Y',
                question_3: questions[2] || 'Y',
                question_4: questions[3] || 'Y',
                question_5: questions[4] || 'Y',
            })

            /*
            const activity = await api.post("/interesses/criar", {


            })
            */
            console.log(question.data)
            if (question.data.message)
                setAuth(true)

            setTimeout(() => setLoadingApi(false), 100)
        }
    }

    return (
        <AuthContext.Provider value={{
            signed: auth,
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