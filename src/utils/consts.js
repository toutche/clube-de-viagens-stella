import { Platform } from "react-native";

const consts = {
  // URL: __DEV__ ? "https://dev-api.clubedeferias.com/api" : "https://api.clubedeferias.com/api",
  URL: __DEV__ ? "https://2504-189-112-253-186.sa.ngrok.io/api" : "https://api.clubedeferias.com/api",
  TOKEN_KEY: "TokenCDF",
  google_key: "AIzaSyCaDURxB_iYNe-3NPJQau1CBU-GLGEdkwA",
};

export { consts };

export const IS_IOS = Platform.OS === "ios";
export const BEHAVIOR = IS_IOS ? "padding" : null;
