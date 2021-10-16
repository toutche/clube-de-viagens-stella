import React, { createContext, useState, useEffect, useContext } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../utils/api";
import { Alert } from "react-native";

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStorage() {
            const storagedUser = await AsyncStorage.getItem('Auth')
            if (storagedUser) {
                setUser(JSON.parse(storagedUser))
            }
            setLoading(false)
        }
        loadStorage()
    }, [])

    const signIn = async (user) => {
        api.post("/login", {
            username: user.username,
            password: user?.password
        }).then(({ data }) => {
            if (data.success) {
                AsyncStorage.setItem('Auth', JSON.stringify(user)).then(() => {
                    setUser(user)
                }).catch((e) => console.log(e))
            } else {
                Alert.alert('Erro', data.msg)
            }
        }).catch(e => {
            console.log(e)
        })
    }

    const signOut = () => {
        AsyncStorage.clear().then(() => setUser(null))
    }

    if (loading) return null

    return (
        <AuthContext.Provider value={{
            signed: !!user,
            loading,
            user,
            signIn,
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