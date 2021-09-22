import React from 'react';
import { 
    View,
    Text,
    Image,
    StyleSheet,
    TouchableWithoutFeedback,
    TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'


export default function Header() {
  
    const textBtnUser = 'Olá Fernanda';
    const textBtnUser2 = 'Crédito: R$ 6.900,00';
    const styles = StyleSheet.create({
        logo: {
            width: '100%',
            resizeMode: 'contain',
            marginTop: -10
        },
        iconBars: {
            color: '#ffffff',
            paddingTop: 20
        },
        header: {
            backgroundColor: 'transparent',
            width: '100%',
            flexDirection: "row",
            justifyContent: 'space-between',
            margin: 0
        },
        containerImg: {
            width: 100,
            height: 100,    
        },
        containerIcon: {},
        btnUser:{
            backgroundColor:'#DF123E',
            borderColor: '#EF1F4B',
            borderWidth: 2,
            color: '#ffffff',
            borderRadius: 50,
            height: 40,
            width: "50%",
            marginRight:2
          },
          btnUserText:{
            color: '#ffffff',
            fontSize: 11,
            textAlign: 'center',
            paddingVertical: 5,
          },
          btnUserText2:{
            color: '#ffffff',
            fontSize: 10,
            textAlign: 'center',
            paddingVertical: 10,
          },
      });

  return (
        <View style={styles.header}>
            <View style={styles.containerIcon}>
                <TouchableWithoutFeedback>
                    <Icon style={styles.iconBars} name={'bars'} size={20}/>  
                </TouchableWithoutFeedback> 
            </View>

            {/*<View style={styles.containerImg}>        
                <TouchableOpacity
                    style={styles.btnUser}
                    activeOpacity={0.5}>
                    <Text style={styles.btnUserText}> 
                        {textBtnUser} 
                        <Text style={styles.btnUserText2}> {textBtnUser2} </Text>
                    </Text>          
                </TouchableOpacity>
  </View>*/}

            <View style={styles.containerIcon}>
                <TouchableWithoutFeedback>
                    <Icon style={styles.iconBars} name={'bell'} size={20}/>  
                </TouchableWithoutFeedback>
            </View>
      </View>
  );
}

