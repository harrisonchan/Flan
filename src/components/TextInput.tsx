import { useTheme } from '@shopify/restyle'
import React, { RefObject, useEffect, useRef, useState } from 'react'
import { TextInputProps as RNTextInputProps, TextInput as RNTextInput } from 'react-native'
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Theme } from '../theme'
import { ColorType, TextStyleType, ViewStyleType } from '../types'
import Box from './Box'
import Text from './Text'

interface TextInputProps {
  onChangeText?: (input: string) => void
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
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [labelHeight, setLabelHeight] = useState(0)
  const { textVariants } = useTheme<Theme>()
  const { color, ...secondaryTextVariant } = textVariants.secondary
  return (
    <Box
      {...(props.innerLabel && {
        borderRadius: 10,
        backgroundColor: 'lightColor',
        padding: 's',
        paddingLeft: 'm',
        paddingRight: 'm',
      })}
      style={props.containerStyle}>
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
        })}>
        <RNTextInput
          ref={props.textInputRef}
          placeholder={props.placeholder}
          placeholderTextColor={props.placeholderColor}
          style={[secondaryTextVariant, props.placeholderStyle]}
          onChangeText={(input) => {
            props.onChangeText && props.onChangeText(input)
          }}
          {...props.textInputProps}
        />
      </Box>
    </Box>
  )
}

export default TextInput
