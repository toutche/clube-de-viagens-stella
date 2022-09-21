import React from 'react';
import { Switch, View, StyleSheet, Text } from 'react-native';
import { FONT_DEFAULT_BOLD_STYLE, FONT_DEFAULT_STYLE, PRIMARY_COLOR, SECOND_COLOR } from '../../utils/variables';
import { MaterialCommunityIcons, SimpleLineIcons } from "@expo/vector-icons";

export default ({
    textSwitchName,
    iconName,
    iconSize,
    iconType = 'Material',
    trackColorFalse,
    trackColorTrue,
    isEnabled,
    thumbColorTrue,
    thumbColorFalse,
    toggleSwitchFunction,
    textStyle,
    textAndIconWrapper,
    switchWrapperStyle,
    color = PRIMARY_COLOR,
}) => {
    const Icon = iconType === 'Material'
        ? MaterialCommunityIcons
        : iconType === 'SimpleLine'
        && SimpleLineIcons

    return (
        <View style={switchWrapperStyle}>
          <View style={textAndIconWrapper}>
            <Icon name={iconName} size={iconSize} color={color} />
            <Text style={[styles.text, textStyle]}>
              {textSwitchName}
            </Text>
          </View>
          <Switch
            trackColor={{ false: trackColorFalse, true: trackColorTrue }}
            thumbColor={isEnabled ? thumbColorTrue : thumbColorFalse}
            onValueChange={toggleSwitchFunction}
            value={isEnabled}
          />
        </View>
    )
  }

  const styles = StyleSheet.create({
    text: {
      color: PRIMARY_COLOR,
      fontFamily: FONT_DEFAULT_STYLE,
    },
    textBold: {
      fontFamily: FONT_DEFAULT_BOLD_STYLE,
    },
  });