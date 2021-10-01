import React from "react";
import { Text } from "react-native";
import { 
  FONT_SIZE_SUBTITLE,
  TITLE_COLOR_BKCOLORFUL, 
  TITLE_COLOR_BKWHITE 
} from "../variables";


export default function TitleInternal(props) {

    if (props.styleTitle === "titleBKW") {
      return (
      <Text style={{
        fontSize: 20,
        fontWeight: "600",
        color: TITLE_COLOR_BKWHITE,
        margin: "auto"
      }}>
        {props.titlePage}
      </Text>   
      )     
    } else if (props.styleTitle === "titleIBKW") {
      return (
        <Text style={{
          fontSize: 16,
          fontWeight: "600",
          color: TITLE_COLOR_BKWHITE
        }}>
          {props.titlePage}
        </Text>   
        )      
    } else if (props.styleTitle === "titleBKColorful") {
      return (
        <Text style={{
          color: TITLE_COLOR_BKCOLORFUL,
          marginTop: 10,
          marginBottom: 20,
          fontSize: 22,
          fontWeight: "bold",
          marginHorizontal: 45,
          textAlign: "center",
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
          {props.titlePage}
        </Text>   
        )     
    }else if (props.styleTitle === "titleIBKColorful") {
      return (
        <Text style={{
          color: TITLE_COLOR_BKCOLORFUL,
          fontSize: 16,
          fontWeight: "bold",
          marginHorizontal: "auto",
          textAlign: "center",
          paddingHorizontal: 50,
          paddingVertical: 20,
          width: "100%"
        }}>
          {props.titlePage}
        </Text>   
        )
      }else if (props.styleTitle === "titleIBKColorLEFT") {
        return (
          <Text style={{
            color: TITLE_COLOR_BKCOLORFUL,
            fontSize: FONT_SIZE_SUBTITLE,
            fontWeight: "bold",
            marginHorizontal: "auto",
            textAlign: "left",
            width: "100%"
          }}>
            {props.titlePage}
          </Text>   
          )
        }
}
