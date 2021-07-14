import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import TitleInternal from '../common/titleInternalBkPink'
import StyleBkPink from './Styles/StyleBackgroundPink';
import AddressNotFoundStyle from './Styles/AddressNotFoundStyle';

export default function AddressNotFound() {
  const imageTop = '../../../assets/img/logoquadrado.png'
  
  return (

    <View>    
    <View src={() => setProps(imageTop)}></View>
        <TitleInternal titlePage="Não encontramos o seu endereço :("/> 

        <View style={StyleBkPink.alignCenter}>
          <Text style={StyleBkPink.text}>
            Informe o seu endereço para encontrar a feira mais próxima de você!
          </Text>    
        </View>

        <View style={AddressNotFoundStyle.boxWhite}>
          <Text style={AddressNotFoundStyle.textBoxWhite}>Endereço de entrega</Text>
          <View style={AddressNotFoundStyle.inputView}>
              <Icon name="search" size={20} color="#C70B33" />
              <TextInput style={AddressNotFoundStyle.TextInput}
              placeholder='Digite o seu endereço'/>
          </View>
        </View>

    </View>
  );
}
