

import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import Style from './Styles/Styles';


export default function HowItWorks() {

  return (
    <View style={Style.container}>
      <View style={Style.top}>
        <ImageBackground source={require('../../../assets/img/conheca.png')} style={Style.imgBkg}>
          <View style={Style.center}>
            <Icon style={Style.Icon} name={'users'} />
          </View>
        </ImageBackground>
      </View>

      <View style={{ paddingTop: 50, paddingBottom: 0 }}>
        <Text style={Style.title}>
          Como funciona o Clube?
        </Text>
      </View>

      <View style={{ paddingTop: 20, paddingBottom: 0 }}>
        <View style={Style.buttonsLine}>
          <TouchableOpacity
            style={Style.hollowButtonActive}
            activeOpacity={0.5}>
            <Text style={Style.hollowButtonText}> O Clube </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.btn}
            activeOpacity={0.5}>
            <Text style={Style.linkBtnColor1Text}> Vantagens </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.btn}
            activeOpacity={0.5}>
            <Text style={Style.linkBtnColor2Text}> Pacotes </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={Style.buttonsLineRtl}>
        <TouchableOpacity
          style={Style.linkBtnColor3}
          activeOpacity={0.5}>
          <Text style={Style.linkBtnColor3Text}> Pular </Text>
          <Icon style={Style.IconBtn} name={'arrow-right'} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
