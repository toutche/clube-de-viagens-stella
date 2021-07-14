import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import StyleBkPink from './Styles/StyleBackgroundPink';
import CompleteStyle from './Styles/CompleteAddressStyle';
import Title from '../common/titleInternalBkPink'


export default function CompleteAddress() {

  const [number, setNumber] = useState('');
  const [complement, setComplement] = useState('');
  const [referencePoint, setReferencePoint] = useState('');

  return (
    <View style={{backgroundColor: "#c70c34"}}>
      <Title titlePage="Complete o seu endereço"/>    

      <View style={CompleteStyle.boxWhite}>
        
        <View style={{
         // borderBottom: '1px solid #dcdcdc',
          borderBottomWidth: 1,
          //borderBottomStyle: 'solid',
          borderBottomColor: '#dcdcdc',
          paddingBottom: 10,
          textAlign: 'left'
          }}>

          <View style={{flexDirection: 'row'}}>
            <Text style={StyleBkPink.textOff}>Endereço </Text>
            <Text style={StyleBkPink.linkBoxWhite} 
                  onPress={() => Linking.openURL('http://google.com')}>
                  Editar
            </Text>
          </View>        

          <Text style={StyleBkPink.textBodyBox}>R. Jardim dos Eucaliptos, Campeche, Florianópolis - SC </Text>
        </View>

        <View style={{marginTop: 20}}>
          
          <Text style={StyleBkPink.textOff}>Número</Text>
          <View style={CompleteStyle.inputView}>            
            <TextInput
              style={CompleteStyle.TextInput}
              onChangeText={(number) => setNumber(number)}
              id="inputNumberCompleteAddress"
            />
          </View>

          <Text style={StyleBkPink.textOff}>Complemento (Ex. Apto / Bloco / Casa)</Text>
          <View style={CompleteStyle.inputView}>            
            <TextInput
              style={CompleteStyle.TextInput}
              onChangeText={(complement) => setComplement(complement)}
              id="inputComplementCompleteAddress"
            />
          </View>
          

          <Text style={StyleBkPink.textOff}>Ponto de referência</Text>
          <View style={CompleteStyle.inputView}>            
            <TextInput
              style={CompleteStyle.TextInput}
              onChangeText={(referencePoint) => setReferencePoint(referencePoint)}
              id="inputReferencePointCompleteAddress"
            />
          </View>
        </View>

      </View>

      <View style={StyleBkPink.boxPink}>
        <View style={StyleBkPink.containerButtons}>        
          <TouchableOpacity
            style={StyleBkPink.buttonRegister}
            activeOpacity={0.5}>
            <Text style={StyleBkPink.buttonTextDark}> Confirmar </Text>
          </TouchableOpacity>
        </View>   
      </View>

    </View>
  );
}
