import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import CustomIcon from '../../components/CustomIcon';
import { useFilter } from '../../contexts/filter';

export default ({ data, navigation }) => {
  const { isVisibleMenu, setVisibleMenu } = useFilter()
  return (
        <View style={styles.container}>
            <CustomIcon
                onPress={() => {
                        navigation.goBack()
                        setVisibleMenu(!isVisibleMenu)
                    }
                }
                size={26}
                color={"#222"}
                type={AntDesign}
                name={'arrowleft'}
                containerStyle={styles.icon}
            />

            <Image source={{ uri: data?.data?.image_header }} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        aspectRatio: 1.1,
        width: "100%",
        height: undefined,
        marginBottom: 5,
    },
    icon: {
        left: 5,
        top: 28,
        padding: 10,
        zIndex: 999,
        position: 'absolute'
    },
})

