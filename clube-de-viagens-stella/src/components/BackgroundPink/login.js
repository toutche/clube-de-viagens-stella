import * as React from 'react';
import { TouchableOpacity, Image, StyleSheet, Button, View, Text } from 'react-native';


import StyleBkPink from './Styles/StyleBackgroundPink';
import Copyright from '../common/copyright';
import TitleBkPink from '../common/titleBkPink';

export default function LoginScreen({ navigation, route }) {  
    return (

      <View style={StyleBkPink.container}>

        <View style={StyleBkPink.divRoundedWhite}>
          <Image source={require('../../../assets/img/logoquadrado.png')} style={StyleBkPink.imgDivWhite}/>
        </View>

        <View style={StyleBkPink.divPink}>
          <View  style={StyleBkPink.container}>      

          <TitleBkPink titlePage="Bem-vindo ao seu clube de férias!"/>

            <Text style={StyleBkPink.subtitle}>Acessar com</Text>
            
            <View style={StyleBkPink.containerButtons}>
        
              <TouchableOpacity
                style={StyleBkPink.buttonFacebook}
                activeOpacity={0.5}>
                {/*<Image
                  source={require('../../../assets/img/facebook.png')}
                  style={StyleBkPink.buttonImageIcon}
                />*/}
                <Text style={StyleBkPink.buttonText}> FACEBOOK </Text>
              </TouchableOpacity>


              <TouchableOpacity
                style={StyleBkPink.buttonGloogle}
                activeOpacity={0.5}>
                {/*<Image
                  source={require('../../../assets/img/google.png')}
                  style={StyleBkPink.buttonImageIcon}
                />*/}
                <Text style={StyleBkPink.buttonText}> GOOGLE </Text>
              </TouchableOpacity>  

            </View>        

            <View style={StyleBkPink.containerSeparator}>
              <View style={StyleBkPink.separator}></View>
              <Text style={StyleBkPink.text}> ou </Text>
              <View style={StyleBkPink.separator}></View>
            </View>

            <View style={StyleBkPink.containerButtons}>        
              <TouchableOpacity
                style={StyleBkPink.buttonLoginEmail}
                activeOpacity={0.5}>
                <Text style={StyleBkPink.buttonText}> Entre com seu e-mail </Text>
              </TouchableOpacity>
            </View>           
          
            <View style={StyleBkPink.boxPink}>

              <View style={StyleBkPink.containerButtons}>        
                <TouchableOpacity
                  style={StyleBkPink.buttonRegister}
                  activeOpacity={0.5}>
                  <Text style={StyleBkPink.buttonTextDark}> É novo por aqui? Cadastre-se </Text>
                </TouchableOpacity>
              </View>   

            </View>

            <Copyright/> 

          </View>          
        
        </View>

      </View>
    );
  }

  const styles = StyleSheet.create({ });


  /**<View style={styles.container}>
            <Button
            title="Create post"
            onPress={() => navigation.navigate('CreatePost')}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        </View>
         */