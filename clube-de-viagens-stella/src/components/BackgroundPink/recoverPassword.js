import React, { useState } from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    TextInput, 
    TouchableWithoutFeedback 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import Styles from './Styles/StyleBackgroundPink';
import AccessStyle from './Styles/AccessStyle';
import Title from '../common/titleInternalBkPink'
import Copyright from '../common/Copyright';

export default function RecoverPassword() {

  const [email, setEmail] = useState('');

  return (
    <View style={AccessStyle.containerAccess}>
      <Title titlePage="Entre com seu e-mail para recuperar sua senha."/>
      
      <View style={Styles.boxPink}>
        <View style={AccessStyle.inputView}>      
          <TouchableWithoutFeedback>
            <Icon style={AccessStyle.IconTextInput} name={'envelope'} size={20}/>  
          </TouchableWithoutFeedback>         
          <TextInput 
            style={AccessStyle.TextInput}
            placeholder='Insira o seu e-mail'
            onChangeText={(email) => setEmail(email)}/>                 
        </View>
      </View>

      <View style={Styles.boxPink}>
        <View style={Styles.containerButtons}>        
          <TouchableOpacity
            style={Styles.buttonRegister}
            activeOpacity={0.5}>
            <Text style={Styles.buttonTextDark}> Recuperar Senha </Text>
          </TouchableOpacity>
        </View>         
      </View>          
     
      <Copyright display='none'/> 
    </View>
  );
}