import React, { useState } from 'react';
import { 
    View,
    ScrollView,
    TouchableOpacity, 
    Text, 
    TextInput, 
    TouchableWithoutFeedback,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

/*Componentes internos do app */
import api from '../utils/api';
import {loginSetToken, getToken} from '../utils/auth';
import Style from './Styles/StyleBackgroundPink';
import AccessStyle from './Styles/AccessStyle';
import TitleInternalBkPink from '../common/titleInternalBkPink';
import Copyright from '../common/copyright';


export default function Access({ navigation, route }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const placeholderTextColor="#ffffff";
    const titlePage='Entre com seu e-mail e senha';

    const _login = () => {
        api.post('/login', {
            email: email,
            password: password
        })
        .then(function (response) {
            console.log('login: ',response.data);
            if(response.data.access_token) {
                loginSetToken(response.data.access_token);
                navigation.navigate('HomeLoggedScreen');
            } else {
                alert("Usuário e/ou senha incorretos");
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    }

  return (
    <View style={Style.container}>
    
        <ScrollView scrollEnabled={true}>
            <View style={Style.spacearea}>
                <View style={Style.divRoundedWhite}>
                    <Image source={require('../../../assets/img/logoquadrado.png')} style={Style.imgDivWhite}/>
                </View>
            </View>
            
            <View style={AccessStyle.containerAccess}>
                <TitleInternalBkPink titlePage={titlePage}/>
                
                <View style={Style.boxPink}>
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
                            
                    <View style={Style.containerButtons}>        
                        <TouchableOpacity
                        style={Style.buttonRegister}
                        activeOpacity={0.5}
                        onPress={_login}>
                        <Text style={Style.buttonTextDark}> Entrar </Text>
                        </TouchableOpacity>
                    </View>         
                    
                    <View style={{
                        justifyContent: 'center', 
                        marginTop: 30, 
                        flexDirection: 'row',
                        }}>
                        <Text 
                            style={Style.link} 
                            onPress={() => 
                                navigation.navigate('RecoverPassword')
                            }>
                            Esqueceu a senha?
                        </Text>
                    </View>
                </View>     
                
            </View>
        
            <Copyright display='none'/>
        </ScrollView>

    </View>
  );
}
