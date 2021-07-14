import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import TitleInternal from '../../common/TitleInternalBkPink'

export default function Localization() {
  return (
    <View>
      <TitleInternal titlePage="Estamos buscando a sua localização"/>  
      <StatusBar style="auto" />    
    </View>
  );
}
