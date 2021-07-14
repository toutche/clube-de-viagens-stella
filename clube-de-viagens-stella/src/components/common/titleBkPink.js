import React from 'react';
import { View, Text, Linking } from 'react-native';

import Style from './style/StyleCommon';


export default function TitleBkPink(props) {
  return (
      <Text style={Style.titleBKP}>
        {props.titlePage}
      </Text>     
  );
}
