import { Platform } from "react-native";

const consts = {
  URL: "https://api.clubedeferias.com/api",
  TOKEN_KEY: "TokenCDF",
  google_key: "AIzaSyCaDURxB_iYNe-3NPJQau1CBU-GLGEdkwA",
};

export { consts };

export const IS_IOS = Platform.OS === "ios";
export const BEHAVIOR = IS_IOS ? "padding" : null;
