import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import Title from "../common/titleInternal"
import ImgTopBkPink from "../common/ImgTopBkPink";
import StyleBkPink from "./Styles/StyleBackgroundPink";
import Login from "./Login";
import Access from "./Access";
import Localization from "./Localization";
import AddressNotFound from "./AddressNotFound";
import CompleteAddress from "./CompleteAddress";
import Register from "./Register";
import RecoverPassword from "./RecoverPassword";
import TermsConditions from "./TermsConditions";
import About from "./About";



export default function BasePink() {
  return (
    <View style={StyleBkPink.container}>
      <View style={StyleBkPink.divRoundedWhite}>
        <ImgTopBkPink img="logo"/>
      </View>

      <View style={StyleBkPink.divPink}>
       {/*<Login/>           
          <Access/>
          <Register/>
          <RecoverPassword/>
          <TermsConditions/>
          <About/>
       */}
       <About/>
      </View>
      
    </View>
  );
}