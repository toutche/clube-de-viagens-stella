import React, { useState } from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    TextInput, 
    TouchableWithoutFeedback 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


import Title from '../../common/TitleInternalBkPink';
import Copyright from '../common/Copyright';
import StyleBkPink from './Styles/StyleBackgroundPink';
import AccessStyle from './Styles/AccessStyle';


export default function Register() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cel, setCel] = useState('');
  const [name, setName] = useState('');

  return (
    <View style={AccessStyle.containerAccess}>
      <Title titlePage="É novo aqui? Cadastre-se"/> 
     
        <View style={StyleBkPink.boxPink}>
          <View style={AccessStyle.inputView}>      
            <TouchableWithoutFeedback>
                <Icon style={AccessStyle.IconTextInput} name={'user'} size={20}/>  
            </TouchableWithoutFeedback>         
            <TextInput 
              style={AccessStyle.TextInput}
              placeholder='Insira o seu nome'
              onChangeText={(name) => setName(name)}/>                 
          </View>
        </View>

        <View style={StyleBkPink.boxPink}>
          <View style={AccessStyle.inputView}>      
            <TouchableWithoutFeedback>
                <Icon style={AccessStyle.IconTextInput} name={'mobile'} size={20}/>  
            </TouchableWithoutFeedback>         
            <TextInput 
              style={AccessStyle.TextInput}
              placeholder='Insira o seu celular'
              onChangeText={(cel) => setCel(cel)}/>                 
          </View>
        </View>

        <View style={StyleBkPink.boxPink}>
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

        <View style={StyleBkPink.boxPink}>
            <View style={AccessStyle.inputView}>      
                <TouchableWithoutFeedback>
                    <Icon style={AccessStyle.IconTextInput} name={'lock'} size={20}/>  
                </TouchableWithoutFeedback>         
                <TextInput
                  style={AccessStyle.TextInput} 
                  secureTextEntry={true}
                  placeholder='Insira uma senha'
                  onChangeText={(password) => setPassword(password)}/>                 
            </View>
        </View>

        <View style={StyleBkPink.boxPink}>
          <View style={StyleBkPink.containerButtons}>        
            <TouchableOpacity
              style={StyleBkPink.buttonRegister}
              activeOpacity={0.5}>
              <Text style={StyleBkPink.buttonTextDark}> Cadastrar </Text>
            </TouchableOpacity>
          </View>         
        </View>

        <Copyright/> 
      
    </View>
  );
}
