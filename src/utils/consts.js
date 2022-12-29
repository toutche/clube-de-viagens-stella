import { Platform } from "react-native";

const consts = {
  // URL: __DEV__ ? "https://dev-api.clubedeferias.com/api" : "https://api.clubedeferias.com/api",
  URL: __DEV__ ? "https://2014-45-230-166-121.sa.ngrok.io/api" : "https://api.clubedeferias.com/api",
  TOKEN_KEY: "TokenCDF",
  google_key: "AIzaSyCP02bLOadxn_8YdXuUKahedG08aPRIuZU",
};

export { consts };

export const IS_IOS = Platform.OS === "ios";
export const BEHAVIOR = IS_IOS ? "padding" : null;
