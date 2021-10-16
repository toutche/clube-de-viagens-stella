import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { 
  TEXT_COLOR_BKCOLORFUL, 
  WIDTH, 
  FONT_SIZE_COPYRIGHT 
} from "../variables";

export default function Copyright(props) {

let display=props.display
const Style = StyleSheet.create({
  containerCopyright: {
    flexDirection: "column",  
    justifyContent: "flex-end",
    flex: 3,
    width: WIDTH, 
    marginBottom: 5
  },
  copyrightModel1: {
    flexDirection: "column",  
    justifyContent: "flex-end",
    width: WIDTH, 
    marginVertical: 15
  },
  copyrightBKP: {
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_COPYRIGHT,
    textAlign: "center"
  },
  linkCopyrightBKP:{
    color: TEXT_COLOR_BKCOLORFUL,
    fontSize: FONT_SIZE_COPYRIGHT,
    textDecorationLine: "underline",
    marginLeft: 2
  },
});


if(display === "none") {
  return (
    <View style={Style.containerCopyright}>
          <Text style={Style.copyrightBKP}>Copyright {"\u00A9"} 2021 Stella Barros Turismo</Text>
    </View>     
  );
} else if(display === "model1") {
  return (
    <View style={Style.copyrightModel1}>
          <Text style={Style.copyrightBKP}>Copyright {"\u00A9"} 2021 Stella Barros Turismo</Text>
    </View>     
  );
} else if(display === "termsOnly") {
  return (
    <View style={Style.containerCopyright}>
        <Text style={Style.copyrightBKP}>Ao contratar, você concorda com os 
          <Text style={Style.linkCopyrightBKP} onPress={() => Linking.openURL("http://google.com")}>
            termos e condições de uso
          </Text>
        </Text>          
    </View>     
  );
} else if(display === "model2") {
  return (
    <View style={Style.copyrightModel1}>
        <Text style={Style.copyrightBKP}>Ao se cadastrar, você concorda com os 
          <Text style={Style.linkCopyrightBKP} onPress={() => Linking.openURL("http://google.com")}>
             termos e condições de uso
          </Text>
        </Text>  
        <Text style={Style.copyrightBKP}>Copyright {"\u00A9"} 2021 Stella Barros Turismo</Text>
    </View>     
  );
} else {
  return (
    <View style={Style.containerCopyright}>
        <Text style={Style.copyrightBKP}>Ao se cadastrar, você concorda com os 
          <Text style={Style.linkCopyrightBKP} onPress={() => Linking.openURL("http://google.com")}>
            termos e condições de uso
          </Text>
        </Text>  
        <Text style={Style.copyrightBKP}>Copyright {"\u00A9"} 2021 Stella Barros Turismo</Text>
    </View>     
  );
}
}
