import React from 'react';
import { View, Text } from 'react-native';

import Style from './style/StyleCommon';

export default function TitleInternalBkWhite(props) {
  return (
      <Text style={Style.titleInternalBKW}>
        {props.titlePage}
      </Text>     
  );
}
