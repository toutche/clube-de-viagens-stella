import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons';

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";


const titleTerm3 = '3. Cookies'
const text12 = ' Cookies são pequenos arquivos de texto baixados automaticamente em seu dispositivo quando você acessa e navega por um site. \
Eles servem, basicamente, para que seja possível identificar dispositivos, atividades e preferências de usuários. Os cookies não permitem \
que qualquer arquivo ou informação sejam extraídos do disco rígido do usuário, não sendo possível, ainda, que, por meio deles, se tenha \
acesso a informações pessoais que não tenham partido do usuário ou da forma como utiliza os recursos do site. '

const topic1 = 'a. Cookies'
const text13 = 'Os cookies do site são aqueles enviados ao computador ou dispositivo do usuário e administrado exclusivamente pelo site. \
As informações coletadas por meio destes cookies são utilizadas para melhorar e personalizar a experiência do usuário, sendo que alguns \
cookies podem, por exemplo, ser utilizados para lembrar as preferências e escolhas do usuário, bem como para o oferecimento de conteúdo personalizado. '

const topic2 = 'b. Gestão de cookies'
const text14 = 'O usuário poderá se opor ao registro de cookies pelo site, bastando que desative esta opção no seu próprio navegador. \
Mais informações sobre como fazer isso em alguns dos principais navegadores utilizados hoje podem ser acessadas a partir dos seguintes links: '

const text15 = 'Internet Explorer: '
const link2 = 'https://support.microsoft.com/pt-br/help/17442/windows-internet-explorer-delete-manage-cookies'

const text16 = 'Safari: '
const link3 = 'https://support.apple.com/pt-br/guide/safari/sfri11471/mac'

const text17 = 'Google Chrome: '
const link4 = 'https://support.google.com/chrome/answer/95647?hl=pt-BR&hlrm=pt'

const text18 = 'Mozila Firefox: '
const link5 = 'https://support.mozilla.org/pt-BR/kb/ative-e-desative-os-cookies-que-os-sites-usam'

const text19 = 'Opera: '
const link6 = 'https://www.opera.com/help/tutorials/security/privacy/'

const text20 = 'A desativação dos cookies, no entanto, pode afetar a disponibilidade de algumas ferramentas e\
funcionalidades do site, comprometendo seu correto e esperado funcionamento. Outra consequência possível é\
remoção das preferências do usuário que eventualmente tiverem sido salvas, prejudicando sua experiência.'


export default function item3() {
    return (
        <>
         <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm3}</Text>
                <Text style={Style.boxTerms}>
                    <FontAwesome 
                    color={TEXT_COLOR_BKCOLORFUL} 
                    size={9} name={"circle"} 
                    /> 
                    <Text style={Style.text}>{text12}</Text>
                </Text>
            </View>
            <View style={Style.itemInternal}>
                <Text style={Style.text}>{topic1}</Text>
                <Text style={Style.boxTerms}>
                    <Text style={Style.text}>{text13}</Text>
                </Text>
            </View>
            <View style={Style.itemInternal}>
                <Text style={Style.text}>{topic2}</Text>
                <Text style={Style.boxTerms}>
                    <Text style={Style.text}>{text14}</Text>
                </Text>
            </View>

            <View style={Style.itemInternal}>                
                <Text style={Style.text}>{text15}</Text>
                <TouchableOpacity>
                    <Text style={Style.links}>{link2}</Text>
                </TouchableOpacity>
            </View>
            <View style={Style.itemInternal}>                
                <Text style={Style.text}>{text16}</Text>
                <TouchableOpacity>
                    <Text style={Style.links}>{link3}</Text>
                </TouchableOpacity>
            </View>
            <View style={Style.itemInternal}>                
                <Text style={Style.text}>{text17}</Text>
                <TouchableOpacity>
                    <Text style={Style.links}>{link4}</Text>
                </TouchableOpacity>
            </View>
            <View style={Style.itemInternal}>                
                <Text style={Style.text}>{text18}</Text>
                <TouchableOpacity>
                    <Text style={Style.links}>{link5}</Text>
                </TouchableOpacity>
            </View>
            <View style={Style.itemInternal}>                
                <Text style={Style.text}>{text19}</Text>
                <TouchableOpacity>
                    <Text style={Style.links}>{link6}</Text>
                </TouchableOpacity>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text20}</Text>
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
    links: {
        textDecorationLine: 'underline',
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: 12,
        flexWrap:"wrap",
        paddingLeft: 5,
        margin: -5,
    }
})