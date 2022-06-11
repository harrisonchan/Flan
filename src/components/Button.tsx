import { useTheme } from '@shopify/restyle'
import { isUndefined } from 'lodash'
import React from 'react'
import { TouchableOpacity, ViewStyle, RegisteredStyle } from 'react-native'
import { moderateScale } from 'react-native-size-matters'
import { IconProps } from 'react-native-vector-icons/Icon'
import Icon from 'react-native-vector-icons/Ionicons'
import { Theme } from '../theme'
import Text from './Text'

interface ButtonProps {
  onPress?: () => void
  label?: string
  style?: ViewStyle | RegisteredStyle<ViewStyle> | (RegisteredStyle<ViewStyle> | ViewStyle)[]
  // variant?: 'default' | 'smallIcon' | undefined
  icon?: IconProps
}

const Button: React.FC<ButtonProps> = (props) => {
  const { colors, spacing, themeConstants, shadows } = useTheme<Theme>()
  return (
    <TouchableOpacity
      onPress={() => {
        props.onPress && props.onPress()
      }}
      style={[
        { justifyContent: 'center', alignItems: 'center' },
        props.icon
          ? {
              width: moderateScale(33),
              height: moderateScale(33),
              borderRadius: 5,
              backgroundColor: colors.light,
              ...shadows.secondary,
            }
          : {
              alignSelf: 'center',
              width: themeConstants.largeComponentWidth,
              paddingTop: spacing.m,
              paddingBottom: spacing.m,
              borderRadius: 10,
              backgroundColor: colors.buttonBackground,
            },
        props.style,
      ]}>
      {props.icon ? (
        <Icon size={themeConstants.iconSize} color={colors.primaryColor} {...props.icon} />
      ) : (
        <Text variant="form" color="buttonText">
          {props.label}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default Button
