import {consts} from "./consts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const loginSetToken = async (value) => {
    try {
        await AsyncStorage.setItem(consts.TOKEN_KEY, value);
    } catch (error) {
        
    }
}

export const logout = async () => {
    try {
        await AsyncStorage.removeItem(consts.TOKEN_KEY);
    } catch (error) {
        
    }
}

export const getToken = async () => {
    return await AsyncStorage.getItem(consts.TOKEN_KEY);
}