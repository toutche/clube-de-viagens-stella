import React, { useState } from 'react';
import { 
    View,
    StyleSheet,
    Text, 
    Image,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons';


export default function Card(props) {
    let display = props.display;
    let status = props.status;

    const styles = StyleSheet.create({
        container: {
            padding: 10,                 
        },
        cardActive: {             
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,       
            backgroundColor: props.bkColor,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 10
        },
        card: { 
            borderRadius: 10,
            backgroundColor: props.bkColor,
            flexDirection: 'row',
            justifyContent: 'space-around',
            paddingVertical: 10,
            paddingHorizontal: 10
        },
        bkImgUser: {
            flexDirection: 'column',
            justifyContent: 'center'
        },
        imgUser: {
            borderRadius: 50,
            height: 50,
            width: 50,
            borderWidth: 5,
            borderColor:  props.borderColor,
            backgroundColor: props.bkColorImg,
        },
        noImgUser: {
            borderRadius: 50,
            height: 50,
            width: 50,
            borderWidth: 5,
            borderColor:  props.borderColor,
            backgroundColor: props.bkColorImg,
        },
        bkText: {
            flexDirection: 'column',
            justifyContent: 'center',
        },
        bkBtn: { 
            flexDirection: 'column',
            justifyContent: 'center'
        },
        btnActive: {
            borderRadius: 50,
            height: 30,
            width: 30,
            borderWidth: 3,
            borderColor: props.borderColor,
            backgroundColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center'
        },
        btn: {
            borderRadius: 50,
            height: 30,
            width: 30,
            borderWidth: 1,
            borderColor: '#ffffff',
            justifyContent: 'center',
            alignItems: 'center'
        },
        boxPromotion: {
            justifyContent: "center",
            backgroundColor: "#12AAEB",
            borderRadius: 50,
            height: 20,
            width: '100%',     
            elevation: 7,         
        },
        textPromotion: {
            textAlign: 'center',
            color: '#ffffff',
            fontSize: 10
        },   
        title: {
            color: '#ffffff',
            fontSize: 22
        },
        value: {
            color: '#ffffff',
            fontSize: 16
        },
        lineBottom: {
            backgroundColor: '#FFFFFF',
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            flexDirection: 'row',
            justifyContent: 'center',
        },
        startPlan: { 
            color: "#12AAEB",
            fontSize: 12
        },
    });
    

    if(status==='active') {
        return (
            <View style={styles.container}>
                <View style={styles.cardActive}>

                    <View style={styles.bkImgUser}>
                        <View style={styles.imgUser}></View>
                    </View>

                    <View style={styles.bkText}>

                    <View style={styles.boxPromotion}>
                        <Text style={styles.textPromotion}> {props.infoPromotion} </Text>  
                    </View>

                        <Text style={styles.title}>Plano {props.display}</Text>
                        <Text style={styles.value}>R$ {props.value} /mês</Text>
                    </View>

                    <View style={styles.bkBtn}>    
                        <TouchableOpacity style={styles.btnActive}>
                            <Icon 
                            size={18} 
                            color={'#12AAEB'}
                            name={"chevron-down"}/>  
                        </TouchableOpacity>          
                    </View>

                </View>

                <View style={styles.lineBottom}>
                    <Text style={styles.startPlan}>Plano Contratado em {props.dateStartPlan}</Text>
                </View>
            </View>     
        );
    } else if(status==='disabled'){
        return (
            <View style={styles.container}>
                <View style={styles.card}>

                    <View style={styles.bkImgUser}>
                       <View style={styles.noImgUser}></View>
                    </View>

                    <View style={styles.bkText}>
                        <View style={styles.boxPromotion}>
                            <Text style={styles.textPromotion}> {props.infoPromotion} </Text>  
                        </View>

                        <Text style={styles.title}>Plano {props.display}</Text>
                        <Text style={styles.value}>R$ {props.value} /mês</Text>
                    </View>

                    <View style={styles.bkBtn}>  
                        <TouchableOpacity style={styles.btn}>
                            <Icon 
                            size={18} 
                            color={'#ffffff'}
                            name={"angle-right"}/>  
                        </TouchableOpacity>                      
                    </View>

                </View>
            </View>
        );
    }
    


}

