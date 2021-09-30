import React from "react";
import { View, Text, } from "react-native";

import Style from "./style/StyleCommon";

export default function Copyright(props) {

let display=props.display

if(display === "none") {
  return (
    <View style={Style.containerCopyright}>
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
