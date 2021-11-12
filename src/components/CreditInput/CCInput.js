import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ViewPropTypes,
  Image
} from "react-native";
import defaultIcons from "./Icons";

const s = StyleSheet.create({
  baseInputStyle: {
    color: '#333',
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    borderColor: '#d1d1d1',
    marginBottom: 12,
  },
  baseTextStyle: {
    fontSize: 14.5,
    marginBottom: 4,
    left: 2
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 6,
    height: 35,
    width: 35
  }
});

export default class CCInput extends Component {
  static propTypes = {
    field: PropTypes.string.isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    keyboardType: PropTypes.string,

    status: PropTypes.oneOf(["valid", "invalid", "incomplete"]),

    containerStyle: ViewPropTypes.style,
    inputStyle: Text.propTypes.style,
    labelStyle: Text.propTypes.style,
    validColor: PropTypes.string,
    invalidColor: PropTypes.string,
    placeholderColor: PropTypes.string,

    onFocus: PropTypes.func,
    onChange: PropTypes.func,
    onBecomeEmpty: PropTypes.func,
    onBecomeValid: PropTypes.func,
    additionalInputProps: PropTypes.shape(TextInput.propTypes),
  };

  static defaultProps = {
    label: "",
    value: "",
    status: "incomplete",
    containerStyle: {},
    inputStyle: {},
    labelStyle: {},
    onFocus: () => { },
    onChange: () => { },
    onBecomeEmpty: () => { },
    onBecomeValid: () => { },
    additionalInputProps: {},
  };

  UNSAFE_componentWillReceiveProps = newProps => {
    const { status, value, onBecomeEmpty, onBecomeValid, field } = this.props;
    const { status: newStatus, value: newValue } = newProps;

    if (value !== "" && newValue === "") onBecomeEmpty(field);
    if (status !== "valid" && newStatus === "valid") onBecomeValid(field);
  };

  _onFocus = () => this.props.onFocus(this.props.field);
  _onChange = value => this.props.onChange(this.props.field, value);

  render() {
    const { label, value, placeholder, status, keyboardType,
      maxLength, containerStyle, inputStyle, customIcons, brand,
      validColor, invalidColor, placeholderColor,
      additionalInputProps } = this.props;

    const Icons = { ...defaultIcons, ...customIcons };

    return (
      <View style={[containerStyle]}>
        {!!label && <Text style={s.baseTextStyle}>{label}</Text>}
        <TextInput
          {...additionalInputProps}
          keyboardType={keyboardType}
          maxLength={maxLength}
          autoCapitalise="words"
          autoCorrect={false}
          style={[
            s.baseInputStyle,
            inputStyle,
            ((validColor && status === "valid") ? { color: validColor } :
              (invalidColor && status === "invalid") ? { color: invalidColor } :
                {}),
          ]}
          underlineColorAndroid={"transparent"}
          placeholderTextColor={placeholderColor}
          placeholder={placeholder}
          value={value}
          onFocus={this._onFocus}
          onChangeText={this._onChange} />
        {brand &&
          <Image style={[s.icon]}
            source={Icons[brand]} />
        }
      </View>
    );
  }
}
