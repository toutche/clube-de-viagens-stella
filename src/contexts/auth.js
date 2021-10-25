import React, { createContext, useState, useEffect, useContext } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../services/api";
import { getToken, logout, setToken } from "../services/auth";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingApi, setLoadingApi] = useState(false)

    useEffect(() => {
        async function loadStorage() {
            const storagedUser = await getToken()
            if (storagedUser)
                //setUser(storagedUser)
                setTimeout(() => setLoading(false), 1500)
        }
        loadStorage()
    }, [])

    const signIn = async ({ email, password }, navigation) => {
        if (!loadingApi) {
            setLoadingApi(true)
            api.post("/login", {
                email,
                password
            }).then((res) => {
                console.log('data', res.data.access_token)
                setToken(res.data.access_token)
                //navigation.replace('ConfirmEmail', { params: data })
                setLoadingApi(false)
            }).catch(e => {
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
                console.log('data', data.success)
                if (data.success) navigation.replace('ConfirmEmail', { params: data })
                setLoadingApi(false)
            }).catch((error) => {
                setLoadingApi(false)
                console.log('e', error)
            })
        }
    }

    const activeAccount = (token, navigation) => {
        console.log('token', token)
        if (!loadingApi) {
            setLoadingApi(true)
            api.post("/ativa-conta", {
                token
            }).then(({ data }) => {
                console.log('data', data)
                //if (data.success) navigation.replace('TermsConditions', { params: data })
                setLoadingApi(false)
            }).catch((error) => {
                setLoadingApi(false)
                console.log('e', error)
            })
        }
    }

    const acceptTerms = (token, navigation) => {
        if (!loadingApi) {
            setLoadingApi(true)
            api.post("/ativa-conta", {
                token
            }).then(({ data }) => {
                console.log('data', data.success)
                if (data.success) navigation.replace('TermsConditions', { params: data })
                setLoadingApi(false)
            }).catch((error) => {
                setLoadingApi(false)
                console.log('e', error)
            })
        }
    }

    const acceptPolicy = (token, navigation) => {
        if (!loadingApi) {
            setLoadingApi(true)
            api.post("/ativa-conta", {
                token
            }).then(({ data }) => {
                console.log('data', data.success)
                if (data.success) navigation.replace('TermsConditions', { params: data })
                setLoadingApi(false)
            }).catch((error) => {
                setLoadingApi(false)
                console.log('e', error)
            })
        }
    }

    const catchLocation = () => {
        if (!loadingApi) {
            setLoadingApi(true)
            api.post("/update", {

            }).then(({ data }) => {
                console.log('questionario', data)
                setLoadingApi(false)
            }).catch((error) => {
                setLoadingApi(false)
                console.log('e', error)
            })
        }
    }

    const questionaryOneToFive = () => {
        if (!loadingApi) {
            setLoadingApi(true)
            api.post("/questionario/criar", {

            }).then(({ data }) => {
                console.log('questionario', data)
                setLoadingApi(false)
            }).catch((error) => {
                setLoadingApi(false)
                console.log('e', error)
            })
        }
    }


    const questionaryInterests = () => {
        if (!loadingApi) {
            setLoadingApi(true)
            api.post("/questionario/criar", {

            }).then(({ data }) => {
                console.log('questionario', data)
                setLoadingApi(false)
            }).catch((error) => {
                setLoadingApi(false)
                console.log('e', error)
            })
        }
    }

    const signOut = async () => await logout()

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            loading,
            loadingApi,
            user,
            signIn,
            signUp,
            activeAccount,
            acceptTerms,
            acceptPolicy,
            catchLocation,
            questionaryOneToFive,
            questionaryOneToFive,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext)
    return context
}