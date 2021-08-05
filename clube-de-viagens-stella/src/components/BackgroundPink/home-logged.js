import React, { useState } from 'react';
import { 
    View,Text
} from 'react-native';


import Style from './Styles/StyleBackgroundPink';

export default function HomeLogged({ navigation, route }) {

  return (
    <View style={Style.container}>
        <Text>Logadoooo</Text>
    </View>
  );
}