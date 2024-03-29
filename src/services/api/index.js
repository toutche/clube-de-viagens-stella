import axios from "axios";
import { getToken } from "../auth";
import { consts } from "../../utils/consts";

const api = axios.create({
    baseURL: consts.URL
})

api.interceptors.request.use(async config => {
    const token = await getToken()
    if (token)
        config.headers.Authorization = `Bearer ${token}`

    return config
})

export default api