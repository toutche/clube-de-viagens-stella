import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import TitleBkPink from '../common/titleBkPink';
import StyleBkPink from './Styles/StyleBackgroundPink';
import ImgTopBkPink from '../common/ImgTopBkPink';

import Login from './Login';
import Access from './Access';
import Localization from './Localization';
import AddressNotFound from './AddressNotFound';
import CompleteAddress from './CompleteAddress';
import Register from './Register';
import InsertCode from './InsertCode';

export default function BasePink() {
  return (
    <View style={StyleBkPink.container}>
      <View style={StyleBkPink.divRoundedWhite}>
        <ImgTopBkPink img='local'/>
      </View>

      <View style={StyleBkPink.divPink}>
       {/*
          <Localization/>
          <AddressNotFound/>
          <CompleteAddress/>          
          <Register/>
          <InsertCode/>
       */}
       <InsertCode/>
      </View>
      
    </View>
  );
}