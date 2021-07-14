 

import React, { useState } from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
//import Carousel from 'react-native-snap-carousel';

import TitleInternalBkWhite from '../common/titleInternalBkWhite';
import Style from './Styles/Styles';


export default function  MemberPacks() {

  return (
    <View style={Style.container}>
      <View style={Style.topCarrossel}>
         <ImageBackground source={require('../../../assets/img/conheca.png')} style={Style.imgBkg}>
          <View style={Style.center}>
            <Icon style={Style.Icon} name={'plane'}/> 
          </View>
        </ImageBackground>
      </View>
      <View style={Style.textArea}>
        <TitleInternalBkWhite 
          style='titleInternal' 
          titlePage='Pacotes exclusivoc para membros'/>

          <Text style={Style.subtitle}>
            Entre no Clube de férias e garanta preços exclusivos para os membros.
          </Text>

          <Text style={Style.text}>
            App intuitivo, auxilia os assinantes de forma simples, rápida e segura a planejarem seu
            próximo destino. Baseado em suas preferências, sugerindo constantemente diversas opções de destinos com preços 
            imbatíveis, tudo isso 100% on line em nossa plataforma.
          </Text>
      </View>
      <View style={Style.buttonsLine}>        
        <TouchableOpacity
        style={Style.btn}
        activeOpacity={0.5}>
          <Text style={Style.hollowButtonText}> O Clube </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={Style.btn}
        activeOpacity={0.5}>
          <Text style={Style.linkBtnColor1Text}> Vantagens </Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={Style.linkBtnColor2Active}
        activeOpacity={0.5}>
          <Text style={Style.linkBtnColor2Text}> Pacotes </Text>
        </TouchableOpacity>
      </View>        

      <View style={Style.buttonsLineRtl}>        
        <TouchableOpacity
        style={Style.linkBtnColor3}
        activeOpacity={0.5}>
          <Text style={Style.linkBtnColor3Text}> Pular </Text>
          <Icon style={Style.IconBtn} name={'arrow-right'}/> 
        </TouchableOpacity>
      </View>    
    </View>
  );
}
