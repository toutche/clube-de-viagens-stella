 

import React, { useState } from 'react';
import { 
    View, 
    Text, 
    FlatList
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'

import Title from '../common/titleBkPink';
import StyleBkPink from './Styles/StyleBackgroundPink';
import TermsConditionsStyle from './Styles/TermsConditionsStyle';


export default function TermsConditions() {
  return (
    <View style={StyleBkPink.container}>
      <Title titlePage="Termos e condições de uso"/> 

      <View style={TermsConditionsStyle.container}>
        
    <View style={TermsConditionsStyle.item}>
        <Text style={TermsConditionsStyle.titleItem}>
          1. Termos
        </Text>
        <Text style={TermsConditionsStyle.text}>
          Ao acessar o site Stella Barros, concorda em cumprir estes termos de serviços.
          Todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento
          de todas as leis locais aplicáveis. Se você não concordar com algum desses termos,
          está proíbido de usar ou acessar este site. Os materiais contidos neste site são 
          protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
        </Text>
    </View>
        
    <View style={TermsConditionsStyle.item}>
        <Text style={TermsConditionsStyle.titleItem}>
          2. Uso de licença
        </Text>
        <Text style={TermsConditionsStyle.text}>
          É concedida permissão para baixar temporáriamente uma cópia dos materiais 
          (informações ou software) no site Stella Barros, apenas para visualização
          transitória pessoal e não comercial. Esta é a concessão de uma licença, 
          não uma transferência de título e, sob esta licença, você nã pode:
        </Text>

        <Text style={TermsConditionsStyle.text}>
          É concedida permissão para baixar temporáriamente uma cópia dos materiais 
          (informações ou software) no site Stella Barros, apenas para visualização
          transitória pessoal e não comercial. Esta é a concessão de uma licença, 
          não uma transferência de título e, sob esta licença, você nã pode:
        </Text>

        <View style={TermsConditionsStyle.boxTerms}>
            <Icon style={TermsConditionsStyle.iconTerms} name={'circle'}/> 
            <Text style={TermsConditionsStyle.text}>
                Modificar ou copiar os materiais;
            </Text>
        </View>

        <View style={TermsConditionsStyle.boxTerms}>
            <Icon style={TermsConditionsStyle.iconTerms} name={'circle'}/> 
            <Text style={TermsConditionsStyle.text}>
                Usar os materiais para qualquer
                finalidade comercialou para exibição pública (comercial ou não comercial); 
            </Text>
        </View>
        <View style={TermsConditionsStyle.boxTerms}>
            <Icon style={TermsConditionsStyle.iconTerms} name={'circle'}/> 
            <Text style={TermsConditionsStyle.text}>
                Tentar descompilar ou fazer engenharia reversa de qualquer 
                software contido no site Stella Barros: remover quaisquer 
                direitos autorais ou outras notações de propriedade dos materiais;
            </Text>
        </View>

    </View>

      </View>
    </View>
  );
}
