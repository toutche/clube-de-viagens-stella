import React, { useState } from 'react';
import { 
    View, 
    Text, 
    TextInput, 
    Linking
} from 'react-native';


import Title from '../common/titleInternalBkPink';
import StyleBkPink from './Styles/StyleBackgroundPink';
import InsertCodeStyle from './Styles/InsertCodeStyle';

export default function InsertCode() {

  const [name, setName] = useState('');

  return (
    <View style={StyleBkPink.container}>
      <Title titlePage="É novo aqui? Cadastre-se"/> 
     
      <View style={{marginBottom: 30, marginTop: '-10px'}}>
        <Text style={StyleBkPink.text}>
          Precisamos confirmar o seu e-mail.
        </Text>
        <Text style={StyleBkPink.text}>
          Insira o código de 4 dígitos enviado.
        </Text>
      </View>

      <View style={InsertCodeStyle.containerInsert}>
        
        <View style={InsertCodeStyle.boxDisplayFlex}>
          <View style={InsertCodeStyle.inputView}>      
            <TextInput 
              style={InsertCodeStyle.TextInput}
              onChangeText={(name) => setName(name)}/>                 
          </View>

          <View style={InsertCodeStyle.inputView}>      
            <TextInput 
              style={InsertCodeStyle.TextInput}
              onChangeText={(name) => setName(name)}/>                 
          </View>

          <View style={InsertCodeStyle.inputView}>      
            <TextInput 
              style={InsertCodeStyle.TextInput}
              onChangeText={(name) => setName(name)}/>                 
          </View>

          <View style={InsertCodeStyle.inputView}>      
            <TextInput 
              style={InsertCodeStyle.TextInput}
              onChangeText={(name) => setName(name)}/>                 
          </View>
        </View>

        <View style={InsertCodeStyle.boxDisplayFlex}>
            <Text 
                style={StyleBkPink.link} 
                onPress={() => Linking.openURL('http://google.com')}>
                Reenviar ódigo
            </Text>
        </View>
        
      </View>
    </View>
  );
}
