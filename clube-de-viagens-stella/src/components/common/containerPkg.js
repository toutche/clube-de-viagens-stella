import React from "react";
import { 
    View,
    Text,
    ImageBackground,
    StyleSheet
} from "react-native";
import ContainerData from "./containerData";



export default function ContainerPkg() {

    const image = { uri: "https://www.fashionbubbles.com/wp-content/blogs.dir/1/files/2020/12/ilhas-maldivas.png" };
    const styles = StyleSheet.create({
        container: {
          flex: 1,  
          height: 350,
          marginBottom: 50,         
        },
        image: {
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center"
        },
        text: {
          color: "#ffffff",
          fontSize: 42,
          lineHeight: 84,
          fontWeight: "bold",
          textAlign: "center",
        }
      });

  return (
    <View style={styles.container}>
        <ImageBackground 
            source={image} 
            resizeMode="stretch" 
            imageStyle={{ borderRadius: 20, height: "100%", width: "100%"}}
            style={styles.image}>
            <ContainerData/>
        </ImageBackground>
  </View>
  );
}

