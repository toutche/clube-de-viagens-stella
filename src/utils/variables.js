/* ARQUIVO DE VARIÁVEIS GERAIS */
import { Dimensions } from "react-native";

/* Cores */
export const BACKGROUND_COLOR = "#f3f6ff"
export const PRIMARY_COLOR = "#E10717"; //"#ff0015";
export const BLUE_COLOR = "#287dfd";
export const LIGHT_BLUE = "#12aaeb";
export const YELLOW_COLOR = "#e7bc0d";
export const GREEN_COLOR = "#58ba01";
export const SECOND_COLOR = "#FFFFFF";

export const TITLE_COLOR_BKCOLORFUL = "#FFFFFF";
export const TITLE_COLOR_BKWHITE = "#333333";
export const TEXT_COLOR_BKCOLORFUL = "#FFFFFF";
export const TEXT_COLOR_BKWHITE = "#000000";

/* Tamanhos */
export const WIDTH = Dimensions.get("window").width;
export const HEIGHT = Dimensions.get("window").height;
export const ITEM_SLIDE_WIDTH = Math.round(WIDTH * 0.8);
export const ITEM_SLIDE_HEIGHT = Math.round(HEIGHT * 0.7);

/* Fontes */
export const FONT_DEFAULT_STYLE = "Montserrat";
export const FONT_DEFAULT_BOLD_STYLE = "Montserrat-Bold";
export const FONT_SIZE_TITLE = 20;
export const FONT_SIZE_SUBTITLE = 16;
export const FONT_SIZE_BODY = 13;
export const FONT_SIZE_COPYRIGHT = 10;

export const CONTENT_OFFSET_THRESHOLD = 300;

//Dummy
export const CONTACT = [
  {
    value: "MINHA_CONTA",
    text: "Minha conta",
  },
  {
    value: "RESERVAS",
    text: "Reservas",
  },
  {
    value: "ASSINATURA",
    text: "Assinatura",
  },
  {
    value: "CANCELAMENTO_ASSINATURA",
    text: "Cancelar Assinaura",
  },
  {
    value: "OUTROS",
    text: "Outros",
  },
];
