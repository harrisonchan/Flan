import React, { useEffect, useState } from 'react'
import {
  View,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  ViewStyle,
  RegisteredStyle,
} from 'react-native'
import Animated, { Easing, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated'
import Icon, { IconProps } from './Illustration'

interface TextInputProps {
  onChangeText?: (input: string) => void
  placeholder?: string
  containerStyle?: ViewStyle | ViewStyle[] | RegisteredStyle<ViewStyle> | RegisteredStyle<ViewStyle>[]
  // mode?: 'default'
  label?: string
  labelAnimationDuration?: number
  textInputProps?: RNTextInputProps
  leftIconProps?: IconProps
  rightIconProps?: IconProps
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [input, setInput] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [labelHeight, setLabelHeight] = useState(0)
  const ANIMATION_DURATION = props.labelAnimationDuration ? props.labelAnimationDuration : 300
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
  return (
    <View
      style={[
        {
          width: appStyles.styleUtilities.WIDTH_L,
          height: appStyles.styleUtilities.HEIGHT_L,
          backgroundColor: appStyles.colors.secondaryLight,
          borderRadius: appStyles.styleUtilities.BORDER_RADIUS,
        },
        { flexDirection: 'row', alignItems: 'center' },
        appStyles.spacingStyles.paddingXS,
        props.containerStyle,
      ]}>
      {props.leftIconProps && <Icon {...props.leftIconProps} />}
      <View
        style={[
          appStyles.spacingStyles.marginLeftXS,
          appStyles.spacingStyles.marginRightXS,
          appStyles.styles.flexContainer,
        ]}>
        {props.label && (
          <Animated.Text
            onLayout={(e) => setLabelHeight(e.nativeEvent.layout.height)}
            style={[
              { position: 'absolute', color: appStyles.colors.secondaryDark },
              appStyles.typography.tertiary,
              labelAnimatedStyle,
            ]}>
            {props.label}
          </Animated.Text>
        )}
        <Animated.View style={[textInputTranslateYAnimatedStyle]}>
          <RNTextInput
            placeholder={props.placeholder}
            placeholderTextColor={appStyles.colors.secondaryDark}
            onChangeText={(e) => {
              setInput(e)
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={appStyles.typography.body}
            {...props.textInputProps}
          />
        </Animated.View>
      </View>
      {props.rightIconProps && <Icon {...props.rightIconProps} />}
    </View>
  )
}

export default TextInput
