import React, { useState } from 'react';
import { 
    View, 
    TouchableOpacity, 
    Text, 
    TextInput, 
    TouchableWithoutFeedback 
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'


import StyleBkPink from './Styles/StyleBackgroundPink';
import AccessStyle from './Styles/AccessStyle';
import TitleInternalBkPink from '../common/titleInternalBkPink';
import Copyright from '../common/copyright';

export default function Access() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  return (
    <View style={AccessStyle.containerAccess}>
        <TitleInternalBkPink titlePage="Entre com seu e-mail e senha"/>
        
        <View style={StyleBkPink.boxPink}>
            <View style={AccessStyle.inputView}>      
                <TouchableWithoutFeedback>
                    <Icon style={AccessStyle.IconTextInput} name={'envelope'} size={20}/>  
                </TouchableWithoutFeedback>         
                <TextInput style={AccessStyle.TextInput}
                    onChangeText={(email) => setEmail(email)}/>                 
            </View>
        </View>

        <View style={StyleBkPink.boxPink}>
            <View style={AccessStyle.inputView}>      
                <TouchableWithoutFeedback>
                    <Icon style={AccessStyle.IconTextInput} name={'lock'} size={20}/>  
                </TouchableWithoutFeedback>         
                <TextInput style={AccessStyle.TextInput} secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}/>                 
            </View>
        </View>
        
        
        <View style={StyleBkPink.boxPink}>
            <View style={StyleBkPink.containerButtons}>        
                <TouchableOpacity
                style={StyleBkPink.buttonRegister}
                activeOpacity={0.5}>
                <Text style={StyleBkPink.buttonTextDark}> Entrar </Text>
                </TouchableOpacity>
            </View>         
        </View>     
        
        <View style={{marginBottom: 50}}>
            <Text 
                style={StyleBkPink.link} 
                onPress={() => Linking.openURL('http://google.com')}>
                Esqueceu a senha?
            </Text>
        </View>
        
        <Copyright display='none'/>

    </View>
  );
}