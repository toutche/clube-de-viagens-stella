import React from "react"

import AuthRoutes from "./AuthRoutes"
import AppRoutes from "./AppRoutes"

import { useAuth } from "../contexts/auth"

const Routes = () => {
    const { signed, loading } = useAuth()
    if (loading) return null
    return signed ? <AppRoutes /> : <AuthRoutes />
}
export default Routes