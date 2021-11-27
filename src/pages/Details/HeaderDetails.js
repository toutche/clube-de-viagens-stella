import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Hide from '../../components/Hide';
import LikeIcon from '../../components/LikeIcon';
import ShareIcon from '../../components/ShareIcon';
import { formatMoneyToBRL } from '../../utils';
import CustomIcon from "../../components/CustomIcon";
import { AntDesign, FontAwesome } from '@expo/vector-icons';

const HeaderDetails = ({ item, navigation, shareOpen }) => {

  console.log(item)

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.image }}
      />

      <CustomIcon
        onPress={() => navigation.goBack()}
        size={26}
        type={AntDesign}
        name={'arrowleft'}
        containerStyle={styles.icon}
      />

      <Hide containerStyle={styles.hide} />

      <LikeIcon containerStyle={styles.like} />

      <ShareIcon
        shareOpen={shareOpen}
        containerStyle={styles.share}
      />

      <View style={styles.content}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Economize até R$ {formatMoneyToBRL(item.saveMoney)}</Text>
        </View>

        <Text style={{
          color: '#287dfd',
          fontSize: 14,
          marginVertical: -4
        }}>A partir de</Text>

        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          <Text style={{
            color: '#777',
            fontSize: 16,
            textDecorationLine: 'line-through'
          }}>R$ {formatMoneyToBRL(item.oldPrice)}</Text>

          <Text style={{
            fontSize: 12,
            color: '#287dfd',
            marginHorizontal: 2
          }}>●</Text>

          <Text style={{
            color: '#287dfd',
            fontSize: 16
          }}>R$ {formatMoneyToBRL(item.price)}</Text>

          <Text style={{
            fontSize: 16,
            color: '#287dfd',
            marginHorizontal: 3,
            bottom: 1
          }}>|</Text>

          <View style={{
            bottom: 1.5
          }}>
            <Text style={{
              fontSize: 10,
              marginBottom: -2,
              color: '#287dfd'
            }}>por</Text>
            <Text style={{
              fontSize: 10,
              marginTop: -2,
              color: '#287dfd'
            }}>pessoa</Text>
          </View>
        </View>
        <Text style={{
          color: '#777',
          fontSize: 13,
          marginTop: -4
        }}>Preço exclusivo para assinantes</Text>

        <CustomButton
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          title={'Reservar Agora'}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    left: 5,
    top: 25,
    padding: 10,
    position: 'absolute'
  },
  headerContent: {
    backgroundColor: '#287dfd',
    borderRadius: 100,
    width: undefined,
    paddingHorizontal: 15,
    alignSelf: 'center',
    top: -13,
    position: 'absolute',
    paddingVertical: 3
  },
  headerTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 12.5
  },
  content: {
    top: -50,
    borderRadius: 20,
    elevation: 5,
    width: '90%',
    paddingTop: 15,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  button: {
    height: 45,
    width: '70%',
    alignSelf: 'center',
    bottom: -45 / 2,
    elevation: 5,
    position: 'absolute',
    borderRadius: 100,
    backgroundColor: '#287dfd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 16,
    color: 'white',
  },
  hide: {
    position: 'absolute',
    top: 40,
    right: 15,
    backgroundColor: 'rgba(232,188,13,.7)',
    height: 45,
    width: 45,
    borderRadius: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  like: {
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 15,
    top: 95,
    position: 'absolute',
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  share: {
    height: 45,
    width: 45,
    borderRadius: 100,
    right: 15,
    top: 150,
    position: 'absolute',
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.2,
  }
})

export default HeaderDetails