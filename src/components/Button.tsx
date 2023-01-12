import { useTheme } from '@shopify/restyle'
import { isUndefined } from 'lodash'
import React from 'react'
import { TouchableOpacity, ViewStyle, RegisteredStyle, TouchableOpacityProps, View, StyleProp } from 'react-native'
import Animated from 'react-native-reanimated'
import { moderateScale } from 'react-native-size-matters'
import { IconProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'
import { Theme } from '../theme'
import Text from './Text'

export interface ButtonProps {
  onPress?: () => void
  label?: string
  style?: StyleProp<ViewStyle>
  containerStyle?: StyleProp<ViewStyle>
  // variant?: 'default' | 'smallIcon' | undefined
  mode?: 'default' | 'small'
  icon?: IconProps
}

const Button: React.FC<ButtonProps> = (props) => {
  const { colors, spacing, themeConstants, shadows } = useTheme<Theme>()
  const AnimatedTouchableOpacity = Animated.createAnimatedComponent(TouchableOpacity)
  return (
    <AnimatedTouchableOpacity
      onPress={() => {
        props.onPress && props.onPress()
      }}
      style={[
        props.icon
          ? {
              width: moderateScale(33),
              height: moderateScale(33),
              borderRadius: 5,
              backgroundColor: colors.lightColor,
              ...shadows.secondary,
            }
          : props.mode && props.mode == 'small'
          ? {
              minWidth: themeConstants.componentWidthS,
              maxWidth: themeConstants.componentWidthM,
              // paddingTop: spacing.m,
              // paddingBottom: spacing.m,
              padding: spacing.s,
              borderRadius: 10,
              backgroundColor: colors.buttonBackground,
            }
          : {
              alignSelf: 'center',
              width: themeConstants.componentWidthXL,
              paddingTop: spacing.m,
              paddingBottom: spacing.m,
              borderRadius: 10,
              backgroundColor: colors.buttonBackground,
            },
        props.containerStyle,
      ]}>
      <View style={[{ justifyContent: 'center', alignItems: 'center' }, props.style]}>
        {props.icon ? (
          <Icon size={themeConstants.iconSize} color={colors.primaryColor} {...props.icon} />
        ) : (
          <Text variant={props.mode && props.mode == 'small' ? 'secondary' : 'form'} color="buttonText">
            {props.label}
          </Text>
        )}
      </View>
    </AnimatedTouchableOpacity>
  )
}

export default Button
