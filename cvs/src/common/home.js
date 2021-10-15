import * as React from "react";
import { ImageBackground, Image, StyleSheet, Button, View, Text } from "react-native";


//const image = { uri: "https://docs.expo.io/static/images/tutorial/splash.png" };
const image = require("../../../assets/img/img1.png");

export default function HomeScreen({ navigation, route }) {
    React.useEffect(() => {
      if (route.params?.post) {
        // Publique atualizado, faça algo com `route.params.post`
        // Por exemplo, envie a postagem para o servidor
      }
    }, [route.params?.post]);
  
    return (
        <>
        <View style={styles.container}>
            <Image
            style={styles.imgbg}
            source={image}
            />
        </View>
        <View style={styles.container}>
            <Button
            title="Create post"
            onPress={() => navigation.navigate("CreatePost")}
            />
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        </View>
        </>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
    },
    imgbg: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch"
    },
  });