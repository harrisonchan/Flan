import { useTheme } from '@shopify/restyle'
import React, { useEffect, useState } from 'react'
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  ViewStyle,
  RegisteredStyle,
  ColorValue,
} from 'react-native'
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import { Theme } from '../theme'
import Icon from 'react-native-vector-icons/Ionicons'
import Text from './Text'

interface TextInputProps {
  onChangeText?: (input: string) => void
  placeholder?: string
  backgroundColors?: ColorValue
  containerStyle?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[]
  // mode?: 'default'
  label?: string
  labelColor?: ColorValue
  labelAnimationDuration?: number
  textInputProps?: RNTextInputProps
  // leftIconProps?: IconProps
  // rightIconProps?: IconProps
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [input, setInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [labelHeight, setLabelHeight] = useState(0)
  const ANIMATION_DURATION = props.labelAnimationDuration ? props.labelAnimationDuration : 300
  const { colors, textVariants, spacing, themeConstants } = useTheme<Theme>()
  useEffect(() => {
    props.onChangeText && props.onChangeText(input)

    // Animation
    if (input != '' && labelTranslateYSharedValue.value != 1) {
      labelTranslateYSharedValue.value = withTiming(1, { duration: ANIMATION_DURATION, easing: Easing.elastic(1.5) })
      textInputTranslateYSharedValue.value = withTiming(1, {
        duration: ANIMATION_DURATION,
        easing: Easing.elastic(1.5),
      })
      labelOpacitySharedValue.value = withTiming(1, { duration: ANIMATION_DURATION / 2, easing: Easing.ease })
    } else if (input == '' && labelTranslateYSharedValue.value != 0) {
      labelTranslateYSharedValue.value = withTiming(0, { duration: ANIMATION_DURATION })
      textInputTranslateYSharedValue.value = withTiming(0, { duration: ANIMATION_DURATION })
      labelOpacitySharedValue.value = withTiming(0, { duration: ANIMATION_DURATION / 2, easing: Easing.elastic(1) })
    }
  }, [input])
  const labelTranslateYSharedValue = useSharedValue(0)
  const textInputTranslateYSharedValue = useSharedValue(0)
  const labelOpacitySharedValue = useSharedValue(0)
  const labelAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(labelTranslateYSharedValue.value, [0, 1], [0, -labelHeight / 2])
    const opacity = interpolate(labelOpacitySharedValue.value, [0, 1], [0, 1])
    return { opacity, transform: [{ translateY: translateY }] }
  })
  const textInputTranslateYAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(labelTranslateYSharedValue.value, [0, 1], [0, labelHeight / 2])
    return { transform: [{ translateY: translateY }] }
  })
  const AnimatedText = Animated.createAnimatedComponent(Text)
  return (
    <View
      style={[
        {
          width: themeConstants.componentWidthXL,
          // height: themeConstants.componentHeightS,
          backgroundColor: props.backgroundColors ? props.backgroundColors : colors.lightColor,
          borderRadius: 10,
        },
        { flexDirection: 'row', alignItems: 'center', padding: spacing.l },
        props.containerStyle,
      ]}>
      {/* {props.leftIconProps && <Icon {...props.leftIconProps} />} */}
      <View style={[{ flex: 1, marginLeft: spacing.xs, marginRight: spacing.xs }]}>
        {props.label && (
          <AnimatedText
            onLayout={(e) => setLabelHeight(e.nativeEvent.layout.height)}
            variant="tertiary"
            style={[
              { position: 'absolute', color: props.labelColor ? props.labelColor : colors.neutralText },
              labelAnimatedStyle,
            ]}>
            {props.label}
          </AnimatedText>
        )}
        <Animated.View style={[textInputTranslateYAnimatedStyle]}>
          <RNTextInput
            placeholder={props.placeholder}
            placeholderTextColor={colors.subduedText}
            onChangeText={(e) => {
              setInput(e)
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            // style={textVariants.secondary}
            style={{ color: colors.neutralText }}
            {...props.textInputProps}
          />
        </Animated.View>
      </View>
      {/* {props.rightIconProps && <Icon {...props.rightIconProps} />} */}
    </View>
  )
}

export default TextInput
