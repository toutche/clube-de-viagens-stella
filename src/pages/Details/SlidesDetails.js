import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import CustomButton from '../../components/CustomButton';
import Hide from '../../components/Hide';
import LikeIcon from '../../components/LikeIcon';
import ShareIcon from '../../components/ShareIcon';

const SlidesDetails = ({ item }) => {

  console.log(item)

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{ uri: item.image }}
      />
      <Hide containerStyle={styles.hide} />

      <LikeIcon containerStyle={styles.like} />

      <ShareIcon containerStyle={styles.share} />

      <View style={styles.content}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>Economize até R$ 2.000,00</Text>
        </View>

        <CustomButton
          containerStyle={styles.button}
          titleStyle={styles.textButton}
          title={'Reservar agora'}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerContent: {
    backgroundColor: '#287dfd',
    borderRadius: 100,
    width: undefined,
    paddingHorizontal: 15,
    alignSelf: 'center',
    top: -13,
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
    height: 300,
    alignSelf: 'center',
    backgroundColor: 'white'
  },
  button: {
    height: 45,
    width: '60%',
    alignSelf: 'center',
    bottom: 0,
    borderRadius: 100,
    backgroundColor: '#287dfd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 15,
    color: 'white',
  },
  hide: {
    position: 'absolute',
    top: 30,
    right: 15,
    backgroundColor: '#e8bc0d',
    paddingVertical: 1,
    paddingHorizontal: 15,
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
    top: 65,
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
    top: 120,
    position: 'absolute',
    elevation: 5,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.5,
  }
})

export default SlidesDetails