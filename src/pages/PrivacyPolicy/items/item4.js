import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm4 = '4. Coleta de dados não previstos expressamente'
const text21 = ' Eventualmente, outros tipos de dados não previstos expressamente nesta Política de\
Privacidade poderão ser coletados, desde que sejam fornecidos com o consentimento do usuário, ou,\
ainda, que a coleta seja permitida com fundamento em outra base legal prevista em lei. '
const text22 = 'Em qualquer caso, a coleta de dados e as atividades de tratamento dela decorrentes\
serão informadas aos usuários do site.'
const subTitle3 = 'Consentimento na coleta'
const text23 = 'Durante o acesso ao aplicativo e às páginas do site, ou uso dos serviços do Clube de\
Férias, cabe a você, titular de dados, assegurar que as configurações do seu dispositivo portátil ou\
computador estejam configuradas de acordo com o seu consentimento em aceitar Cookies ou armazenamento\
dos seus dados pessoais. Lembrando que o uso de navegação anônima ou a não aceitação de Cookies,\
implicará que você não tenha uma navegação voltada exclusivamente aos seus interesses.'
const subTitle4 = 'Serviço de Marketing'
const text24 = 'O Clube de Férias não utilizará os dados fornecidos pelo usuário para fins de marketing,\
a não ser que tenham sido expressamente consentidos pelo titular dos dados.'
const text25 = 'Os serviços de marketing são oferecidos por meio de comunicações gratuitas sobre ofertas\
e serviços ao Cliente, de acordo com seu perfil no site. Esse serviço abrange e-mails, anúncios e além de\
nossos próprios sites e/ou sites e redes sociais de terceiros. Vale ressaltar que o titular de dados pode\
cancelar o serviço, a qualquer momento, solicitando a suspensão do seu consentimento através dos canais de contato.'

export default function item4() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm4}</Text>
                <Text style={Style.boxTerms}>
                    <FontAwesome
                        color={TEXT_COLOR_BKCOLORFUL}
                        size={9}
                        name={"circle"}
                    />
                    <Text style={Style.text}>{text21}</Text>
                    <Text style={Style.text}>{text22}</Text>
                </Text>
            </View>
            <View style={Style.itemInternal}>
                <Text style={Style.titleItem}>{subTitle3}</Text>
                <Text style={Style.text}>{text23}</Text>
            </View>
            <View style={Style.itemInternal}>
                <Text style={Style.titleItem}>{subTitle4}</Text>
                <Text style={Style.text}>{text24}</Text>
                <Text style={Style.text}>{text25}</Text>
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