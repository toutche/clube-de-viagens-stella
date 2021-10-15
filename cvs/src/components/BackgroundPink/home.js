import React from "react";
import { View, Image } from "react-native";

import Copyright from "../common/Copyright";
import HomeStyle from "./Styles/HomeStyle";

export default function Home() {
  
  return (     
    <View style={HomeStyle.container}>
      <View style={HomeStyle.centerAlign}>
        <View>
          <View style={HomeStyle.divRoundedPink4}>
            <View style={HomeStyle.divRoundedPink3}>
              <View style={HomeStyle.divRoundedPink3}>
                <View style={HomeStyle.divRoundedPink3}>
                  <View style={HomeStyle.divRoundedPink2}>
                    <View style={HomeStyle.divRoundedPink1}>
                      <View style={HomeStyle.divRoundedWhite}>
                        <Image source={require("../../../assets/img/logo/logo-color.png")} style={HomeStyle.img}/>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>      
      </View>
      <View style={{marginBottom: 10}}>
      <Copyright display="none"/>
      </View>
    </View>
  );
}