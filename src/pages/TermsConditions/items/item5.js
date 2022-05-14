import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import {
    TEXT_COLOR_BKCOLORFUL,
    FONT_SIZE_SUBTITLE,
    FONT_SIZE_BODY
} from "../../../utils/variables";

const titleTerm1 = '5. Dos serviços ou produtos'
const text1 = 'A plataforma poderá disponibilizar para o usuário um conjunto específico de funcionalidades e' +
'ferramentas para otimizar o uso dos serviços e produtos.'
const text2 = 'Na plataforma, os serviços ou produtos oferecidos estão descritos e apresentados com o maior' +
'grau de exatidão, contendo informações sobre suas características, qualidades, quantidades,' +
'composição, preço, garantia, prazos, entre outros dados.'
const text3 = 'Os materiais exibidos no aplicativo podem incluir erros técnicos, tipográficos ou fotográficos. A' +
'Stella Barros não garante que qualquer material em seu site seja preciso, completo ou atual. A' +
'Stella Barros pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem' +
'aviso prévio.'
const text4 = 'Antes de finalizar a compra de determinado serviço, o usuário deverá se informar sobre as suas' +
'especificações.'
const text5 = 'Termos e condições adicionais podem ser aplicáveis à sua reserva e à compra de produtos e' +
'serviços relativos a viagens que você selecionar. Leia os termos e condições adicionais de cada' +
'reserva atentamente. Especialmente na compra de passagens aéreas, certifique-se de que você' +
'tenha lido todos os termos e condições de transporte do Fornecedor, encontrados no site do' +
'Fornecedor, isso porque PODEM SER APLICADAS MULTAS EM CASO DE REMARCAÇÃO OU' +
'CANCELAMENTO DOS BILHETES QUE, A DEPENDER DO CASO, PODERÁ CHEGAR À' +
'TOTALIDADE DO VALOR DE AQUISIÇÃO DOS BILHETES, TORNANDO-OS NÃO' +
'REEMBOLSÁVEIS. O erro no preenchimento do nome, sobrenome ou agnome do passageiro' +
'poderá ser corrigido nos termos da legislação vigente, desde que não altere a titularidade da' +
'passagem aérea, que continuará sendo pessoal e intransferível. Você poderá desistir da' +
'passagem aérea adquirida, sem ônus, desde que comunique ao Clube de Férias, através de' +
'seus canais de atendimento on-line, no prazo de 24 (vinte e quatro) horas a contar do' +
'recebimento da confirmação de compra. A desistência somente poderá ser exercida desde que' +
'a compra seja realizada com antecedência superior a 7 (sete) dias em relação à data de' +
'embarque. Em caso de reembolso de passagens aéreas, o Clube de Férias solicitará o' +
'reembolso junto ao Fornecedor, caso aplicável, dentro do prazo de 7 (sete) dias, estando o' +
'recebimento do reembolso sujeito aos prazos de processamento do Fornecedor, regras tarifárias,' +
'do banco emissor do seu meio de pagamento e da operadora do cartão de crédito. Fique atento' +
'às regras sobre bagagens, cujos limites e valores são informados pelo Fornecedor.'
const text6 = 'Em caso de não comparecimento ou cancelamento, você pode ter direito a um reembolso dos' +
'impostos e taxas incluídos no pacote de viagens e/ou hospedagem. Nos casos em que você for' +
'elegível para um reembolso, você pode solicitá-lo ao Atendimento ao Cliente Clube de Férias,' +
'que encaminhará a solicitação ao fornecedor em seu nome.'
const text7 = 'Nos casos de pacotes de viagens, não será possível solicitar o cancelamento/reembolso de' +
'serviços isolados, que compõem o pacote de viagens, o cancelamento de quaisquer destes' +
'serviços implicará no cancelamento automático do pacote de viagem contratado em sua' +
'integralidade, respeitando as regras de cancelamento de cada fornecedor envolvido.'
const text8 = 'Você concorda em cumprir com todos os termos e condições de compra impostos pelos' +
'fornecedores com os quais escolher negociar, incluindo, entre outros, o pagamento de todos os' +
'valores nas datas de vencimento e a observância das regras e restrições do fornecedor, relativas' +
'à disponibilidade e ao uso de passagens, produtos ou serviços. A passagem aérea só estará' +
'garantida após a conclusão da compra e a emissão dos bilhetes. As companhias aéreas e' +
'demais fornecedores poderão fazer alterações nos preços sem nenhum aviso prévio.' +
'Reservamo-nos o direito de cancelar a sua reserva caso o pagamento integral não seja recebido' +
'em tempo hábil.'
const text9 = 'Alguns hotéis podem exigir a apresentação de um cartão de crédito ou depósito em dinheiro no' +
'momento do check-in para cobrir despesas adicionais que poderão incorrer durante a estadia.' +
'Esses depósitos não têm nenhuma relação com qualquer pagamento feito ao Clube de Férias' +
'para sua reserva de hotel.'
const text10 = 'O Clube de Férias não se responsabiliza pelos custos incorridos em caso de realocação.'
const text11 = 'Você reconhece que alguns fornecedores externos, que oferecem determinados serviços e/ou' +
'atividades, poderão exigir que você assine um termo de responsabilidade antes de usufruir de' +
'um serviço e/ou atividade oferecida. Você está ciente de que qualquer violação das regras e' +
'restrições dos fornecedores pode resultar no cancelamento da(s) sua(s) reserva(s), na proibição' +
'de seu acesso aos respectivos produtos ou serviços, na perda dos valores pagos pela(s)' +
'reserva(s) e/ou no lançamento de débitos em conta corrente devido aos custos por nós incorridos' +
'pela violação.'
const titleTerm2 = 'RESERVAS DE HOTEL PRÉ-PAGAS'
const text12 = 'As tarifas de quarto exibidas no Clube de Férias são negociadas com antecedência com nossos' +
'parceiros. Você permite que o Clube de Férias ofereça reservas pelo preço total anunciado, o' +
'qual pode ser acrescido de outros custos incorridos pelos parceiros ou pelos hotéis, incluindo,' +
'sem limitação, os tributos eventualmente incidentes sobre os serviços do Clube de Férias. Você' +
'concorda com o débito em seu meio de pagamento realizado pelo Clube de Férias no valor do' +
'preço total de reserva. Ao enviar sua solicitação de reserva, você autoriza o Clube de Férias a' +
'facilitar o processo de reservas dos quartos de hotéis em seu nome, incluindo acordos com hotéis' +
'sobre as modalidades de pagamento.'
const text13 = 'Você pode cancelar ou modificar a sua reserva pré-paga. No entanto, será cobrada uma taxa de' +
'cancelamento ou alteração, de acordo com o estabelecido pelo hotel e indicado nas regras e' +
'restrições aplicáveis à reserva. No caso de cancelamento ou alteração de reserva após o término' +
'do período estabelecido na política de cancelamento aplicável ao quarto reservado, que é' +
'definida pelo hotel e, portanto, pode variar de um hotel para outro (normalmente de 24 a 72 horas' +
'antes da data de chegada), você estará sujeito à cobrança do mesmo montante cobrado pelas' +
'diárias, encargos de restituição de impostos e taxas de serviços. No caso de no-show na data' +
'da primeira diária, se houver a intenção de realizar o check-in nas datas subsequentes, você' +
'deverá entrar em contato conosco para confirmar a alteração na sua reserva até a data da' +
'primeira diária, para evitar o cancelamento integral da reserva.'
const text14 = 'AS SOLICITAÇÕES DE REEMBOLSO POR NO-SHOW OU CHECK-OUT ANTECIPADO' +
'DEVEM SER ENVIADAS DENTRO DE 60 (SESSENTA) DIAS DA DATA DO NO-SHOW OU' +
'CHECK-OUT.'
const text15 = 'Você aceita pagar todas as taxas de cancelamento ou alteração nas quais incorrer. Em alguns' +
'casos, determinados hotéis não permitem o cancelamento ou alteração de reservas após a sua' +
'realização, conforme indicado nas regras e restrições da reserva. Você concorda em respeitar' +
'os Termos de uso aplicáveis às reservas pré-pagas.'
const text16 = 'Em algumas jurisdições fiscais, os impostos sobre vendas, utilização e ocupação de hotéis' +
'incidem sobre os valores cobrados pelos serviços prestados (taxa de conveniência e/ou de' +
'serviço).'
const text17 = 'Não é permitido fazer reservas on-line para mais de seis quartos no mesmo hotel/datas de' +
'estadia. Se quiser reservar sete ou mais quartos, entre em contato com a nossa central de' +
'atendimento. Após analisar sua solicitação, um de nossos atendentes entrará em contato com' +
'você para concluir a reserva. Você poderá ter que assinar um contrato por escrito e/ou pagar um' +
'depósito não reembolsável.'
const titleTerm3 = 'VIAGENS INTERNACIONAIS'
const text18 = 'Você é responsável por garantir que todos os requisitos de entrada em outro país foram' +
'atendidos e que seus documentos de viagem, como passaportes e vistos (de trânsito, negócios,' +
'turismo e outros), estão em plena ordem e que quaisquer outros requisitos de entrada em outro' +
'país foram cumpridos. O Clube de Férias não tem conhecimento especializado sobre os' +
'documentos de viagem nem sobre os requisitos para a entrada em outros países. Solicitamos' +
'que, antes de reservar viagens para destinos internacionais, os clientes consultem as proibições,' +
'avisos, anúncios e recomendações de viagem, emitidos pelas autoridades governamentais' +
'competentes.'
const text19 = 'Passaporte e visto: consulte a embaixada ou consulado apropriado para obter informações. Os' +
'requisitos estão sujeitos a alterações. Por isso, verifique sempre se há informações atualizadas' +
'antes de fazer sua reserva e sair do país. Não nos responsabilizamos se sua entrada em voos' +
'ou outros países for negada em virtude da falta de passaporte, visto ou outros documentos de' +
'viagem, válidos e apropriados, exigidos pelas companhias aéreas, autoridades ou país, incluindo' +
'os países nos quais você estará apenas em trânsito. Isso inclui todas as escalas feitas pela' +
'aeronave, mesmo que você não saia da aeronave ou do aeroporto.'
const text20 = 'Você é responsável por verificar os requisitos para visitar os países europeus, membros do' +
'Acordo de Schengen, que podem incluir a obtenção de visto e seguro de viagem obrigatórios, de' +
'acordo com os Regulamentos (CE) nº 539/2001 e (CE) nº 810/2009, emitidos pelo Parlamento' +
'Europeu.'
const text21 = 'Saúde: as recomendações relativas à vacinação antes de viagens podem sofrer alterações. Por' +
'isso, consulte seu médico para obter informações atualizadas antes de viajar. Você é' +
'responsável por cumprir com todos os requisitos relativos à saúde para a entrada em um país,' +
'por tomar todas as vacinas e medicamentos recomendados e por seguir todas as' +
'recomendações médicas pertinentes a sua viagem.'
const text22 = 'AO OFERECER RESERVAS PARA PRODUTOS DE VIAGEM, ESPECIALMENTE PARA' +
'DESTINOS INTERNACIONAIS, O CLUBE DE FÉRIAS NÃO DECLARA OU GARANTE QUE' +
'SEJA ACONSELHÁVEL OU LIVRE DE RISCOS VIAJAR PARA ESSES DESTINOS. ELE' +
'TAMBÉM NÃO SE RESPONSABILIZA PELO PAGAMENTO DE INDENIZAÇÕES OU' +
'PREJUÍZOS DECORRENTES DE VIAGENS PARA ESSES DESTINOS. '

export default function item5() {
    return (
        <>
            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm1}</Text>
                <Text style={Style.text}>{text1}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text2}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text3}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text4}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text5}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text6}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text7}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text8}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text9}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text10}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text11}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm2}</Text>
                <Text style={Style.text}>{text12}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text13}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text14}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text15}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text16}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text17}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.titleItem}>{titleTerm3}</Text>
                <Text style={Style.text}>{text18}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text19}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text20}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text21}</Text>
            </View>

            <View style={Style.item}>
                <Text style={Style.text}>{text22}</Text>
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
    linkBold: {
        color: TEXT_COLOR_BKCOLORFUL,
        fontSize: FONT_SIZE_BODY,
        fontWeight: "bold",
        top: 4
    },
})