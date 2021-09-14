import React, {useState} from 'react';
import { 
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon2 from 'react-native-vector-icons/Ionicons';

export default function ContainerPkg() {

    const titleLocation = 'Ilhas maldivas - All inclusive';
    const dataPackage = '7 dias | Aéreo + Hotel c/ café da manhã';
    const exclusiveText = 'Exclusivo para membros';
    const oldValue = '7.999,00';
    const promotionValue = '5.999,00';
    const infoPackage = 'por pessoa';
    const infoPromotion = '8% de Bonificação';
    const date = 'Disponível para compra até 5 de junho'
    const textBtnDetail = 'Detalhes'
    const textBtnPurchase = "Quero esse pacote"
    const scoreCount = "4.5";
    const starsCount = "345";
    const [favorite, setFavorite] = useState(true);
    // Altera o "favorite" para o contrário ao ser executada
    const handleToggleFavorite = () => setFavorite(favorite ? "heart" : "heart-o");

    const styles = StyleSheet.create({
        container: {
          width: '90%',
          height: '100%',
          paddingTop: 10,
          flexDirection: 'column',
          justifyContent: 'space-between',
        },
        boxBk: {
          justifyContent: "center",
          backgroundColor: "#F9F9F9",
          borderRadius: 10,
          padding: 10,
          shadowColor: '#000000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.8,
          shadowRadius: 2,  
          elevation: 5,
        },
        titleLocation: {
          color: '#4E4D4D',
          fontSize: 20,
          textAlign: 'center',
          fontWeight: 'bold'
        },
        textPackage: {
          color: '#ACACAC',
          fontSize: 15,
          textAlign: 'center'
        },
        btnDatail: {
          borderRadius: 50,
          padding: 10,
          backgroundColor: '#ffffff',
          shadowColor: '#A3A3A3',
          shadowRadius: 50,  
          elevation: 7,
        },
        btnDatailText: {
          color: '#287DFD',
          fontSize: 15,
          textAlign: 'center'
        },
        btnPurchase: {
          backgroundColor: "#287DFD",
          borderRadius: 50,
          padding: 10,
          shadowColor: '#A3A3A3',
          shadowRadius: 50,  
          elevation: 7,
        },
        btnPurchaseText: {
          color: '#ffffff',
          fontSize: 15,
          textAlign: 'center'
        },
        textDate: {
          color: '#6FC76E',
          fontSize: 15,
          textAlign: 'center'
        },
        areaButtons: {
          flexDirection: 'row',
          justifyContent: 'center',
          paddingHorizontal: 10,
          paddingTop: 10,
          marginVertical: 10,
          marginHorizontal: 10,
          borderTopWidth: 1,
          borderTopColor: '#EFEDED'
        },
        containerInternal:{
          flexDirection: 'row',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width: '100%',
          marginBottom: -40
        },
        boxPromotion: {
          justifyContent: "center",
          backgroundColor: "#12AAEB",
          borderRadius: 50,
          height: '10%',
          width: '50%',     
          elevation: 7,     
          marginBottom: -10         
        },
        textPromotion: {
          textAlign: 'center',
          color: '#ffffff',
          fontSize: 10
        },
        boxValue: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          backgroundColor: "#F9F9F9",
          borderRadius: 50,
          height: '20%',
          width: '80%', 
          paddingHorizontal: 10,
          paddingBottom: 10,
          paddingTop: 15,
          shadowColor: '#000000',
          shadowOpacity: 0.8,
          shadowRadius: 50,  
          elevation: 6,
          marginBottom: -10
        },
        textOldValue: {
          color: '#9B9B9B',
          fontSize: 15,   
          textDecorationStyle: 'dashed'       
        },
        textPromotionValue: {
          color: '#2E80FD',
          fontSize: 15, 
        },
        textInfoPackage: {
          color: '#2E80FD',
          fontSize: 10, 
        },
        miniBoxInfo: {
          width: '20%',
          flexDirection: 'column',
          justifyContent: 'center'
        },
        containerLike: {
          flexDirection: 'column',
          justifyContent: 'flex-start',
          flexWrap: 'wrap'
        },
        stars: {
          backgroundColor: '#FFFFFF',
          borderRadius: 50,
          width: 80,
          justifyContent: 'center',
          flexDirection: 'row',
          paddingVertical: 2
        },
        heart: {
          backgroundColor: '#FFFFFF',
          borderRadius: 50,
          width: 30,
          justifyContent: 'center',
          flexDirection: 'row',
          paddingHorizontal: 5,
          paddingVertical: 5,
          marginTop: 20
        },
        scoreCount: {
          color: '#287DFD',
          fontSize: 11,
          marginHorizontal: 5
        },
        starsCount: {
          color: '#A3A3A3',
          fontSize: 11
        },
      });

  return (
    <View style={styles.container}>

      <View style={styles.containerLike}>
        <View style={styles.stars}>
          <Icon name={'star'} size={15} color={'#FFCF13'}/>  
          <Text style={styles.scoreCount}>{scoreCount}</Text>
          <Text style={styles.starsCount}>({starsCount})</Text>
        </View>
        <View style={styles.heart}>
          <TouchableOpacity>
              <Icon 
              size={20} 
              color={'#c70c34'}
              onPress={handleToggleFavorite}
              name={"heart-o"}/>  
          </TouchableOpacity>     
        </View>
      </View>

      <View style={styles.containerInternal}>
        <View style={styles.boxPromotion}>
          <Text style={styles.textPromotion}> {infoPromotion} </Text>  
        </View>

        <View style={styles.boxValue}>
          <Text style={styles.textOldValue}> {oldValue} </Text>  
          <Text style={styles.textPromotionValue}> {promotionValue} </Text>  
          <View style={styles.miniBoxInfo}>
            <Text style={styles.textInfoPackage}> {infoPackage} </Text>  
          </View>          
        </View>




        <View style={styles.boxBk}>
       <Text style={styles.titleLocation}>{titleLocation}</Text>
       <Text style={styles.textPackage}>{dataPackage}</Text>

       <View style={styles.areaButtons}>
          <TouchableOpacity
            style={styles.btnDatail}
            activeOpacity={0.5}>
            <Text style={styles.btnDatailText}> {textBtnDetail} </Text>          
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnPurchase}
            activeOpacity={0.5}>
            <Text style={styles.btnPurchaseText}> {textBtnPurchase} </Text>          
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textDate}>{date}</Text>
        </View>        
      </View>      
      </View>      

      

    </View>
  );
}

