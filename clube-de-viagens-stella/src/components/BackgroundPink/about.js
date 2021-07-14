import * as React from 'react';
import { View, Text } from 'react-native';


import Title from '../common/titleBkPink';
import StyleBkPink from './Styles/StyleBackgroundPink';
import TermsConditionsStyle from './Styles/TermsConditionsStyle';


export default function About({ navigation, route }){

  return (
    <View style={StyleBkPink.container}>
      <Title titlePage="Sobre o Clube de Férias"/> 

      <View style={TermsConditionsStyle.container}>
        
       {/*} <View style={TermsConditionsStyle.item}>
            video Aqui!
        </View>

        <View style={TermsConditionsStyle.item}>
            <Text style={TermsConditionsStyle.text}>
            Ao acessar o site Stella Barros, concorda em cumprir estes termos de serviços.
            Todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento
            de todas as leis locais aplicáveis. Se você não concordar com algum desses termos,
            está proíbido de usar ou acessar este site. Os materiais contidos neste site são 
            protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
            </Text>
        </View>
        
        <View style={TermsConditionsStyle.item}>
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
        </View>*/}

      </View>
    </View>
  );
}
