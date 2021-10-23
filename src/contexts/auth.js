import React, { createContext, useState, useEffect, useContext } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../services/api";
import { Alert } from "react-native";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [loadingApi, setLoadingApi] = useState(false)

    useEffect(() => {
        async function loadStorage() {
            const storagedUser = await AsyncStorage.getItem('Auth')
            if (storagedUser)
                setUser(JSON.parse(storagedUser))
            setTimeout(() => setLoading(false), 1500)
        }
        loadStorage()
    }, [])

    const signIn = async ({ name, password }, navigation) => {
        if (!loadingApi) {
            setLoadingApi(true)
            api.post("/login", {
                name,
                password,
            }).then(({ data }) => {
                console.log('data', data)
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
                email,
                password,
                password_confirmation: password,
                phone_number,
                gender: "m",
                image
            }).then(({ data }) => {
                console.log('data', data)
                //navigation.replace('ConfirmEmail', { params: data })
                setLoadingApi(false)
            }).catch((error) => {
                setLoadingApi(false)
                console.log('e', error)
            })
        }
    }

    const signOut = () => {
        AsyncStorage.clear().then(() => setUser(null))
    }

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            loading,
            loadingApi,
            user,
            signIn,
            signUp,
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