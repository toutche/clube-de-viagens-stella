import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ViewPropTypes,
} from "react-native";

import CreditCard from "./CardView";
import CCInput from "./CCInput";
import { InjectedProps } from "./connectToState";

const s = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
  },
  halfView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});

export default class CreditCardInput extends Component {
  static propTypes = {
    ...InjectedProps,
    labels: PropTypes.object,
    placeholders: PropTypes.object,

    labelStyle: Text.propTypes.style,
    inputStyle: Text.propTypes.style,
    inputContainerStyle: ViewPropTypes.style,

    validColor: PropTypes.string,
    invalidColor: PropTypes.string,
    placeholderColor: PropTypes.string,

    cardImageFront: PropTypes.number,
    cardImageBack: PropTypes.number,
    cardScale: PropTypes.number,
    cardFontFamily: PropTypes.string,
    cardBrandIcons: PropTypes.object,

    additionalInputsProps: PropTypes.objectOf(PropTypes.shape(TextInput.propTypes)),
  };

  static defaultProps = {
    cardViewSize: {},
    labels: {
      name: "",
      number: "",
      expiry: "Validade",
      cvc: "Código de segurança",
      CPF: "",
      postalCode: "POSTAL CODE",
    },
    placeholders: {
      name: "Nome impresso no cartão",
      number: "Número do cartão",
      expiry: "Mês/Ano",
      cvc: "CVC",
      CPF: 'CPF do titular do cartão',
      postalCode: "34567",
    },
    validColor: "",
    invalidColor: "red",
    placeholderColor: "gray",
    additionalInputsProps: {},
  };

  _inputProps = field => {
    const {
      inputStyle, labelStyle, validColor, invalidColor, placeholderColor,
      placeholders, labels, values, status,
      onFocus, onChange, onBecomeEmpty, onBecomeValid,
      additionalInputsProps,
    } = this.props;

    return {
      inputStyle: [inputStyle],
      labelStyle: [labelStyle],
      validColor, invalidColor, placeholderColor,
      ref: field, field,

      label: labels[field],
      placeholder: placeholders[field],
      value: values[field],
      status: status[field],

      onFocus, onChange, onBecomeEmpty, onBecomeValid,

      additionalInputProps: additionalInputsProps[field],
    };
  };

  render() {
    const {
      cardImageFront, cardImageBack,
      values: { number, expiry, cvc, name, type }, focused,
      requiresName, requiresCVC, requiresPostalCode,
      cardScale, cardFontFamily, cardBrandIcons,
    } = this.props;

    return (
      <View style={s.container}>
        <CCInput {...this._inputProps("number")}
          customIcons={cardBrandIcons}
          brand={type}
          maxLength={19}
          keyboardType="numeric" />
        {requiresName &&
          <CCInput {...this._inputProps("name")}
            maxLength={30} />}
        <View style={s.halfView}>
          <CCInput {...this._inputProps("expiry")}
            containerStyle={{ flex: .38 }}
            maxLength={5}
            keyboardType="numeric" />
          {requiresCVC &&
            <CCInput {...this._inputProps("cvc")}
              containerStyle={{ flex: .58 }}
              maxLength={3}
              keyboardType="numeric" />}
        </View>
        <CCInput {...this._inputProps("CPF")}
          maxLength={11}
          keyboardType="numeric" />
        {requiresPostalCode &&
          <CCInput {...this._inputProps("postalCode")}
            keyboardType="numeric" />}
        <CreditCard focused={focused}
          brand={type}
          scale={cardScale}
          fontFamily={cardFontFamily}
          imageFront={cardImageFront}
          imageBack={cardImageBack}
          customIcons={cardBrandIcons}
          name={requiresName ? name : " "}
          number={number}
          expiry={expiry}
          cvc={cvc} />
      </View>
    );
  }
}
