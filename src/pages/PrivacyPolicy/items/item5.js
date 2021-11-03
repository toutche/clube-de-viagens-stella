import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";


const titleTerm5 = '5. Compartilhamento de dados pessoais com terceiros'
const text26 = ' O Clube de Férias poderá compartilhar seus dados com terceiros nas hipóteses abaixo elencadas:'
const subText6 = [
    '- Quando necessário à prestação do serviço, como, por exemplo, com instituições financeiras e demais empresas\
    parceiras, que atuem em conjunto com o Clube de Férias em suas atividades empresariais;',
    '- Com as demais empresas de seu grupo empresarial, existentes ou a serem constituídas, direta ou indiretamente controladas pelo Clube de Férias, desde que respeitadas as condições aqui previstas;',
    '- Com empresas parceiras do Clube de Férias, para fins promocionais, publicitários e estatísticos, sempre que o\
    usuário tiver consentido em receber comunicações comerciais baseadas em seus interesses;',
    '- Para proteção dos interesses do Clube de Férias em qualquer espécie de conflito, inclusive demandas judiciais;',
    '- No caso de transações e alterações societárias envolvendo o Clube de Férias, hipótese em que a transferência das informações será necessária para a continuidade dos serviços; ou',
    '- Mediante ordem judicial ou pelo requerimento de autoridades administrativas que detenham competência legal para sua requisição.'
]
const text27 = 'Em qualquer caso, o compartilhamento de dados pessoais observará todas as leis e regras aplicáveis, \
buscando sempre garantir a segurança dos dados de nossos usuários, observados os padrões técnicos empregados no mercado.'
const text28 = 'O Clube de Férias disponibiliza seus dados a terceiros, por meio de contrato, para a execução das \
atividades citadas nessa política. Nesta formalização, o terceiro compromete-se a não fazer usos diferentes dos aqui \
apresentados, bem como também, ao término do contrato entre o Clube de Férias e os terceiros, esses comprometem-se a \
excluir os dados e interromper qualquer uso.'

const subTitle5 = 'Transferência internacional de dados'
const text29 = 'O Clube de Férias poderá compartilhar os dados fornecidos pelo titular de dados com parceiros e terceiros, dentro do território nacional ou internacional, sempre respeitando às finalidades do tratamento de dados devido ao seu compartilhamento, sendo certo que, para tal, o Clube de Férias solicitará seu consentimento.'
const text30 = 'Devido à internet ser um sistema global, certos serviços oferecidos pelo Clube de Férias podem demandar a transferência dos seus dados para outros países. Nessas situações, os dados são tratados de acordo com a LGPD (Lei Geral de Proteção de Dados) e demais legislações de proteção, como por exemplo a GDPR (General Data Protection Regulation). Deste modo, tomamos medidas para garantir que quaisquer informações coletadas sejam tratadas com segurança, de acordo com nossas políticas e cláusulas padrão nos contratos com fornecedores e prestadores de serviço.'

export default function item5() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm5}</Text>
                <Text style={Style.boxTerms}>
                    <FontAwesome
                        color={TEXT_COLOR_BKCOLORFUL}
                        size={9}
                        name={"circle"}
                    />
                    <Text style={Style.text}>{text26}</Text>
                </Text>
            </View>
            <View style={Style.item}>
                {subText6.map((item, index) => (
                    <Text key={index} style={Style.text}>{item}</Text>
                ))}
            </View>
            <View style={Style.item}>
                <Text style={Style.text}>{text27}</Text>
                <Text style={Style.text}>{text28}</Text>
            </View>
            <View style={Style.itemInternal}>
                <Text style={Style.titleItem}>{subTitle5}</Text>
                <Text style={Style.text}>{text29}</Text>
                <Text style={Style.text}>{text30}</Text>
            </View>

        </>
    )
}

const Style = StyleSheet.create({
    titleItem: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: FONT_SIZE_SUBTITLE - 2,
        fontWeight: "bold"
    },
    text: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: FONT_SIZE_BODY
    },
    item: {
        marginHorizontal: 20,
        paddingBottom: 15,
    },
    itemInternal: {
        marginHorizontal: 20,
        marginLeft: 30,
        paddingBottom: 15,
    },
})