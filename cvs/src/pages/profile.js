import React, { useState } from "react";
import { 
    View,
    ScrollView,
    Text,
    TouchableOpacity,
} from "react-native";

import Style from "./styles/stylePages";
import Header from "../common/header";

export default function ProfileScreen({ navigation, route }) {


  
  return (
  <ScrollView style={Style.container} scrollEnabled={true}>
    <View style={Style.bkRoundedpink}>

      <Header></Header>

    </View>  

    <View style={Style.bkwhite}> 
    </View>  
  </ScrollView>
  );
}
