import { spacing, useTheme } from '@shopify/restyle'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { TextInputProps as RNTextInputProps, TextInput as RNTextInput, TouchableOpacity } from 'react-native'
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Theme } from '../theme'
import { ColorType, TextStyleType, ViewStyleType } from '../types'
import Box from './Box'
import Text from './Text'
import Icon from 'react-native-vector-icons/Ionicons'

export interface TextInputProps {
  onChangeText?: (input: string) => void
  onBlur?: (e: any) => void
  placeholder?: string
  placeholderStyle?: TextStyleType
  placeholderColor?: ColorType
  backgroundColors?: ColorType
  containerStyle?: ViewStyleType
  label?: string
  labelStyle?: TextStyleType
  labelColor?: ColorType
  textInputProps?: RNTextInputProps
  textInputRef?: RefObject<RNTextInput>
  innerLabel?: boolean
  useValidation?: { isValid?: boolean; showValidationIcon?: boolean; invalidInputMessage?: string }
  secureTextEntry?: boolean
  secureTextEntryShowHideIcon?: boolean
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [labelHeight, setLabelHeight] = useState(0)
  const [secureTextEntry, setSecureTextEntry] = useState(props.secureTextEntry ? props.secureTextEntry : false)
  const { colors, themeConstants, textVariants } = useTheme<Theme>()
  const { color, ...secondaryTextVariant } = textVariants.secondary
  return (
    <Box style={props.containerStyle}>
      <Box
        {...(props.innerLabel && {
          borderRadius: 10,
          backgroundColor: 'lightColor',
          padding: 's',
          paddingLeft: 'm',
          paddingRight: 'm',
        })}>
        {props.label && (
          <Text
            variant="secondary"
            {...(!props.innerLabel && { marginBottom: 's' })}
            style={[{ color: props.labelColor }, props.labelStyle]}
            onLayout={(e) => {
              if (props.innerLabel) {
                setLabelHeight(e.nativeEvent.layout.height)
              }
            }}>
            {props.label}
          </Text>
        )}
        <Box
          {...(!props.innerLabel && {
            borderRadius: 10,
            backgroundColor: 'lightColor',
            padding: 'm',
            paddingLeft: 'm',
            paddingRight: 'm',
          })}
          flexDirection="row">
          <RNTextInput
            ref={props.textInputRef}
            placeholder={props.placeholder}
            placeholderTextColor={props.placeholderColor ? props.placeholderColor : colors.subduedText}
            style={[{ flex: 1, color: colors.darkColor }, secondaryTextVariant, props.placeholderStyle]}
            onChangeText={(input) => {
              props.onChangeText && props.onChangeText(input)
            }}
            onBlur={(e) => {
              props.onBlur && props.onBlur(e)
            }}
            secureTextEntry={secureTextEntry}
            {...props.textInputProps}
          />
          {props.secureTextEntryShowHideIcon && (
            <TouchableOpacity onPress={() => setSecureTextEntry(!secureTextEntry)}>
              <Icon
                name={secureTextEntry ? 'eye' : 'eye-off-outline'}
                size={themeConstants.smallIconSize}
                color={colors.subduedText}
              />
            </TouchableOpacity>
          )}
          {props.useValidation && props.useValidation.showValidationIcon && (
            <>
              {props.useValidation.isValid ? (
                <Icon name="checkmark" size={themeConstants.smallIconSize} color={colors.green} />
              ) : (
                <Icon name="close" size={themeConstants.smallIconSize} color={colors.red} />
              )}
            </>
          )}
        </Box>
      </Box>
      {props.useValidation && props.useValidation.invalidInputMessage && !props.useValidation.isValid && (
        <Text variant="tertiary" color="red" marginLeft="m" marginTop="s">
          {props.useValidation.invalidInputMessage}
        </Text>
      )}
    </Box>
  )
}

export default TextInput
