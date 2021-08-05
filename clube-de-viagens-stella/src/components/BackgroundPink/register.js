import React, { useState } from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    Image,
    TextInput, 
    TouchableWithoutFeedback 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


/*Componentes internos do app */
import Title from '../common/titleInternalBkPink';
import Copyright from '../common/copyright';
import StyleBkPink from './Styles/StyleBackgroundPink';
import AccessStyle from './Styles/AccessStyle';


export default function RegisterScreen({ navigation, route }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cel, setCel] = useState('');
  const [name, setName] = useState('');
  const placeholderTextColor="#ffffff";

  return (
    <View style={StyleBkPink.container}>

      <View style={StyleBkPink.spacearea}>
        <View style={StyleBkPink.divRoundedWhite}>
          <Image source={require('../../../assets/img/logoquadrado.png')} style={StyleBkPink.imgDivWhite}/>
        </View>
      </View>

      <Title titlePage="É novo aqui? Cadastre-se"/> 
     
        <View style={StyleBkPink.boxPink}>
          <View style={AccessStyle.inputGroup}>      
            <TouchableWithoutFeedback>
                <Icon style={AccessStyle.IconTextInput} name={'user'} size={20}/>  
            </TouchableWithoutFeedback>         
            <TextInput 
              style={AccessStyle.TextInput}
              placeholder='Insira o seu nome'
              placeholderTextColor={placeholderTextColor}
              onChangeText={(name) => setName(name)}/>                 
          </View>
          
          <View style={AccessStyle.inputGroup}>      
            <TouchableWithoutFeedback>
                <Icon style={AccessStyle.IconTextInput} name={'mobile'} size={20}/>  
            </TouchableWithoutFeedback>         
            <TextInput 
              style={AccessStyle.TextInput}
              placeholder='Insira o seu celular'
              placeholderTextColor={placeholderTextColor}
              onChangeText={(cel) => setCel(cel)}/>                 
          </View>
       
          <View style={AccessStyle.inputGroup}>      
                <TouchableWithoutFeedback>
                    <Icon style={AccessStyle.IconTextInput} name={'envelope'} size={20}/>  
                </TouchableWithoutFeedback>         
                <TextInput 
                  style={AccessStyle.TextInput}
                  placeholder='Insira o seu e-mail'
                  placeholderTextColor={placeholderTextColor}
                  onChangeText={(email) => setEmail(email)}/>                 
            </View>
            <View style={AccessStyle.inputGroup}>      
                <TouchableWithoutFeedback>
                    <Icon style={AccessStyle.IconTextInput} name={'lock'} size={20}/>  
                </TouchableWithoutFeedback>         
                <TextInput
                  style={AccessStyle.TextInput} 
                  secureTextEntry={true}
                  placeholder='Insira uma senha'
                  placeholderTextColor={placeholderTextColor}
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
