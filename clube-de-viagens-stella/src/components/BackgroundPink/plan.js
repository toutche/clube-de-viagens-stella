import React, { useState } from "react";
import { 
    View,
    ScrollView,
    StyleSheet,
    Image,
    Text
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"

/*Componentes internos do app */
import Style from "./Styles/StyleBackgroundPink";
import titleInternal from "../common/titleInternal";
import Copyright from "../common/copyright";
import Cards from "../common/card";


export default function PlanScreen({ navigation, route }) {

    const titlePage="Você pode melhorar seu plano e diminuir o prazo de adimplência.";
    const subTitlePage="Selecione o plano desejado:";
    const text="Renovação será efetivada em ";
    const renovation="10/06/2021";


    const styles = StyleSheet.create({
        containerPink: {
            flexDirection: "column",  
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
        },
        spacearea: {
            height: 180,
            justifyContent: "center",
            alignContent: "center"
        },
        divRoundedWhite: {
           flex: 1,
           backgroundColor: "#fff", 
           borderBottomStartRadius: 50, 
           borderBottomEndRadius: 50, 
           borderStyle: "solid", 
           borderColor: "#df123e", 
           justifyContent: "flex-end",
        },
        boxPinkActive: {
            backgroundColor: "#C50C33",
            paddingBottom: 10,
        },
        boxPink: {
            backgroundColor: "#B40D30",
            paddingBottom: 50,
        },
        card: {
            paddingHorizontal: 20,
        },
        text: {
            color: "#ffffff",
            textAlign: "center",
            paddingBottom: 20
        }

    });
  return (
    <View style={Style.container}>
    
        <ScrollView scrollEnabled={true}>
            <View style={styles.spacearea}>
                <View style={Style.divRoundedWhite}>
                    <Image source={require("../../../assets/img/logoquadrado.png")} style={Style.imgDivWhite}/>
                </View>
            </View>
            
            <View style={styles.containerPink}>
                <titleInternal 
                styleTitle="titleBKColorful"
                titlePage={titlePage}/>
                
                <View style={styles.boxPinkActive}>  
                    <View style={styles.card}>
                        <Cards 
                            display="Gold" 
                            status="active" 
                            bkColor="#FDC609"
                            borderColor="#DBAC02"
                            bkColorImg="transparent"
                            img=""
                            value = "499,00"
                            dateStartPlan ="10/05/2021"
                            infoPromotion = "8% de Bonificação"
                        />
                    </View>                                     
                </View>     
                
                <View style={styles.boxPink}>           
                    <titleInternal 
                    styleTitle="titleBKColorful"
                    titlePage={subTitlePage}/>      
                    <Text style={styles.text}>{text}{renovation}</Text>
                    <View style={styles.card}>
                        <Cards 
                            display="Platinium" 
                            status="disabled" 
                            bkColor="#071620"
                            borderColor="#283038"
                            bkColorImg="#676871"
                            value = "499,00"
                            dateStartPlan ="10/05/2021"
                            infoPromotion = "8% de Bonificação"
                        />
                    </View>
                    
                    <View style={styles.card}>
                        <Cards 
                            display="Silver" 
                            status="disabled" 
                            bkColor="#909090"
                            borderColor="#3E3F44"
                            bkColorImg="#676871"
                            value = "499,00"
                            dateStartPlan ="10/05/2021"
                            infoPromotion = "8% de Bonificação"
                        />
                    </View>
                    
                </View>  
            </View>
        
            <Copyright display="termsOnly"/>
        </ScrollView>

    </View>
  );
}

