import React, { useState } from 'react';
import { 
    View,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';

import Style from '../styles/stylePages';
import ContainerPkg from '../../common/containerPkg';


export default function HomeLoggedContentScreen({ navigation, route }) {

  const informationText = 'Preços sujeito a alterações sem aviso prévio | confirmação sujeita a disponibilidade';
  const titlePage = 'Conquiste as suas férias dos sonhos';
  const textBtn1 = 'Pacotes de Viagens';
  const textBtn2 = 'Hospedagem';
  const numPackages = '154';
  const textBtnUser = 'Olá Fernanda';
  const textBtnUser2 = 'Crédito: R$ 6.900,00';
  const textBtnDrop = 'Filtrar Pacotes';

  
  return (
  <ScrollView style={Style.container} scrollEnabled={true}>
    <View style={Style.bkRoundedpink}>

      <View style={Style.areaDrop}>
        <TouchableOpacity
          style={Style.btnUser}
          activeOpacity={0.5}>
          <Text style={Style.btnUserText}> 
            {textBtnUser} 
            <Text style={Style.btnUserText2}> {textBtnUser2} </Text>
          </Text>          
        </TouchableOpacity>
        <TouchableOpacity
          style={Style.btnDrop}
          activeOpacity={0.5}>
          <Text style={Style.btnDropText}> {textBtnDrop} </Text>
        </TouchableOpacity>
      </View>

      <View style={Style.areaTitle}>
        <Text style={Style.titlePage}>{titlePage}</Text>
        <Text style={Style.supplementary}>
          <Text style={Style.bold}>{numPackages} pacotes</Text> com preços exclusivos
        </Text>
      </View>
      

      <View style={Style.areaButtons}>
        <TouchableOpacity
          style={Style.btnLeft}
          activeOpacity={0.5}>
          <Text style={Style.btnText}> {textBtn1} </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={Style.btnRight}
          activeOpacity={0.5}>
          <Text style={Style.btnText}> {textBtn2} </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={Style.information}>{informationText}</Text>
      </View>
      
    </View>  

    <View style={Style.bkwhite}> 
      <ContainerPkg/>
      <ContainerPkg/>
    </View>  
  </ScrollView>
  );
}
