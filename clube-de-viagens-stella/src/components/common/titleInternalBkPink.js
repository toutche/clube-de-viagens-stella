import React from 'react';
import { View, Text } from 'react-native';

import Style from './style/StyleCommon';


export default function TitleInternalBkPink(props) {
  return (
      <Text style={Style.titleInternalBKP}>
        {props.titlePage}
      </Text>     
  );
}